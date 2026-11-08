// worker.js - Calcul PoW SHA-256 en tâche de fond
async function sha256(str) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

let running = false;

self.onmessage = async function(e) {
  if (e.data.cmd === 'START') {
    running = true;
    let nonce = Math.floor(Math.random() * 1000000);
    const prefix = '0'.repeat(e.data.difficulty);
    let count = 0;
    let lastReport = Date.now();

    while (running) {
      const input = e.data.address + '-' + nonce + '-solana-devnet';
      const hash = await sha256(input);
      count++;
      nonce++;

      if (hash.startsWith(prefix)) {
        self.postMessage({ type: 'PROOF', nonce, hash });
      }

      const now = Date.now();
      if (now - lastReport >= 500) {
        self.postMessage({ type: 'STATS', hashes: count });
        count = 0;
        lastReport = now;
      }
    }
  } else if (e.data.cmd === 'STOP') {
    running = false;
  }
};

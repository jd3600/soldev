# ⚡ SOLANA DEVNET POW FAUCET ⚡



/ |/ __ \ | |      / \ | \ | |  / \    |  _ \ / __ \ \    / /   |  | _ _   _  ___ | |
_ | |  | || |     / _ |  | | / _ \   | |) | |  | \ \  / /    | | / ` | | | |/ __/ _ \ |
) | || || | / ___ \ |\  |/ ___ \  |  /| || |\ / /     |  | (| | || | (|  _/ |
|/ _/ |//   __| _//   _||    _/  _/      ||  _,|_,|____|__|

                   [ Web-based Proof-of-Work Mining for Solana Devnet SOL ]



---

## 📖 Overview

The **Solana Devnet PoW Faucet** is an interactive, browser-based Proof-of-Work (PoW) solution designed as a modern alternative to the native CLI tool (`devnet-pow`). 

When public faucet RPC endpoints are rate-limited or congested, this tool allows users to connect their Solana wallet (Phantom, Solflare, etc.) and generate PoW cryptographic proofs locally via Web Workers to claim Devnet SOL tokens.

---

## 🚀 Features

- ⚡ **Multi-Threaded Hashing:** Uses HTML5 Web Workers and `crypto.subtle` for SHA-256 computations without freezing the browser UI.
- 🔌 **Solana Wallet Integration:** Native support for Web3 Solana wallet providers (`window.solana`).
- 📊 **Real-time Telemetry:** Dynamic monitoring of Hashrate (H/s), total nonces searched, and proof validation logs.
- 🌐 **WebSocket Ready:** Configurable WebSocket gateway connection for communicating with distant nodes and custom backends.
- 🎨 **Modern Cyberpunk UI:** Built with Tailwind CSS and styled with Solana's distinct dark theme color scheme.

---

## 🛠️ Quick Start

### 1. Local Execution
You don't need any complex build steps. Simply open `index.html` in your web browser:
```bash
# Clone or create your project directory
mkdir solana-pow-faucet && cd solana-pow-faucet

# Open index.html directly in your default browser
open index.html   # macOS
xdg-open index.html # Linux
start index.html  # Windows

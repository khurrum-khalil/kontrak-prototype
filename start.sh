#!/usr/bin/env bash
# Kontrak prototype: install dependencies (first run only) and start the server.
cd "$(dirname "$0")"
if ! command -v node >/dev/null 2>&1; then
  echo "Node.js 18 or newer is required. Install it from https://nodejs.org, then run ./start.sh again."
  exit 1
fi
if [ ! -d node_modules ]; then
  echo "Installing dependencies (first run only)..."
  npm install || exit 1
fi
echo "Starting Kontrak at http://localhost:3000"
npm start

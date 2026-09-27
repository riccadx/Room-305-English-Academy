#!/bin/bash
# Double-click launcher for Room-305-English-Academy (Works 100% Offline without WiFi!)

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd "$DIR"

echo "======================================================="
echo "🎓 Starting Room-305-English-Academy (Offline Server)..."
echo "======================================================="
echo "Opening web browser at http://127.0.0.1:3000 ..."
echo ""

# Start Vite preview or dev server in background and open browser
npx vite --host 127.0.0.1 --port 3000 --open

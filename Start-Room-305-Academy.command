#!/bin/bash
# Double-click launcher for Room-305-English-Academy (Works 100% Offline on http://localhost:5173/)

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd "$DIR"

echo "======================================================="
echo "🎓 Starting Room-305-English-Academy (Offline Server)..."
echo "======================================================="
echo "Opening web browser at http://localhost:5173/ ..."
echo ""

# Launch Vite dev server on port 5173 and auto-open browser
npx vite --port 5173 --host 0.0.0.0 --open

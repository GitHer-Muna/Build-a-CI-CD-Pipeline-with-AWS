#!/bin/bash
echo "Stopping Node.js application..."

# Kill any running Node.js processes
pkill -f "node server.js" || true

echo "Application stopped successfully"
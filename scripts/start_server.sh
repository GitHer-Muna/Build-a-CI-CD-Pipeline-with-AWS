#!/bin/bash
cd /home/ec2-user/app

echo "Starting Node.js application..."

# Set environment variables
export PORT=80
export NODE_ENV=production

# Start the application in background using nohup
nohup node server.js > /home/ec2-user/app/app.log 2>&1 &

echo "Application started successfully on port 80"
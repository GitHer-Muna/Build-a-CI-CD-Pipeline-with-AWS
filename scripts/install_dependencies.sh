#!/bin/bash
cd /home/ubuntu/app

# Install Node.js if not installed
if ! command -v node &> /dev/null
then
    echo "Installing Node.js..."
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi

# Install application dependencies
echo "Installing application dependencies..."
npm install --production
#!/bin/bash
cd /home/ec2-user/app

# Install Node.js if not installed
if ! command -v node &> /dev/null
then
    echo "Installing Node.js..."
    curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
    sudo yum install -y nodejs
fi

# Install application dependencies
echo "Installing application dependencies..."
npm install --production
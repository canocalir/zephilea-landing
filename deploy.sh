#!/bin/bash

# Exit on error
set -e

echo "🚀 Starting deployment process..."

# Clean up previous build
echo "🧹 Cleaning up previous build..."
rm -rf out

# Install dependencies if needed
echo "📦 Installing dependencies..."
npm ci

# Build the project
echo "🔨 Building the project..."
npm run build

# Create .nojekyll file
echo "📄 Creating .nojekyll file..."
touch out/.nojekyll

# Copy static files if public directory exists
if [ -d "public" ]; then
    echo "📂 Copying static files..."
    cp -r public/* out/
fi

# Deploy to GitHub Pages
echo "🚀 Deploying to GitHub Pages..."
npx gh-pages --dist out --dotfiles --message 'Deploy to GitHub Pages'

echo ""
echo "✅ Deployment complete!"
echo "🌐 Your site should be live at: https://canocalir.github.io/zephilea-landing/"
echo "   Note: It might take a few minutes for the changes to be visible."
echo ""

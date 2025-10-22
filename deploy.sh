#!/bin/bash

# Exit on error
set -e

# Build the project
rm -rf out
npm run build

# Create .nojekyll file
touch out/.nojekyll

# Copy static files
cp -r public/* out/

# Deploy to GitHub Pages
npx gh-pages --dist out --dotfiles --message 'Deploy to GitHub Pages'

echo "Deployment complete! Your site should be live at https://canocalir.github.io/zephilea-landing/"
echo "Note: It might take a few minutes for the changes to be visible."

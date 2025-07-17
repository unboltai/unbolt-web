#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Add .nojekyll file to prevent Jekyll processing
touch ./out/.nojekyll

# Copy CNAME file
cp CNAME ./out/CNAME

echo "Build complete! The 'out' directory contains your static files."
echo "Push to the 'main' branch to trigger automatic deployment to GitHub Pages."

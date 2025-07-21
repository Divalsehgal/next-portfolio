#!/bin/bash

# Find all committed .scss files
invalid_files=$(git diff --cached --name-only | grep '\.scss$' | grep -v 'styles\.module\.scss$')

if [[ "$invalid_files" != "" ]]; then
  echo "❌ Only 'styles.module.scss' is allowed for SCSS modules"
  echo "$invalid_files"
  exit 1
fi

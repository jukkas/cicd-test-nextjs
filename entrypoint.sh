#!/bin/sh

# List all variables you want to be dynamic here
vars="NEXT_PUBLIC_API_URL NEXT_PUBLIC_JUKKAS_TEST_KEY"

# When using standalone output, the files are in the current dir and .next/static
# We search both locations
for varname in $vars; do
    eval varvalue=\$$varname
    placeholder="APP_${varname}"
    
    echo "Replacing $placeholder with $varvalue"
    
    # Search the current directory (.) and .next directory for matches
    # We use -f to ensure we only target files
    find . -type f \( -name "*.js" -o -name "*.html" -o -name "*.json" \) -exec sed -i "s|$placeholder|$varvalue|g" {} +
done

exec "$@"

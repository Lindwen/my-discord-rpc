# Check if node is installed
node -v

# if node is not installed, send a message to the user
if ($LASTEXITCODE -ne 0) {
    Write-Host "Node is not installed. Please install node and try again. (https://nodejs.org/en/)"
    exit 1
}

# Check if yarn is installed
yarn -v

# if yarn is not installed, send a message to the user
if ($LASTEXITCODE -ne 0) {
    Write-Host "Yarn is not installed. Please install yarn and try again. (https://yarnpkg.com/en/docs/install)"
    exit 1
}

# Install dependencies
yarn install

# Run the app
yarn start
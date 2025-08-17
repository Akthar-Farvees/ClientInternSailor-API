# Use official Node LTS
FROM node:20

# Set working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy app source code
COPY . .

# Expose the port Fly will use
EXPOSE 8080

# Start the app
CMD ["node", "src/server.js"]

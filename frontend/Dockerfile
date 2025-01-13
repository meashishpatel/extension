# Use a newer version of Node.js
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the frontend port
EXPOSE 5173

# Build the frontend app
RUN npm run build

# Serve the production build
CMD ["npm", "run", "preview"]

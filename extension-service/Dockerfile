# Step 1: Use Node.js base image
FROM node:16

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json for dependency installation
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code
COPY . .

# Step 6: Expose the backend port (4000)
EXPOSE 4000

# Step 7: Start the server
CMD ["node", "server.js"]

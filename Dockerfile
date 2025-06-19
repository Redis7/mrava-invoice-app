# Use a lightweight Node.js image
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --development

# Copy the rest of the application
COPY . .

# Expose port
EXPOSE 5173

# Start Vite in development mode
CMD ["npm", "run", "dev", "--", "--host"]
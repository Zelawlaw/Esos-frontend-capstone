# Use a Node.js base image
FROM node:14 AS build-stage

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install the application's dependencies inside the container
RUN npm install

# Copy the rest of the application into the container
COPY . .

# Build the React application
RUN npm run build

# Use nginx to serve the built application
FROM nginx:alpine

# Copy the build output to replace the default nginx contents
COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html

# Expose port 80 for nginx
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]


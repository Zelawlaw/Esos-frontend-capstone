# Navigate to the directory containing the Dockerfile
cd /Users/lawrencekarani/Documents/Unlearn_and_Learn/Digital_Academy/school_work/capstone/containers

# Build the Docker image
docker build -t esos-frontend-app .

# Run the Docker container, forwarding port 3001 on the host to port 80 inside the container
docker run -p 3001:80 esos-frontend-app


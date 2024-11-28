#!/bin/bash

# Function to start the Next.js development server
start_nextjs() {
  npm run dev
}

# Function to monitor the process and restart if necessary
monitor_process() {
  while true; do
    pid=$(pgrep -f "next dev")
    if [ -z "$pid" ]; then
      echo "Next.js process has exited. Restarting..."
      start_nextjs
    fi
    sleep 5
  done
}

# Start the Next.js development server in the background
start_nextjs &

# Monitor the process in the background
monitor_process &

# Keep the script running in the foreground
wait
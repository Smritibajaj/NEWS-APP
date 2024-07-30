This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

1. Copy .example.env to .env and paste your api keys

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Technical Stack Used

1. Design - Tailwind CSS 
2. Framework - Next JS + React Query
3. Deployment - Vercel, Docker

## Why Next JS

Next.js is a popular React framework known for its powerful features and benefits that can make web development more efficient and scalable. Here are the reason i used next js.
1. Server-Side Rendering (SSR) and Static Site Generation (SSG)
2. Automatic Code Splitting
3. Hot Reloading: 


## Why React Query 

React Query is a popular data-fetching and state management library for React applications. It requrires fast load with small package so I opted react query instead of redux.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Docker Deployment

Creating a Docker Image
To create a Docker image for this Next.js application, follow these steps:

Ensure Docker is installed on your system.

Build the Docker image:

```bash
docker build -t my-nextjs-app .
```

This command builds the Docker image using the Dockerfile in the project's root directory and tags it as my-nextjs-app.

Run the Docker container:

```bash
docker run -p 3000:3000 my-nextjs-app
```

Updating the Docker Image
When changes are made to the application, you may need to update the Docker image. Here’s how:

Rebuild the Docker image:

```bash
docker build -t my-nextjs-app .
```

Restart the Docker container with the updated image:

```bash
docker run -p 3000:3000 my-nextjs-app
```

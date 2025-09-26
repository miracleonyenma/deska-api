# deska

GraphQL API built with TypeScript, Express, and MongoDB.

## Getting Started

### Development Mode (Hot Reload with Docker)

1. Clone this repository
2. Configure your environment variables in the `.env` file
3. Start the development services:
```bash
docker-compose -f docker-compose.dev.yml up
```

This will start the containers with:
- **Hot reload** - Code changes automatically restart the server
- **Volume mounting** - Your source code is mounted into the container
- **Development dependencies** - Nodemon and dev tools available

### Production Mode (Docker)

1. Build and start production services:
```bash
docker-compose -f docker-compose.prod.yml up -d
```

This uses the optimized production build with compiled TypeScript.

### Local Development (Without Docker)

1. Clone this repository
2. Install dependencies:
```bash
npm install
```
3. Configure your environment variables in the `.env` file
4. Start the development server:
```bash
npm run dev
```

## Environment Variables

The following environment variables have been pre-configured:

- `PORT`: 3212 (Server port)
- `APP_NAME`: deska
- `APP_URL`: http://localhost:3212
- `MONGO_URI`: Docker MongoDB connection
- `VAPID_PUBLIC_KEY` and `VAPID_PRIVATE_KEY`: Generated for Web Push notifications


### Email Configuration
Update the following variables with your email service credentials:
- `MAIL_HOST`
- `MAIL_PORT`
- `MAIL_USER`
- `MAIL_PASS`
- `MAIL_LOGO`
- `RESEND_API_KEY` (if using Resend)
- `DEFAULT_MAIL_PROVIDER`


### Google OAuth
Update the following variables with your Google OAuth credentials:
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `GOOGLE_OAUTH_REDIRECT_URI`






## Docker Services

- **API**: Express GraphQL server running on port 3212
- **MongoDB**: Database server running on port 27017 with persistent data storage

## Features

- TypeScript Express API with GraphQL
- MongoDB integration with Mongoose
- Docker configuration for development and production
- Containerized MongoDB with data persistence
- **Hot reload in development** - Code changes automatically restart the server
- Web Push notification support
- Email service integration
- Google OAuth authentication

## GraphQL Playground

Access the GraphQL playground at: http://localhost:3212/graphql

## MongoDB Management

You can connect to the MongoDB container using any MongoDB client:
- **Connection String**: `mongodb://localhost:27017`
- **Database**: `deska`

To access the MongoDB shell:
```bash
docker exec -it $(docker ps -qf "name=mongo") mongosh
```


## Development Commands

```bash
# Local development
npm run dev          # Start with nodemon (hot reload)
npm run build        # Build TypeScript
npm start           # Start production build

# Docker development (with hot reload)
docker-compose -f docker-compose.dev.yml up
docker-compose -f docker-compose.dev.yml down

# Docker production
docker-compose -f docker-compose.prod.yml up -d
docker-compose -f docker-compose.prod.yml down

# View logs
docker-compose -f docker-compose.dev.yml logs -f api
docker-compose -f docker-compose.dev.yml logs -f mongo

```

## Development Workflow

### With Docker (Recommended)

1. Start development containers:
   ```bash
   docker-compose -f docker-compose.dev.yml up
   ```

2. Make changes to your code in the `src/` directory

3. The server will automatically restart when you save changes

4. View logs in real-time in your terminal

5. Stop containers:
   ```bash
   docker-compose -f docker-compose.dev.yml down
   ```

### Without Docker

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Make changes to your code

3. Nodemon will automatically restart the server

4. Access your API at http://localhost:3212

## Production Deployment

Use the production Docker Compose configuration:

```bash
# Build and start production containers
docker-compose -f docker-compose.prod.yml up -d

# Check status
docker-compose -f docker-compose.prod.yml ps

# View logs
docker-compose -f docker-compose.prod.yml logs -f
```

The production setup includes:
- Compiled TypeScript (no source code in container)
- Optimized Node.js image
- Production environment variables
- Automatic container restart on failure


## Generated with @untools/starter

This project was scaffolded using [@untools/starter](https://www.npmjs.com/package/@untools/starter).

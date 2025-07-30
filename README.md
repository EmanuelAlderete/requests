# Requests Study Project

This is a study project focused on HTTP requests and state management in React, part of the Rocketseat React formation.

## About the Project

This project demonstrates how to work with:

- HTTP requests to APIs
- State management with custom hooks
- CRUD operations (Create, Read, Update, Delete)
- JSON Server integration

## Technologies Used

- React + TypeScript
- Vite
- JSON Server
- pnpm

## How to Run

### 1. Install dependencies

```bash
pnpm install
```

### 2. Start the data server (JSON Server)

```bash
npx json-server db.json
```

### 3. In another terminal, start the development server

```bash
pnpm dev
```

## Project Structure

- `src/components/` - React components
- `src/hooks/` - Custom hooks
- `src/helpers/` - Helper functions
- `src/models/` - Type definitions
- `db.json` - JSON database for development

## Features

- User listing
- Create new users
- Detailed information view
- State management with custom hooks

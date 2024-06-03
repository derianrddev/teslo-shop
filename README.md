<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Teslo Shop API

## Overview

It is a RESTful API for a Ecommerce of Tesla products.

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- Nest CLI 

  ```bash 
  npm i -g @nestjs/cli 
  ```

- [Docker Desktop](https://www.docker.com/get-started/)

### Setup

1. Clone the Repository

   ```bash
   git clone https://github.com/derianrddev/teslo-shop.git
   cd teslo-shop
   ```

2. Install Dependencies

   ```bash
   npm install
   ```

3. Raise the database
   ```
   docker-compose up -d
   ```

4. Clone the file ```.env.template``` and rename the copy to ```.env```.

5. Fill in the environment variables defined in the ```.env```.

6. Run the application in dev:
   ```
   npm run start:dev
   ```

## Technologies

- Nest.js
- PostgreSQL
- TypeORM
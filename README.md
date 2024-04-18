# CRUD API 🍃

This repository contains the code for a CRUD (Create, Read, Update, Delete) API implemented using Node.js, Express.js, and MongoDB.

## Features 🌱

- **Create:** Allows users to create new product in the database.
- **Read:** Retrieves data from the database.
- **Update:** Allows users to modify existing data in the database.
- **Delete:** Removes data from the database.

## Installation 🧑‍💻

1. Clone this repository to your local machine.
   ```bash
   git clone https://github.com/Varunyadavgithub/CRUD-API.git
   ```

2. Install dependencies.
   ```bash
   npm install
   ```

3. Set up MongoDB:
   - Ensure MongoDB is installed on your system.
   - Create a `.env` file in the root directory of the project.
   - Inside the `.env` file, add the MongoDB connection string in the following format:
     
     ``` bash
     MONGODB_URI=mongodb://localhost:27017/your-database
     ```

4. Start the server.
   ```bash
   npm start
   ```

## Usage 🪴

- Use POST requests to create new product.
- Use GET requests to retrieve product from the database.
- Use PUT requests to update existing product.
- Use DELETE requests to remove product from the database.

## API Endpoints 🔗

- `POST /api/products`: Create a new products.
- `GET /api/products`: Retrieve all products.
- `GET /api/products/:id`: Retrieve a specific products by ID.
- `PUT /api/products/:id`: Update a specific product by ID.
- `DELETE /api/products/:id`: Delete a specific product by ID.

# BACKEND APP WITH NODE AND POSTGRESQL
This is non-optimized minimal backend app with postgresql and node. Backend app theme is "E-Commerce"

## Requirements
- NodeJS v14 LTS
- MySQL 

## How To Run This App

- Make sure you had clone this repo
- Copy environment from `.env.example` to `.env`
- Configure your `.env` file according to your Postgres credentials
- Open your terminal in this project and run 
  ```
  npm i
  ```
- And then
  ```
  npx nodemon
  ```

#Flowchart
![alt text](https://github.com/mathiuskormasela12/tickitz-backend/blob/main/tickitz.png?raw=true)

## API SPECS
- GET `/api/admin/cinemas` Route for get all cinema lists
- POST `/api/admin/cinemas` Route for add new cinema
- POST `/api/admin/genres` Route for add new genre
- POST `/api/admin/movies` Route for add new movie
- GET `/api/movies/:id` Route for get movie details
- GET `/api/movies` Route get all movie
- DELETE `/api/admin/cinemas/:id` Route for delete cinema
- PATCH `/api/admin/cinemas/:id` Route for edit cinema
- PUT `/api/admin/cinemas` Route for add new cinema
- POST `/api/admin/genres` Route for add new genre
- GET `/api/admin/genres` Route for get all genre
- GET/POST `/api/v1/checkout` Route for view calculated items on invoice and confirm order
- POST `/api/v1/payment/:invoiceId` Route for payment not paid invoice **(Not done yet)**

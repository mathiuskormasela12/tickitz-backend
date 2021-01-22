# BACKEND APP WITH NODE AND MySQL
This is non-optimized minimal backend app with mysql and node. Backend app theme is "Ticketing Online"

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
  npm start
  ```

# Flowchart
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

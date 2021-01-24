# BACKEND APP WITH Express Js AND MySQL
This is non-optimized minimal backend app with mysql and node js. Backend app theme is "Ticketing Online"

## Requirements
- NodeJS v14 LTS
- MySQL 

## How To Run This App

- Make sure you had clone this repo
- Copy environment from `.env.example` to `.env`
- Configure your `.env` file according to your MySQL credentials
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
- POST `/api/auth/register` Route for add new user
- POST `/api/auth/login` Route for login user

- POST `/api/admin/movies` Route for add new movie
- PUT `/api/admin/movies` Route for add new movie
- DELETE `/api/admin/movies/:id` Route for delete movie
- PATCH `/api/admin/movies/:id` Route for update movie
- GET `/api/admin/movies` Route for get all movies
- GET `/api/movies` Route for get all movies
- GET `/api/movies/:id` Route for get all movie detail
- GET `/api/movies/:id` Route for get movie details

- GET `/api/admin/cinemas` Route for get all cinema lists
- GET `/api/admin/cinemas/:id` Route for get cinema details
- POST `/api/admin/cinemas` Route for add new cinema
- PUT `/api/admin/cinemas` Route for add new cinema
- PATCH `/api/admin/cinemas/:id` Route for update cinema
- DELETE `/api/admin/cinemas/:id` Route for delete cinema
- GET `/api/cinemas` Route for get all cinema lists
- GET `/api/cinemas/:id` Route for get cinema details

- POST `/api/admin/genres` Route for add new genre
- PUT `/api/admin/genres` Route for add new genre
- PATCH `/api/admin/genres/:id` Route for update genre
- DELETE `/api/admin/genres/:id` Route for delete genre
- GET `/api/admin/genres` Route for get all genre
- GET `/api/admin/genres/:id` Route for get genre details
- GET `/api/genre/:name` Route for get all movies by genre name


- POST `/api/moviegoers` Route for add moviegoers
- PATCH `/api/auth/active` Route for activated user account
- PATCH `/api/auth/password` Route for send email for edit user password 
- POST `/api/auth/register` Route for add new user
- PATCH `/api/auth/password/:id/:email` Route for edit user password
- PATCH `/api/auth/user/:id` Route for edit user profile
- GET `/api/auth/user/:id` Route for get all user by id
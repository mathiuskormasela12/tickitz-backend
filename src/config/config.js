module.exports = {
  uploadOptions: {
    createParentPath: true
  },
  addMovieBody: [
    'title',
    'releaseDate',
    'duration',
    'direct',
    'casts',
    'synopsis',
    'genreId'
  ],
  addGenreBody: [
    'name'
  ],
  addCinemasBody: [
    'name',
    'address',
    'pricePerSeat',
    'city'
  ],
  registerBody: [
    'email',
    'password',
    'password_confirm',
    'role'
  ],
  loginBody: [
    'email',
    'password'
  ]
}

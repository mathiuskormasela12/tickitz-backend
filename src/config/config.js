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
  ]
}

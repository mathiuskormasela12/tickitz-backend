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
    'poster'
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

// ===== Config
const {
  EMAIL,
  EMAIL_PASSWORD,
  EMAIL_HOST,
  EMAIL_SERVICE
} = process.env

module.exports = {
  uploadOptions: {
    createParentPath: true
  },
  mailerOptions: {
    service: EMAIL_SERVICE,
    host: EMAIL_HOST,
    auth: {
      user: EMAIL,
      pass: EMAIL_PASSWORD
    }
  },
  addMovieBody: [
    'title',
    'category',
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
  ],
  forgotPasswordBody: [
    'email'
  ],
  editPasswordBody: [
    'password'
  ],
  editUserBody: [
    'first_name',
    'phone',
    'email'
  ],
  addTime: [
    'time'
  ],
  transaction: [
    'showTimeId',
    'timeId',
    'cinemaId',
    'totalPayment',
    'paymentMethod',
    'seats',
    'movieId',
    'showTimeDate',
    'ticketTime',
    'cinemaName',
    'cinemaPoster',
    'cinemaCity'
  ],
  addShowTime: [
    'cinemaId',
    'timeId',
    'showTimeDate'
  ]
}

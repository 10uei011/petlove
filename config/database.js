module.exports = {
  'secret': 'thisIsQuiteExciting',
  'port': process.env.PORT || 8000,
  'database': process.env.MONGO_URL || 'mongodb://tina:123456@ds035806.mlab.com:35806/petlove'
}

// module.exports = {
//   'secret': 'thisIsQuiteExciting',
//   'port': process.env.PORT || 3000,
//   'database': process.env.MONGO_URL || 'mongodb://localhost:27017/petlove'
// }


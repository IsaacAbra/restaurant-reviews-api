const mongoose = require('mongoose')

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  cuisine: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  review: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    max: 5,
    min: 0
  }
}, {
  timestamps: true
})

const Restaurants = mongoose.model('Restaurant', restaurantSchema)

module.exports = Restaurants

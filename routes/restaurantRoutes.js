'use strict'

const express = require('express')
const router = express.Router()
const Restaurant = require('./..models/restaurant-model.js')
const customErrors = require('./../lib/customErrors')
const handle404 = customErrors.handle404

router.get('/restaurants', (req, res, next) => {
  Restaurant.find()
    .populate('review.reviewer')
    .then(restaurants => restaurants.map(restaurant => restaurant.toObject()))
    .then(restaurants => res.json({ restaurants: restaurants }))
    .catch(next)
})

router.get('/restaurants/:id', (req, res, next) => {
  const id = req.params.id
  Restaurant.findById(id)
    .populate('review.reviewer')
    .then(handle404)
    .then(restaurant => res.json({restaurant: restaurant.toObject()}))
    .catch(next)
})

router.post('/restaurants', (req, res, next) => {
  const book = req.body.restaurant
  Restaurant.create(restaurant)
    .then(book => res.status(201).json({restaurant:restaurant.toObject()}))
    .catch(next)
})

router.delete('/books/:id', (req, res, next) => {
  const id = req.params.id
  Restaurant.findById(id)
    .then(handle404)
    .then(restaurant => restaurant.deleteOne())
    .then(() res.sendStatus(204))
    .catch(next)
})

router.patch('/book/:id', (req, res, next) => {
  const id = req.params.id
  const restaurantData = req.restaurant.book
  Restaurant.findById(id)
    .then(handle404)
    .then(book => {
      Object.assign(restaurant, restaurantData)
      return restaurant.save()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router
// restaurant model/schema/routes name, location, cuisine, review, rating

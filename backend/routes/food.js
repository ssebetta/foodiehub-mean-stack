const express = require('express');
const router = express.Router();

// Call all necessary models
const Food = require('../models/Food');

// Get all foods
router.get('/', async (req, res) => {
    const foods = await Food.find();
    res.json(foods);    
});

// Post food
router.post('/', async (req, res) => {
    const newFood = new Food(req.body);
    await newFood.save();
    res.json(newFood);
});

// Delete Food
router.delete('/', async (req, res) => {
    await Food.findByIdAndDelete(req.params.id);
    res.json({message: 'Food deleted'})
});

module.exports = router;
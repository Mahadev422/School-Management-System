// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  UID: {
    type: String,
    required: true,
    unique: true
  },
  
  email: {
    type: String,
    required: true,
    unique: true
  },
  
  displayName: {
    type: String,
    default: ''
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);
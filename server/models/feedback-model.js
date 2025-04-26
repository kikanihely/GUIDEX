const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  usageFrequency: {
    type: String,
    required: true,
  },
  motivation: {
    type: String,
    required: true,
  },
  mostUsedFeature: {
    type: String,
    required: true,
  },
  improvement: {
    type: String,
    required: true,
  },
  followUp: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;

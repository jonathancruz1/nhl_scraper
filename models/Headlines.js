// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create Headlines schema
var HeadlinesSchema = new Schema({
  // title is a required string
  title: {
    type: String,
    required: true
  },
  // link is a required string
  link: {
    type: String,
    required: true
  },
  // This only saves one note's ObjectId, ref refers to the Note model
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

// Create the Headlines model with the HeadlinesSchema
var Headlines = mongoose.model("Headlines", HeadlinesSchema);

// Export the model
module.exports = Headlines;

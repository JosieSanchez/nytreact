var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var HistorySchema = new Schema({
  //was location
  topic: {
    type: String
  },
  //was date
    startyear: {
    type: Date
  },
  //was date
  endyear: {
    type: Date
  }
});

var History = mongoose.model("History", HistorySchema);
module.exports = History;

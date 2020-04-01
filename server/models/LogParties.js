const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const partySchema = new Schema(
  {
    title: String,
  },
  { timestamps: true }
);

const partyEntry = mongoose.model('PartyEntry', partySchema);
//  For future referance
const partyEntry1 = mongoose.model('Party', partySchema);

module.exports = {
  partyEntry,
  partyEntry1,
};

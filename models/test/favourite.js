const mongoose = require("mongoose");

const favouriteSchema = new mongoose.Schema(
  {
    userId: Number,
    flight_number: Number,
    favourite: Boolean
  },
  { timestamps: true }
);


favouriteSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Favourite", favouriteSchema);
const mongoose = require("mongoose");

const testSchema = new mongoose.Schema(
  {
    test: String
  },
  { timestamps: true }
);


testSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Test", testSchema);
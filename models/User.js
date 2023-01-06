const mongoose = require("mongoose");
const { Schema } = mongoose;
const { groupSchema } = require("./Group");

const userSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    group: {
      type: [groupSchema],
      require: false,
    },
  },
  { timestamps: true } // salvar infos de datas
);

const User = mongoose.model("User", userSchema);

module.exports = {
  User,
};

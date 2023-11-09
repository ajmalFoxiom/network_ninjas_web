const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String,},
  name: { type: String,  },
  email: { type: String, },
  password: { type: String,  },
  mobile:{type:String,required:true},
  age:{type:String,},
  city:{ type: String,},
  you_are: {
    type: String,
  },  
  looking_for:{ type: String,
    required: true,},
  longitude:{ type: String,  },
  latitude:{ type: String, },
}, {
  versionKey: false
});


module.exports = mongoose.model("User", userSchema);


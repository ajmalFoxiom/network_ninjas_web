const { default: mongoose } = require("mongoose");


let Schema= mongoose.Schema({
     user_id:{type:mongoose.Types.ObjectId,require:true,ref:"User"},
     departmentname:{type:String,require:true},
     phone:{type:String,require:trur},

},{
    versionKey:false
}
)

module.exports =mongoose.model("Details",Schema)
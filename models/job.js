const mongoose = require('mongoose');

const job = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    jobTitle: String,
    jobProvider: String,
    jobSkills: Array,
    jobURL: String,
    jobLocation: String,
    jobIndustry: String,
    jobType: String 
    

});
module.exports = mongoose.model("job", job);
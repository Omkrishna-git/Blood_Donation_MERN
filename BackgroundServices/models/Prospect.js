const mongoose = require("mongoose");

const ProspectSchama = mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    address: { type: String },
    tel: { type: String },
    bloodgroup: { type: String },
    weigth: { type: Number },
    date: { type: String },
    diseases: { type: String },
    bloodpressure: { type: Number },
    status: { type: Number, default: 0 },
});

module.export = mongoose.model("Prospect", ProspectSchama);
 
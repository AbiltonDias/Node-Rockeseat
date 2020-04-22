const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');

const ServiceSchema = new mongoose.Schema({
    title: {
        required : true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    url : {
        required:true,
        type: String
    },
    createService: {
        type: Date,
        default: Date.now
    }
});

ServiceSchema.plugin(paginate);
mongoose.model('Service', ServiceSchema);
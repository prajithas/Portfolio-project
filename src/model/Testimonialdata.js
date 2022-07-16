const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Praji_portfoliouser:JpR37cJ4ILWCRe18@portfoliocluster0.u6rff.mongodb.net/?retryWrites=true&w=majority',
{
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const Schema = mongoose.Schema;

var NewTestimonialSchema = new Schema({
    Message:String,
    clientName:String,
    clientPosition:String,
    Date:String,
    ImageUrl:String
});

var Testimonialdata = mongoose.model('Testimonial', NewTestimonialSchema,'testimonial'); 
module.exports = Testimonialdata;

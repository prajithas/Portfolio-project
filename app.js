const express= require('express');
const cors = require('cors');
const TestimonialData = require('./src/model/Testimonialdata');
const path = require('path');

var app = new express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('/dist/frontend'));
app.get("*", (req, res) => {
  res.sendFile('index.html');
});
// Backend root
app.get('/api/', (req, res) => {
    res.send('hello world')
  });
 
//getting data from db
app.get('/testimonials',function(req,res){   
  TestimonialData.find()
              .then(function(testimonial){
                  res.send(testimonial);
              });
});
app.use(express.static('./dist/Frontend'));
// Connecting with server
app.listen(process.env.PORT || 3000, function(){
    console.log('listening to port 3000');
});

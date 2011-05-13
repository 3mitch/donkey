var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/local');
Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;

// Article schema

var Article = new Schema({
  title : {type : String, default : '', required : true},
  body : {type : String, default : ''},
  sig: {type: String, default: 'This is my new signature'},
  created_at : {type : Date, default : Date.now},
  updated_at : {type : Date, default : Date.now}
});
  
mongoose.model('Article', Article);
var Article = exports.Article = mongoose.model('Article');


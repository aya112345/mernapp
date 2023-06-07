import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    firstName: {
    type: String
  },
  
  lastName: {
    type: String
  },
  age: {
    type: Number
  }
});

const User = mongoose.model('User', schema);

export default User;  

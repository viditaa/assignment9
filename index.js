const express = require('express');
const mongoose = require('mongoose');
const todosRoutes = require('./routes/todos');

const app = express();
const PORT = 3000;


app.use(express.json());


const mongoURI = 'mongodb+srv://viditasharma13:viditasharma@cluster0.6owmb.mongodb.net/myDatabase?retryWrites=true&w=majority';

mongoose.connect(mongoURI)
  .then(() => console.log('Connected to MongoDB Atlas!'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));


app.use('/todos', todosRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
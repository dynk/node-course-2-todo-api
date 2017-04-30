const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.remove({}).then((result)=>{
//     console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '59060391d779ee487b767322'}).then((todo)=>{

});

Todo.findByIdAndRemove('59060391d779ee487b767322').then((todo)=>{
    console.log(todo);
})

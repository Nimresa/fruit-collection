import mongoose from "mongoose";

mongoose.connect('mongodb+srv://nuts:gonuts@buster.e8asuxy.mongodb.net/fruitsDB?retryWrites=true&w=majority');

const fruitSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, "Ups, forgot the name!"],
        unique: [true, "You already have one with that name1"]
    },
    rating: {
        type: Number, 
        min: 1, 
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const lemon = new Fruit({
    name: "Lemon",
    rating: 3,
    review: "Too sour for me.."
});

const dragon = new Fruit({
    name: "dragon fruit",
    review: "Have no idea, never tried."
});

const beries = new Fruit({
    name: "Strawberies",
    rating: 9,
    review: "Very tasty but it`s not a fruit."
});
//SAVE ONE:
//fruit.save();

//SAVE BULK:
Fruit.insertMany([lemon, dragon, beries], function(err){
    if (err){
        console.log(err);
    }else{
        console.log("Success saving all the fruits");
    }
});

//READ DATA:
Fruit.find(function(err, fruits){
    if (err){
        console.log (err);
    } else {
        mongoose.connection.close(); //close the connection to db
        //SHOW full COLLECTION:
        //console.log (fruits);
        //SHOW ONLY NAMES:
        fruits.forEach(function (fruit){
            console.log(fruit.name);
        });
    }
});

//UPDATE DATA:
/*Fruit.updateOne({_id:"631ef0a23ad780bd97b17ef2"}, {review: "The best multi-purpose fruit ever!"}, function(err){
    if(err){
        console.log(err)
    } else {
        console.log("succesfull update!");
    }
});*/

//DELETE ONE:
/*Fruit.deleteOne({name: "Orange"}, function(err){
    if(err){
        console.log(err)
    } else {
        console.log("Fruit is deleted!");
    }
});*/

//DELETE MANY:
/*Fruit.deleteMany ({rating: 3}, function(err){
    if(err){
        console.log(err)
    } else {
        console.log("All specified data is deleted!");
    }
});*/
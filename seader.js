const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/hiking', { useNewUrlParser: true });

const Tour = require('./src/server/models/tour');

const db = mongoose.connection;

async function run() {

        let tour1 = new Tour({
            userName: 'Andrey',
            tourName: "CityTour",
            description: "The best hiking ever",
            allMarks: [[55,46],[43,32]],
            allLines: [[55,46],[43,32]]
    
        });


        // await tour1.save()
        let a = await Tour.find();
        console.log(a);
        
        db.close();
    }
    
    console.log(">>>>>>>>>>>>>>");
run();


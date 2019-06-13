const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/reactYelp', { useNewUrlParser: true });

const Rest = require('./src/server/models/rest');

const db = mongoose.connection;

async function run() {

        let rest1 = new Rest({
            id: 3,
            name: "Bar Pisellino",
            description: "The best bar ever",
            reviews:['I like it']
    
        });

        let rest2 = new Rest({
            id: 4,
            name: "Square Pizza",
            description: "The best pizza",
            reviews:['I like it too much']
    
        });

        let rest3 = new Rest({
            id: 5,
            name: "Tzaverno",
            description: "The best restaurant ever",
            reviews:['I like it too']
    
        });


        // await rest1.save()
        // await rest2.save()
        // await rest3.save()
        let a = await Rest.find();
        console.log(a);
        
        db.close();
    }
    
    console.log(">>>>>>>>>>>>>>");
run();


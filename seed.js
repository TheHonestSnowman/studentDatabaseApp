var mongoose = require("mongoose"),
    Student  = require("./Models/studentData");                                 //include the student model
    
    
var data = [                                                                    // dummy data for the database
    {
        studentID: "UP729336",
        image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=350",
        unitOne: 70,
        unitTwo: 65,
        unitThree: 95,
        studentClass: "1A", 
        year: 2016
    },
    {
        studentID: "UP123456",
        image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&h=350",
        unitOne: 85,
        unitTwo: 31,
        unitThree: 43,
        studentClass: "1A", 
        year: 2016
    },
    {
        studentID: "UP213456",
        image: "https://images.pexels.com/photos/638700/pexels-photo-638700.jpeg?auto=compress&cs=tinysrgb&h=350",
        unitOne: 10,
        unitTwo: 36,
        unitThree: 42,
        studentClass: "1A", 
        year: 2016
    },
    
    {
        studentID: "UP389218",
        image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&h=350",
        unitOne: 39,
        unitTwo: 75,
        unitThree: 95,
        studentClass: "1A", 
        year: 2017
    },
    {
        studentID: "UP457892",
        image: "https://images.pexels.com/photos/638700/pexels-photo-638700.jpeg?auto=compress&cs=tinysrgb&h=350",
        unitOne: 20,
        unitTwo: 70,
        unitThree: 89,
        studentClass: "1A", 
        year: 2017
    },
    {
        studentID: "UP567891",
        image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&h=350",
        unitOne: 20,
        unitTwo: 70,
        unitThree: 89,
        studentClass: "1A", 
        year: 2017
    },
    
    {
        studentID: "UP678912",
        image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=350",
        unitOne: 20,
        unitTwo: 70,
        unitThree: 89,
        studentClass: "1A", 
        year: 2018
    },
    {
        studentID: "UP789123",
        image: "https://images.pexels.com/photos/638700/pexels-photo-638700.jpeg?auto=compress&cs=tinysrgb&h=350",
        unitOne: 20,
        unitTwo: 70,
        unitThree: 89,
        studentClass: "1A", 
        year: 2018
    },
    {
        studentID: "UP890123",
        image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=350",
        unitOne: 90,
        unitTwo: 38,
        unitThree: 76,
        studentClass: "1A", 
        year: 2018
    }
    
    ]


function seedDB()
    {
        Student.remove({}, function(err)                                        //remove existing data from the database
        {
            if(err){
                console.log(err);
             } else{
                console.log("database purged");
            
            
                data.forEach(function(seed)                                     // add the dummy data to the database
                {
                    Student.create(seed, function(err, student){
                        if(err){
                            console.log(err);
                        } else {
                            console.log("Student added"); 
                        }
                        
                    });
                });
                }
        });
    
    }   

module.exports = seedDB;                                                        // all the module to be called from another file
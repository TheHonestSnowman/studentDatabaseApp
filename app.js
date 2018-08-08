var express     = require("express"),
    mongoose    = require("mongoose"),
    app         = express(),
    seedDB      = require("./seed"),
    Student     = require("./Models/studentData");

seedDB();       //fill the database with dummy data from seed file  
    
mongoose.connect("mongodb://localhost:27017/studentData", { useNewUrlParser: true });       //connect to the database
app.set("view engine", "ejs");                                                              //use .ejs as default
app.use(express.static(__dirname + "/Public"));                                             //define file path

app.get("/", function(req, res){                                                            //define what is returned for / file path 
    Student.find({}, function(err, allStudents){                                            // find all students in the database
        if(err){                                                                            // if there is an error then log it in the console
            console.log(err);
        } else {
                    res.render("student/main", {students: allStudents});                    // otherwise render the main page, sending the data
                }
        
    });
});


app.get("/student/:id", function(req, res){                                                 //route for individual student
    Student.findById(req.params.id, function(err, oneStudent){                              // find student record by its mongoose generated id
        if(err){                                                                            // if there is an error then log it in the console
            console.log(err);
        } else {
                    res.render("student/show", {student: oneStudent});                      //otherwise render the show page, sending the specified data
                }
    });
});
    

app.listen(process.env.PORT, process.env.IP, function(){                                    // tell express where to run the server
    console.log("Server has started");
});

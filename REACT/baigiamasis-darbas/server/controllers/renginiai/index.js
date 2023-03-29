const db = require("../../database/db");

exports.gautiRenginius = (req, res) => {
    db.query("SELECT * FROM renginiai;", [], function(error, results){
        if(error){
           console.log(error);
           res.status(500).json({
               "msg": "Ivyko klaida"
           });
        } else {
            res.status(200).render("renginiai.ejs", { duomenys: results });
    };
 } 
 )};

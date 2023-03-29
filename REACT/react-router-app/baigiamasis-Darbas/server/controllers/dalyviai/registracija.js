const db = require('../../database/db.js');

exports.registruotiDalyvi = (req, res) => {
    db.query("SELECT * FROM renginiai;", [], function (error, results) {
        if (error) {
            console.log(error);
            res.status(500).json({
                "msg": "Ivyko klaida"
            });
        } else {
            res.status(200).render("registracija.ejs", { results: results });
        }
    });
    
}
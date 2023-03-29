const db = require('../../database/db.js');

exports.registruotiDalyviPost = (req, res) => {
    console.log(req.body);
    db.query("INSERT INTO dalyviai " + 
    "(vardas, pavarde, el_pastas, amzius, gimimo_data, renginio_id) " + 
    "VALUES (?, ?, ?, ?, ?, ?);", 
    [req.body.vardas, req.body.pavarde, req.body.el_pastas, req.body.amzius, req.body.gimimo_data, req.body.renginio_id], 
    function (error, results) {
        if (error) {
            console.log(error);
            res.status(500).json({
                "msg": "Ivyko klaida"
            });
        } else {
            console.log(results);
            res.redirect("/");
        }
    });
}
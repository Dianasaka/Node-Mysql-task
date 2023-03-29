const db = require("../../database/db");

exports.gautiDalyvius = (req, res) => {
    let dalyviai;
    db.query("SELECT * FROM dalyviai INNER JOIN renginiai ON dalyviai.renginio_id=renginiai.renginio_id;", [], function (error, results) {
        if (error) {
            console.log(error);
            res.status(500).json({
                "msg": "Ivyko klaida"
            });
        } else {
            res.status(200).render("dalyviai.ejs", { duomenys: results });
        }
    });
}
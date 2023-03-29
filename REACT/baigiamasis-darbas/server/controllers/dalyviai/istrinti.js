const db = require("../../database/db");

exports.istrintiDalyvi = (req, res) => {
    let dalyviai;
    db.query("DELETE FROM dalyviai WHERE dalyvio_id = ?;", [req.body.dalyvio_id], function (error, results) {
        if (error) {
            console.log(error);
            res.status(500).json({
                "msg": "Ivyko klaida"
            });
        } else {
            res.status(200).redirect("dalyviai.ejs", { duomenys: results });
        }
    });
}
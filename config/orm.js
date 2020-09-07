const connection = require("../config/connection.js");

const orm = {

    selectAll: function (tableInput, cb) {
        const dataq = 'SELECT * FROM ??';
        connection.query(dataq, [tableInput], (err, res) => {
            if (err) throw err;
            // console.log(res);
            cb(res);
        });

    },

    insertOne: function () { },




    updateOne: function () { },

}

module.exports = orm;
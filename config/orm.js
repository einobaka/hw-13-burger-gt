const connection = require("../config/connection.js");

const orm = {

    selectAll: function (tableInput, cb) {
        const dataq = 'SELECT * FROM ??';
        connection.query(dataq, [], (err, res) => {
            if (err) throw err;
            cb(result);
        });


    },

    insertOne: function () { },

    updateOne: function () { },

}

module.exports = orm;
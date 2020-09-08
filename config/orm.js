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

    insertOne: function (table, col, val, cb) {
        const dataq = `INSERT INTO ${table} (${col}) VALUES ('${val}')`
        // console.log(dataq);
        connection.query(dataq, (err, res) => {
            if (err) throw err;
            // console.log(res);
            cb(res);
        })
    },

    updateOne: function (table, id, status, cb) {
        const dataq = `UPDATE ${table} SET devoured='${status}' WHERE id='${id}'`;
        console.log(dataq);
        connection.query(dataq, (err, res) => {
            if (err) throw err;
            // console.log(res);
            cb(res)
        })

    },
}

module.exports = orm;
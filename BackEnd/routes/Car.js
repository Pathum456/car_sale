const express = require('express');
const mysql = require('mysql');
const db = require('../configs/db.configs');
const router = express.Router();

const connection = mysql.createConnection(db.database);
connection.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Car Connected to the MySQL server');
    var userTableQuery =
      'CREATE TABLE IF NOT EXISTS cars (brandname VARCHAR(255), price Varchar(20),contact VARCHAR(255) ,path varchar(1000))';
    connection.query(userTableQuery, function (err, result) {
      if (err) {
        throw err;
      }
      //console.log(result); //
      if (result.warningCount === 0) {
        console.log('Car table created!');
      }
    });
  }
});

//save car
router.post('/save', (req, res) => {
  console.log('Post Method In Express');
  const brandname = req.body.carBrand;
  const price = req.body.carPrice;
  const contactNo = req.body.contactNo;
  const galleryPhoto = req.body.password;

  var query =
    'INSERT INTO cars (brandname, price,contact,contact,path) VALUES (?, ?, ?, ?)';

  connection.query(query, [brandname, price, contactNo, galleryPhoto], err => {
    if (err) {
      res.send({message: 'duplicate entry'});
    } else {
      res.send({message: 'user created!'});
    }
  });
});
// get all cars
router.get('/get', (req, res) => {
  var query = 'SELECT * FROM cars';
  connection.query(query, (err, rows) => {
    if (err) {
      console.log(err);
    }
    res.send(rows);
  });
  console.log('get');
});

//update car details
router.put('/', (req, res) => {
  const brandname = req.body.carBrand;
  const price = req.body.carPrice;
  //const contactNo = req.body.contactNo;
  const galleryPhoto = req.body.password;

  var query = 'UPDATE cars SET brandname=?, price=? WHERE username=?';

  connection.query(query, [brandname, price, galleryPhoto], (err, rows) => {
    if (err) {
      console.log(err);
    }

    if (rows.affectedRows > 0) {
      res.send({message: 'user updated'});
    } else {
      res.send({message: 'user not found'});
    }
    // res.send(rows)
  });
});

//delete car
/*router.delete('/:username', (req, res) => {
  const id = req.params.id;

  var query = 'DELETE FROM users WHERE username=?';

  connection.query(query, [username], (err, rows) => {
    if (err) {
      console.log(err);
    }

    if (rows.affectedRows > 0) {
      res.send({message: 'user deleted'});
    } else {
      res.send({message: 'user not found'});
    }
  });
});*/
module.exports = router;

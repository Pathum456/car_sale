const express = require('express');
const mysql = require('mysql');
const db = require('../configs/db.configs');
const router = express.Router();
const multer = require('multer');

const connection = mysql.createConnection(db.database);
connection.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Car Connected to the MySQL server');
    var userTableQuery =
      'CREATE TABLE IF NOT EXISTS cars (vehicleNo varchar(10),brandname VARCHAR(255), price Varchar(20),contact VARCHAR(255) ,path varchar(1000))';
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

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, '/media/kaleesha/D/Car_Sale/components/assets/uploads');
  },
  filename(req, file, callback) {
    callback(null, `${file.originalname}`);
  },
});

const upload = multer({storage: storage});

//save car
router.post('/save', upload.single('photo'), (req, res) => {
  console.log('Post Method In Express');
  const vehicleNo = req.body.vehicleNo;
  const brandname = req.body.carBrand;
  const price = req.body.carPrice;
  const contactNo = req.body.contactNo;
  const galleryPhoto = req.file.originalname;
  const path = '../assets/uploads/' + galleryPhoto;
  var query =
    'INSERT INTO cars (vehicleNo,brandname,price,contact,path) VALUES (?, ?, ?, ?,?)';

  connection.query(
    query,
    [vehicleNo, brandname, price, contactNo, path],
    err => {
      if (err) {
        res.send({
          status: '500',
          message: 'Error occured.Please try again!',
        });
      } else {
        res.send({
          status: '200',
          message: 'Save Succesfull!',
        });
      }
    },
  );
  console.log(req.body);
  console.log(req.file);
});

// get all cars
router.get('/getcars', (req, res) => {
  var query = 'SELECT * FROM cars';
  connection.query(query, (err, rows) => {
    if (err) {
      console.log(err);
    }
    res.send(rows);
  });
});

//update car details
router.put('/update', (req, res) => {
  //const brandname = req.body.carBrand;
  const price = req.body.carPrice;
  const contactNo = req.body.contactNo;
  const vehicleNo = req.body.vehicleNo;
  //const galleryPhoto = req.body.password;
  //console.log(req);

  var query = 'UPDATE cars SET price=?,contact=? WHERE vehicleNo=?';

  connection.query(query, [price, contactNo, vehicleNo], (err, rows) => {
    if (err) {
      console.log(err);
    }

    if (err) {
      res.send({message: 'user not found'});
    } else {
      res.send({message: 'user updated'});
    }
    // res.send(rows)
  });
});

//delete car
router.delete('/deleteCar/:vehicleNo', (req, res) => {
  const carId = req.params.vehicleNo;

  var query = 'DELETE FROM cars WHERE vehicleNo=? ';

  connection.query(query, [carId], err => {
    if (err) {
      res.send({
        status: '500',
        message: 'Error occured.Try again!',
      });
    } else {
      res.send({
        status: '200',
        message: 'Car deleted successfully',
      });
    }
  });
});
module.exports = router;

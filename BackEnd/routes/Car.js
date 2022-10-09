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

  var query =
    'INSERT INTO cars (vehicleNo,brandname,price,contact,path) VALUES (?, ?, ?, ?,?)';

  connection.query(
    query,
    [vehicleNo, brandname, price, contactNo, galleryPhoto],
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

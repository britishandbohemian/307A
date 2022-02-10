
const express = require('express')
const app = express();

app.use('/static',express.static('public'));

const path = require('path');

const port = process.env.PORT || 5500;
// npm install path --save installs path for directories

 const http = require('http');;
 const fs = require('fs');
 const mysql = require('mysql');



 const msg = 10;

// The module.exports is a special object which is included in every JavaScript file in the Node.js application by default. The module is a variable that represents the current module, and exports is an object that will be exposed as a module. So, whatever you assign to module.exports will be exposed as a module.

 module.exports = msg;

// _____________________________________________________________
// Here is my app Guys its a web app

// get the routes file th javscript file



app.listen(port, function () {
  console.log('Node server is running on port..'+port);
});
// Allows you to use Static Files Such As CSS and Javascript




// This app will go through the routes js file to route the use into my realm of B&B files rutes
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/home.html', function(req, res) {
  res.sendFile(path.join(__dirname, '/home.html'));
});

app.get('style.css', function(req, res) {
  res.sendFile('/public/css/style.css');
});

app.get('/client.js', function(req, res) {
  res.sendFile(path.join(__dirname, '/client.js'));
});

app.get('/app.js', function(req, res) {
  res.sendFile(path.join(__dirname, '/app.js'));
});

app.get('/node_modules', function(req, res) {
  res.sendFile(path.join(__dirname, '/node_modules'));
});



let connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '1234',
  database: 'items',
})

// // _____________________________________________________________

// // _____________________________________________________________
// // Worked with database created on the 17th of december 2021
// // Thereafter create a variable to hold the connection

// // _____________________________________________________________

// // _____________________________________________________________
// // Connect To DB and log if it works

connection.connect(function (err) {
  if (err) {
    return console.error('error: ' + err.message)
  }
})

console.log(__dirname)  

// _____________________________________________________________
// Here is my app Guys its a web app

// get the routes file th javscript file





// _____________________________________________________

// Add a value in the table with the date it was added instead and the due date of the idea or project
function InsertItem(Name, Why, dateadded, datedeleted) {
  var sqlCommand =
    "INSERT INTO items (name, why, dateadded, datedeleted) VALUES('" +
    Name +
    "','" +
    Why +
    "','" +
    dateadded +
    "','" +
    datedeleted +
    "')"

  // Query the database
  connection.query(sqlCommand, (error, result, fields) => {
    if (error) {
      return console.error(error.message)
    }
  })
}

// _____________________________________________________________

// _____________________________________________________________
// Edit data Master override
// Expose all the items in the database to the javascript native web app and get the number of items in the set
function GetNumberOfItems() {
  // set Command
  let sqlViewAll = `SELECT COUNT(*) val_count FROM items;`
  // Query the database
  connection.query(sqlViewAll, (error, result, fields) => {
    if (error) {
      return console.error(error.message)
    }
  })
}
// _____________________________________________________________

// _____________________________________________________________
// Expose all the items in the db
function ViewAllItems() {
  // set Command
  let sqlCommand = 'SELECT * FROM items'
  // Query the database

  connection.query(sqlCommand, (error, result, fields) => {
    if (error) {
      return console.error(error.message + ' No Items Found ')
    } else {
      result.forEach((element) => {
        console.log(element.name)
      })
    }
  })
}

function StringMaker(object) {
  return JSON.stringify(object)
}
// _____________________________________________________________

// _____________________________________________________________
// _____________________________________________________________

// _____________________________________________________________

// _____________________________________________________________
// Delete an Item from the database Sql Functions
function DeleteAnItem(ItemId) {
  // set Command
  let sqlCommand = 'DELETE FROM items WHERE ItemId = ' + ItemId
  // Query the database
  connection.query(sqlCommand, (error, result, fields) => {
    if (error) {
      return console.error(error.message)
    }
    console.log(result)
  })
}
// _____________________________________________________________

// _____________________________________________________________
// Delete an Item from the database Sql Functions
function DeleteAll() {
  // set Command
  let sqlCommand = 'TRUNCATE TABLE items'
  // Query the database
  connection.query(sqlCommand, (error, result, fields) => {
    if (error) {
      return console.error(error.message)
    }
    console.log(result)
  })
}
// _____________________________________________________________

// // _____________________________________________________________
// // Close UK connection, end connection with uk server
// // Proudly B&B Legal Co registered 2022

// function CloseConnectionWithServer() {
//   // Close UK Server Conncerion V1
//   connection.end(function (err) {
//     if (err) {
//       return console.log('error:' + err.message)
//     }
//     console.log('Close the database connection.')
//   })
// }
// // _____________________________________________________________

// _____________________________________________________________
// Close UK Server Connection Optimised by the B&B
// Synaptics Engine Arrow Function
function CloseConnectionWithServer() {
  connection.end((err) => {
    err
      ? console.log('error:' + err.message)
      : console.log('Closing connection with UK server from remote B&B device.')
  })
}
// __________________

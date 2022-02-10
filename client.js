
// import{ msg } from './app.js';

const path = require('path')
const mysql = require('mysql')
const msg = require('./app.js');
console.log(msg);

app.use('/',express.static(__dirname + '/public'));


window.addEventListener('onload',()=>{
  FillAnyTargetTag();
})
// **Phase Two Of Interactve Engine
// ____________________________________________________________________________________
// Add an Event Listener for every sinlge
//  button on the page so you can register
// the click and load a new page

// View the item that got clicked
function viewItem(Itemid) {
  window.location = 'view.html'
  window.localStorage.AddItem('clickID', Itemid)
}

function EditItem(Itemid) {
  window.location = 'edit.html'
  window.localStorage.AddItem('clickID', Itemid)
}

function getRndInteger() {
  return Math.floor(Math.random() * (2 - 1)) + 1
}

// load product items content form JSON file
function FillAnyTargetTag() {
  console.log(' i tried')
   let divWithElements = document.getElementById('MyItems')

  var Placement = ['floatLeft', 'floatRight', 'floatLeft', 'floatRight'];

  let html = ``;
  var count = 0;
  var prevnumber = -1;
  var randomNum = -1;

  let sqlCommand = 'SELECT * FROM items';
  // Query the database

  connection.query(sqlCommand, (error, result, fields) => {
    if (error) {
      return console.error(error.message + ' No Items Found ')
    } else {
      result.forEach((element) => {
        console.log(element)
        randomNum = getRndInteger(2)
        while ((randomNum = prevnumber)) {
          randomNum = getRndInteger(2)
          if (randomNum != prevnumber) {
            break
          }
          // console.log(prevnumber+" prev   new"+ randomNum )
        }

        prevnumber = randomNum
        html += ` 
            <div onclick="ItemClick(this.id)"  id="${element.id}" class="Item ${Placement[randomNum]}">
               
            <div style="display:flex; flex-direction:column; justify-content:space-evenly; color:white;padding: 10px;">
                <h1 class="ItemName" style="font-size: 20px; margin-bottom: 10px;">${element.Name}</h1>
                <h2 clas="ItemDescription" style="font-size: 15px;margin-bottom: 10px;font-weight: light;font-family: 'Montserrat';">${element.why}</h2>
            </div>
        
            <div style="display:flex;justify-content: end;">
                <hr class="line">
            </div>
        
        </div>`
        count++
      })
    }
  })

  divWithElements.innerHTML = html;
  console.log(divWithElements.innerHTML)
}


// DeleteAll();
// DeleteAnItem(0);
// InsertItem('bxdf', 'bgfx', 'bxgf', 'xbfg');
// GetNumberOfItems();
// Read();









// Unsed code


// // !!Phase 3 Console admin side add item to the database
// // _________________________________________________________
// // function Add Items To database

// class Item {
//   constructor(ItemName, why, date, ImagePath) {
//     this.name = ItemName
//     this.why = why
//     this.date = date
//     this.ImagePath = ImagePath
//   }
// }

// // Generate a path for the image

// function CreateImagePath(NumberOfItems) {
//   // Generate Path for image
//   var numberOfItems = GetNumberOfItems()
//   var newPathCount = numberOfItems + 1
//   // Essential Dump 100 preloaded images inside the github server
//   var imgPath = '../images/' + newPathCount
//   console.log()
// }


// // Save Json data To the Json File when closing the html file
// function SaveJsonData(objData) {
//   fs.writeFile('Items.json', objData, function (err) {
//     if (err) throw err
//     console.log('Saved!')
//   })
// }


// // Javascript Arrow Function
// addItem = () => {
//   //  Variables
//   var name, why, date, ImagePath
//   name = document.getElementById('name').value
//   why = document.getElementById('info').value
//   date = document.getElementById('date').value

//   // If statement to check all boxes
//   if (name != '') {
//     if (why != '') {
//       if (date != '') {
//         alert('my dawg you can code')
//         // Create new Object
//         let objectItem = new Item(name, why, date)

//         // add to array or db
//         GlobalDatabase.push(objectItem)
//       }
//     }
//   }
// }





// const express = require('express')
// const app = express();

// app.use('/static',express.static('public'));

// const path = require('path');

// const port = process.env.PORT || 5500;
// // npm install path --save installs path for directories

//  const http = require('http');;
//  const fs = require('fs');
//  const mysql = require('mysql');



//  const msg = 10;

// // The module.exports is a special object which is included in every JavaScript file in the Node.js application by default. The module is a variable that represents the current module, and exports is an object that will be exposed as a module. So, whatever you assign to module.exports will be exposed as a module.

//  module.exports = msg;

// // _____________________________________________________________
// // Here is my app Guys its a web app

// // get the routes file th javscript file



// app.listen(port, function () {
//   console.log('Node server is running on port..'+port);
// });
// // Allows you to use Static Files Such As CSS and Javascript




// // This app will go through the routes js file to route the use into my realm of B&B files rutes
// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, '/index.html'));
// });

// app.get('/home.html', function(req, res) {
//   res.sendFile(path.join(__dirname, '/home.html'));
// });

// app.get('style.css', function(req, res) {
//   res.sendFile('/public/css/style.css');
// });

// app.get('/client.js', function(req, res) {
//   res.sendFile(path.join(__dirname, '/client.js'));
// });

// app.get('/app.js', function(req, res) {
//   res.sendFile(path.join(__dirname, '/app.js'));
// });

// app.get('/node_modules', function(req, res) {
//   res.sendFile(path.join(__dirname, '/node_modules'));
// });



// let connection = mysql.createConnection({
//   host: '127.0.0.1',
//   user: 'root',
//   password: '1234',
//   database: 'items',
// })

// // // _____________________________________________________________

// // // _____________________________________________________________
// // // Worked with database created on the 17th of december 2021
// // // Thereafter create a variable to hold the connection

// // // _____________________________________________________________

// // // _____________________________________________________________
// // // Connect To DB and log if it works

// connection.connect(function (err) {
//   if (err) {
//     return console.error('error: ' + err.message)
//   }
// })

// console.log(__dirname)  

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






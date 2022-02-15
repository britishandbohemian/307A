
var arrItems = [{
    "Name": "Drivers License",
    "Why": "in order to accomplish my goals",
    "DateAdded": "Today",
    "DateDue": "Next Month"
  },
  {
    "Name": "Eat Three times a day",
    "Why": "In order for your body to function, you need fuel. Always try Eat healthy",
    "DateAdded": "Today",
    "DateDue": "Never"
  },
  {
    "Name": "Edit BPM video",
    "Why": "He has paid you",
    "DateAdded": "21 January",
    "DateDue": "15 Febuary"
  },
  {
    "Name": "Create Java Timetable",
    "Why": "To learn the basics, Variables, Functions and methods",
    "DateAdded": "Today",
    "DateDue": "Once A week"
  },
  {
    "Name": "Group Work with Gang",
    "Why": "To share knowledge and study together",
    "DateAdded": "Today",
    "DateDue": "Never"
  },

];

// export arrItems = arrItems;

function ItemClick() {
window.location = "view.html"
}

function Load() {
var root = document.getElementById('MyItems');
console.log("hey");

arrItems.forEach(element => {
  let item = `
  <!-- start -->
<div onclick='ItemClick()'
style="display:grid; flex-direction:column;  color:white;padding: 10px 0px 0px 0px; background-color: black; grid-template-rows: 70% 20% 1fr;margin-bottom:1rem;width:80%">
<!-- Name -->
<h1 class="ItemName" style="padding-left:10px ;font-size: 20px; margin-bottom: 10px;">${element.Name}</h1>
<!-- Description -->
<h2 clas="ItemDescription"
style="padding-left:10px;font-size: 15px;margin-bottom: 10px;font-weight: 100;font-family: 'Montserrat';">${element.Why}
</h2>
<!-- Line -->
<hr style="width: 100%;background-color: #71bfff;color:#71bfff ;height: 10px;margin:10px 0;">

</div>

`;

  root.innerHTML += item;
});

}

function AddToArray() {
var name, why, date;
}

window.addEventListener("loaded",Load());


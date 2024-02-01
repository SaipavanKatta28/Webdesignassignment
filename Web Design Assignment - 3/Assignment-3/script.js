//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");
var count = 0;

var delcolumn = document.getElementById("delcolumn");
var editcolumn = document.getElementById("editcolumn");

function editRow(rowId){
  alert("Please edit the details of the selected row");
}

function displayRow(rowId){
  console.log(rowId);
  var hideRow = rowId.parentElement.parentElement.nextElementSibling;
  if(hideRow.style.display === "none"){
  hideRow.style.display = "block";
  }
  else{
    hideRow.style.display = "none";
  }
}

document.addEventListener('DOMContentLoaded', function () {
  var fullName = "Full Name : Saipavan Katta"; 
  var nuid = "NUID : 002209016"; 

  var title = new Title(fullName);
  alert(title.getName() + " " + nuid);
});

function addRow() {
  var parentTable = document.getElementById("myTable");
  var lastRow = parentTable.rows[parentTable.rows.length - 2]; // Last row excluding the hidden row

  var newRow = lastRow.cloneNode(true);
  var infoRow = lastRow.nextElementSibling.cloneNode(true);

  // Update content for the new row
  var newStudentNumber = (parentTable.rows.length - 1) / 2 + 1;
  newRow.cells[1].innerHTML = "Student " + newStudentNumber;
  newRow.cells[2].innerHTML = "Teacher " + newStudentNumber;

  try {
    // Append the new rows to the table
    parentTable.appendChild(newRow);
    parentTable.appendChild(infoRow);

    // Display success message
    var successMessage = "Student " + newStudentNumber + " Record added successfully";
    alert(successMessage);
  } catch (error) {
    // Display error message
    alert("Error adding record: " + error.message);
  }
}

function rowDel(rowId) {
  var row = rowId.parentNode.parentNode;
  var studentNumber = row.cells[1].textContent.match(/\d+/)[0]; // Extract student number
  var sibling = row.nextElementSibling;
  
  row.parentNode.removeChild(row);
  sibling.parentNode.removeChild(sibling);

  count -= 1;
  enableBtn(count);

  alert("Student " + studentNumber + " Record deleted successfully");
  console.log(count);
}

function delRow(rowId){

  var r = rowId.parentNode.parentNode;

  if(rowId.checked){
     count +=1;
     enableBtn(count);
     r.lastElementChild.previousElementSibling.removeAttribute("class");
     r.lastElementChild.removeAttribute("class");
     r.style.backgroundColor = "yellow";
  }
  else{
    count -= 1;
    enableBtn(count);
    r.style.backgroundColor = "white";
    r.lastElementChild.previousElementSibling.classList.add("deleteaction");
    r.lastElementChild.classList.add("editaction");

  }
}

function enableBtn(count){
  var btnSubmit = document.getElementById("button");
  if(count >=1){
    btnSubmit.style.border = "2px solid orange";
    btnSubmit.style.backgroundColor = "orange";
  }
  else{
    btnSubmit.style.removeProperty("border");
    btnSubmit.style.removeProperty("background-color");
  }
}

function editRow(rowId) {
  var row = rowId.parentNode.parentNode;
  var studentNumber = row.cells[1].textContent.match(/\d+/)[0]; // Extract student number

  // Display edit popup
  var editPopup = document.createElement("div");
  editPopup.classList.add("edit-popup");
  editPopup.innerHTML = "<h2>Edit details of Student " + studentNumber + "</h2>";

  // Display student details in the popup
  for (var i = 0; i < row.cells.length - 1; i++) {
    var label = row.parentNode.rows[0].cells[i].textContent;
    var value = row.cells[i].textContent;
    editPopup.innerHTML += "<p><strong>" + label + ":</strong> " + value + "</p>";
  }

  // Add update and cancel buttons
  var updateButton = document.createElement("button");
  updateButton.innerHTML = "Update";
  updateButton.onclick = function() {
    alert("Student " + studentNumber + " data updated successfully");
    // Add logic for updating data (if needed)
    editPopup.parentNode.removeChild(editPopup);
  };

  var cancelButton = document.createElement("button");
  cancelButton.innerHTML = "Cancel";
  cancelButton.onclick = function() {
    editPopup.parentNode.removeChild(editPopup);
  };

  editPopup.appendChild(updateButton);
  editPopup.appendChild(cancelButton);

  document.body.appendChild(editPopup);
}





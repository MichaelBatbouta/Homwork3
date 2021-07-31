/*
resources used
https://www.w3schools.com/js/js_validation.asp
https://stackoverflow.com/questions/14643617/create-table-using-javascript
*/
//change max and min to const
function validateEntry() {
  const max = 50;
  const min = -50;
  var error = 0;
    // Get the value of the input field with id="numb"
    let x = document.getElementById("minCol").value;
    let y = document.getElementById("maxCol").value;
    let z = document.getElementById("minRow").value;
    let q = document.getElementById("maxRow").value;

    var mincolres = document.getElementById("minColRes");
    var maxColRes = document.getElementById("maxColRes");
    var minRowRes = document.getElementById("minRowRes");
    var maxRowRes = document.getElementById("maxRowRes");
    
    let minColtext,
    maxColtext,
    minRowtext,
    maxRowtext;
    /*Check for valid input before proceeding*/ 
    if (isNaN(x)|| x === '' || x < min || x > max) {
        minColtext = "Input not valid. Failed to update";
        document.getElementById("minColRes").innerHTML = minColtext;
        error =1;
    }else{
      mincolres.style.display = "none"
    }
    if (isNaN(y)  || y === '' || y < min || y > max) {
        maxColtext = "Input not valid. Failed to update";
        document.getElementById("maxColRes").innerHTML = maxColtext;
        error =1;

    }else{
      maxColRes.style.display = "none"
    } 
    if (isNaN(z)|| z === '' || z < min || z > max) {
        minRowtext = "Input not valid. Failed to update";
        document.getElementById("minRowRes").innerHTML = minRowtext;
        error =1;

    }
    else{
      minRowRes.style.display = "none"
    }
    if (isNaN(q)|| q === '' || q < min || q > max) {
        maxRowtext = "Input not valid. Failed to update";
        document.getElementById("maxRowRes").innerHTML = maxRowtext;
        error =1;

    }else{
      maxRowRes.style.display = "none"
    }

    if(error === 0){
      addTable();
    }

  }
// change var to let so its scoped
// change non changing to const

  function addTable() {
    var myTableDiv = document.getElementById("myDynamicTable");
    var table = document.createElement('TABLE');
    let mincol = document.getElementById("minCol").value;
    let minrow = document.getElementById("minRow").value;
    let maxcol = document.getElementById("maxCol").value;
    let maxrow = document.getElementById("maxRow").value;

    myTableDiv.innerHTML = "";
    table.border = '1';
  
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
  
    for (var i = minrow-1; i <= maxrow; i++) {
      var tr = document.createElement('TR');
      tableBody.appendChild(tr);
      if(i == minrow-1){
        for (let j = mincol-1; j <= maxcol; j++) {
          /*do the first row different then the rest */
          if(j == mincol-1){
            var td = document.createElement('TD');
            td.width = '75';
            td.appendChild(document.createTextNode(" "));
            tr.appendChild(td);
          }
          else{
            var td = document.createElement('TD');
            td.width = '75';
            td.appendChild(document.createTextNode(j));
            tr.appendChild(td);
          }
        }
      }
      else{
        for (let j = mincol-1; j <= maxcol; j++) {
          if(j == mincol- 1){
            var td = document.createElement('TD');
            td.width = '75';
            td.appendChild(document.createTextNode(i));
            tr.appendChild(td);
          }else{
            var td = document.createElement('TD');
            td.width = '75';
            td.appendChild(document.createTextNode(i * j));
            tr.appendChild(td);
          }

        }
      }

    }
    myTableDiv.appendChild(table);
  }
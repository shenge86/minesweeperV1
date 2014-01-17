

function createTable(tableData) {
  var table = document.createElement('table')
    , tableBody = document.createElement('tbody');

  // table.style.cssText = 'background-color:yellow;margin:0.5em;font-size:1.5em;';
  table.setAttribute('id','table');

  tableData.forEach(function(rowData) {
    var row = document.createElement('tr');

    rowData.forEach(function(cellData) {
      var cell = document.createElement('td');
	  
	  // cell.style.cssText = 'border:solid white 0.2em;padding:0.2em;';
	  
	  // reset look
	  if (cellData == 1) {
		cellData = '!';
	  } else {
		cellData = '?';
	  }
	  
      cell.appendChild(document.createTextNode(cellData));
      row.appendChild(cell);
    });

    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
  document.body.appendChild(table);
}

/*
function modifyTable(tableData) {
	tableData.forEach(function(rowData) {
		rowData.forEach(function(cellData)) {
	
		}
	});

}*/
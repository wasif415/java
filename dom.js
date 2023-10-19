function addToTable() {
    // Get input values
    var nameValue = document.getElementById("name").value;
    var fatherNameValue = document.getElementById("fatherName").value;
    var scoreValue = parseFloat(document.getElementById("score").value); // Parse Score as Float
    

    // Create a new table row
    var tableBody = document.getElementById("tableBody");
    var newRow = tableBody.insertRow();

    // Insert cell values
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);

    cell1.innerHTML = nameValue;
    cell2.innerHTML = fatherNameValue;
    cell3.innerHTML = scoreValue;

    // Calculate the new total score
    var total = 0;
    var tableRows = tableBody.getElementsByTagName("tr");
    for (var i = 0; i < tableRows.length; i++) {
        var rowScore = parseFloat(tableRows[i].getElementsByTagName("td")[2].innerHTML);
        if (!isNaN(rowScore)) {
            total += rowScore;
        }
    }

    cell4.innerHTML = total.toFixed(2);

    // Create a delete button for the new row
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.className = "delete-button";
    deleteButton.onclick = function() {
        deleteRow(newRow);
    };
    cell5.appendChild(deleteButton);

    // Clear input fields
    document.getElementById("name").value = "";
    document.getElementById("fatherName").value = "";
    document.getElementById("score").value = "";
}

function deleteRow(row) {
    var tableBody = document.getElementById("tableBody");
    tableBody.removeChild(row);

    // Recalculate the total score after deleting a row
    var total = 0;
    var tableRows = tableBody.getElementsByTagName("tr");
    for (var i = 0; i < tableRows.length; i++) {
        var rowScore = parseFloat(tableRows[i].getElementsByTagName("td")[2].innerHTML);
        if (!isNaN(rowScore)) {
            total += rowScore;
        }
    }

    // Update the total in the last row
    var lastRow = tableRows[tableRows.length - 1];
    var totalCell = lastRow.getElementsByTagName("td")[3];
    totalCell.innerHTML = total.toFixed(2);
}
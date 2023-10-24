function insert_Row() {
    // Create a new row
    let newRow = document.createElement("tr");

    // Create the left cell with the text "New Cell1"
    let cell1 = document.createElement("td");
    cell1.textContent = "New Cell1";

    // Create the right cell with the text "New Cell2"
    let cell2 = document.createElement("td");
    cell2.textContent = "New Cell2";

    // Append the cells to the new row
    newRow.appendChild(cell1);
    newRow.appendChild(cell2);

    // Get a reference to the table with id "sampleTable"
    let table = document.getElementById("sampleTable");

    // Insert the new row at the top of the table
    if (table) {
        table.insertBefore(newRow, table.firstChild);
    }
}


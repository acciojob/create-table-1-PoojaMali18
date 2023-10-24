function insert_Row() {
    // Get a reference to the table with id "sampleTable"
    let table = document.getElementById("sampleTable");

    // Create a new row
    let newRow = table.insertRow(0); // Insert at the top

    // Create the left cell with the value "New Cell1"
    let cell1 = newRow.insertCell(0);
    cell1.textContent = "New Cell1";

    // Create the right cell with the value "New Cell2"
    let cell2 = newRow.insertCell(1);
    cell2.textContent = "New Cell2";
}


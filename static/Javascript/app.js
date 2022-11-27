// import the data from data.js
const tableData = data;

// reference the HTML tag using d3
var tbody = d3.select("tbody");

// With this code, we:
// Declare a variable, tbody
// Use d3.select to tell JavaScript to look for the <tbody> tags in the HTML

// create function to build table
function buildTable(data) {
    // clear the table of any pre-filtered data
    tbody.html("");

    // loop through data and add each row and cells to table
    data.forEach((dataRow)=> {
        // add each row to table body
        let row = tbody.append("tr");


        // Loop through each field in the dataRow and add each value as a table cell (td)
        Object.values(dataRow).forEach((val) =>{
            // add each value to a cell in the table
            let cell = row.append("td");
            // display each value in a cell
            cell.text(val);
        });
    });

}

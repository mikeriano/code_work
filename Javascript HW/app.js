var tableData = data;

var tbody = d3.select("tbody");

function renderTable()
{
    tbody.selectAll("td").remove();
    
    tableData.forEach(function(data){
        var row = tbody.append("tr");
        Object.entries(data).forEach(function ([key,value]){
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
}

renderTable();

var submit = d3.select("#filter-btn");

submit.on("click",function(){
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.node().value;
    tableData = data.filter(function(d){
var searchDate = d.datetime.toLowerCase();
return searchDate === inputValue;

    });
    renderTable();
});



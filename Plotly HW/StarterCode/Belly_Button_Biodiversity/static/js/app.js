function buildMetadata(sample) {

  const url = `/metadata/${sample}`;

  d3.json(url).then(function(metadata) {
    console.log(metadata);
  // Use d3 to select the panel with id of `#sample-metadata`
  var selector = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    selector.html("");
    // Use `Object.entries` to add each key and value pair to the panel
    Object.entries(metadata[0]).forEach(function([key,value]){
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    selector.append("p")
    .text(`${key}:${value}`);
    
    // BONUS: Build the Gauge Chart
  }); // buildGauge(data.WFREQ);
});
}

function buildCharts(sample) {

  var url = `/samples/${sample}`;
  d3.json(url).then((sampleData) => {
    var labels = sampleData["otu_labels"];
    var bubbleLayout = {
        margin:{t:0},
        hovermode:"closest",
        xaxis:{title:"Otu_ID"}
        };
    var bubbleData = [{
        x:sampleData["otu_ids"],
        //x:sampleData["otu_id"],
        y:sampleData["sample_values"],
        text:labels,
        mode:"markers",
        marker:{
        size:sampleData["sample_values"],
        color:sampleData["otu_ids"],
        colorscale:"Earth",
        }
        }];
    Plotly.newPlot("bubble", bubbleData, bubbleLayout);
    var pieData = [{
        values:sampleData["sample_values"].slice(0,10),
        labels:sampleData["otu_ids"].slice(0,10),
        hovertext:labels.slice(0,10),
        hoverinfo:"hovertext",
        type:"pie"
        }];
    var pieLayout = {
        margin:{t:0,1:0}
        };
    Plotly.newPlot("pie", pieData, pieLayout);
 
  });
}
    // @TODO: Build a Bubble Chart using the sample data

function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("/names").then((sampleNames) => {
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    const firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();
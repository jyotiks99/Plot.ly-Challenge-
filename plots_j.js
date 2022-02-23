
function buildMetadata(sample) {
  //d3.json("samples.js").then((data) => {
    //var metadata = data.metadata;
    //var metaID = metadata.filter
    //var result = metaID[0]
    //var demographics_panel = d3.select("#sample-metadata")
    

}

function buildBarChart(sample) {
    d3.json("samples.js").then((data) => {
    var samples = data.samples;
    var ID = samples.filter(sampleObject => sampleObject.id == sample);
    var result = ID[0]
    
    var otu_ids = result.otu_ids;
    var otu_labels = result.otu_labels;
    var sample_values = result.sample_values;
};
function buildBubbleChart(sample) {


}

function optionChanged(newSample) {

  buildBarChart(newSample)
  buildBubbleChart(newSample);
  buildMetadata(newSample);
}

function init() {

    console.log("Starting init functions")

    var selector = d3.select("#selectDataset")

    var sampleIDs = data.names

    sampleIDs.forEach( (sample) => {
        // <option value=940 > 940 </option>
        selector.
          append("option").
          text(sample).
          property("value",sample)
      }
    );

    var firstSample = sampleIDs[0];
    optionChanged(firstSample);

}

// Initialize the dashboard
init();

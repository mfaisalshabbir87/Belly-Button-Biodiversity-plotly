        <script type="text/javascript">    
    function buildDropdown() {
    Plotly.d3.json('/names', function(error, names){
       if (error) return console.warn(error);
       var selDataset = document.getElementById("selDataset");
       for (i = 0; i < names.length; i++) {
                   sample = names[i]
                   var sample_option = document.createElement("option");
                   sample_option.text = sample;
                   sample_option.value = sample;
                   selDataset.appendChild(sample_option);
       }</script>

       <script>
        Plotly.d3.json("/samples/<sample>","/otu", function(error, data){
            if (error) return console.warn(error);
            var data = [{
              values: [/samples/<sample>]
              labels: [/otu]
            }]
            var layout = {
               height: 600,
               width: 800
            };
            var PIE = document.getElementById('pie');
            Plotly.plot(PIE, data, layout);
        })

                // Update the plot with new data
        function updatePlotly(newdata) {
        var PIE = document.getElementById("pie");
        Plotly.restyle(PIE, "values", [newdata]);
        }

        function getData(dataset) {
        var data = [];
        switch (dataset) {
            case "dataset1":
      data = [1, 2, 3, 39];
      break;
    case "dataset2":
      data = [10, 20, 30, 37];
      break;
    case "dataset3":
      data = [100, 200, 300, 23];
      break;
    default:
      data = [30, 30, 30, 11];
  }
  updatePlotly(data);
}a
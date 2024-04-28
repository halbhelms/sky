<script lang="ts">
  import LineChart from "./line-chart.svelte";
  import colorSchemes from "./color-schemes.js";
  export let data: any;
  const { chartData } = data;

  type ColorScheme = {
    label: string;
    backgroundColor: string;
    borderColor: string;
    pointBorderColor: string;
    pointBackgroundColor: string;
    pointHoverBackgroundColor: string;
    pointHoverBorderColor: string;
  };

  let schemes: ColorScheme[] = colorSchemes;
  let datasets: Record<string, any> = [];
  chartData.datasets.forEach((dataset: any, index: number) => {
    console.log(schemes[index].label);
    datasets.push({
      label: dataset.locationName,
      data: dataset.data,
      backgroundColor: schemes[index].backgroundColor,
      borderColor: schemes[index].borderColor,
      pointBorderColor: schemes[index].pointBorderColor,
      pointBackgroundColor: schemes[index].pointBackgroundColor,
      pointHoverBackgroundColor: schemes[index].pointHoverBackgroundColor,
      pointHoverBorderColor: schemes[index].pointHoverBorderColor,
      fill: true,
      lineTension: 0.3,
      borderCapStyle: "butt",
      borderWidth: 2,
      // borderDash: [],
      // borderDashOffset: 0.5,
      borderJoinStyle: "bevel",
      // pointBorderWidth: 4,
      // pointHoverRadius: 5,
      // pointHoverBorderWidth: 2,
      // pointRadius: 1,
      // pointHitRadius: 10,
    });
  });

  let chartInfo = {
    data: {
      labels: chartData.labels,
      datasets,
    },
  };
</script>

<h1>Chart</h1>
<main>
  <LineChart chartInfo={chartInfo.data} />
</main>

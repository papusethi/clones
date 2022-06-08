// document.addEventListener("DOMContentLoaded", () => {
//   Highcharts.chart("container", {
//     chart: {
//       // type:'bar'
//       // type:'scatter',
//       type: "area",
//       // type: "areaspline",
//       zoomType: "xy",
//     },
//     credits: {
//       // enabled: false,
//       text: "My Custom Credit",
//       href: "https://www.google.com",
//       position: {
//         align: "left",
//         x: 10,
//       },
//       style: {
//         fontSize: "15px",
//         color: "red",
//       },
//     },

//     tooltip: {
//       animation: true,
//       backgroundColor: "#000",
//       borderColor: "red",
//       borderRadius: 10,
//       followPointer: true,
//       style: {
//         color: "white",
//       },
//       formatter() {
//         return `X value - ${this.x} Y value - ${this.y}`;
//       },
//       shared: true,
//     },

//     // colors: ["#ccc", "#00ffaa"],

//     xAxis: {
//       categories: ["apples", "banana", "oranges"],
//       gridLineWidth: 0,
//     },

//     yAxis: {
//       title: {
//         text: "Fruits Eaten",
//       },
//     },

//     yAxis: {
//       labels: {
//         formatter: function () {
//           return this.value + " %";
//         },
//       },

//       gridLineWidth: 0,
//     },
//     series: [
//       {
//         name: "Jhon",
//         data: [1, 2, 3],
//       },
//       {
//         name: "Doe",
//         data: [2, 4, 8],
//       },
//     ],
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  Highcharts.chart("container", {
    chart: {
      type: "waterfall",
    },

    title: {
      text: "Highcharts Waterfall",
    },

    xAxis: {
      type: "category",
    },

    yAxis: {
      title: {
        text: "USD",
      },
    },

    legend: {
      enabled: false,
    },

    tooltip: {
      pointFormat: "<b>${point.y:,.2f}</b> USD",
    },

    series: [
      {
        upColor: Highcharts.getOptions().colors[2],
        color: Highcharts.getOptions().colors[3],
        data: [
          {
            name: "Start",
            y: 120000,
          },
          {
            name: "Product Revenue",
            y: 569000,
          },
          {
            name: "Service Revenue",
            y: 231000,
          },
          {
            name: "Positive Balance",
            isIntermediateSum: true,
            color: Highcharts.getOptions().colors[1],
          },
          {
            name: "Fixed Costs",
            y: -342000,
          },
          {
            name: "Variable Costs",
            y: -233000,
          },
          {
            name: "Balance",
            isSum: true,
            color: Highcharts.getOptions().colors[1],
          },
        ],
        dataLabels: {
          enabled: true,
          formatter: function () {
            return Highcharts.numberFormat(this.y / 1000, 0, ",") + "k";
          },
          style: {
            fontWeight: "bold",
          },
        },
        pointPadding: 0,
      },
    ],
  });
});

import React from "react";
import ApexCharts from "react-apexcharts";
import { useTheme } from "@material-ui/styles";

const series = [
  {
    name: "series1",
    data: [3.1, 4.0, 2.8, 5.1, 4.2, 3.9, 5.7, 6.3, 4.8, 7.1, 2.4, 5.4],
  },
];

export default function ApexLineChart() {
  var theme = useTheme();

  return (
    <ApexCharts
      options={themeOptions(theme)}
      series={series}
      type="area"
      height={228}
      width={"100%"}
    />
  );
}

// ############################################################
function themeOptions(theme) {
  return {
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Api",
        "Jun",
        "July",
        "Aug",
        "sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      // categories: [1, 2, 3, 4, 5],
      // type: "datetime",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    colors: [theme.palette.primary.main, theme.palette.success.main],
    chart: {
      toolbar: {
        show: false,
      },
    },
    legend: {
      show: false,
    },
  };
}

import { ApexOptions } from "apexcharts";

const fontFamily = "Azonix";
export const dataLabelStyle = {
  fontWeight: 500,
  fontSize: "14px",
  fontFamily,
};
export const axisStyle = {
  colors: ["#ffffff"],
  fontSize: "14px",
  fontWeight: 400,
  fontFamily,
};

// Breakpoint: 1280px
export const xlOptions: ApexOptions = {
  dataLabels: {
    style: {
      ...dataLabelStyle,
      fontSize: "12px",
    },
  },
  plotOptions: {
    bar: {
      horizontal: true,
      rangeBarOverlap: true,
    },
  },
};

// Breakpoint: 1024px
export const lgOptions: ApexOptions = {
  dataLabels: {
    style: {
      ...dataLabelStyle,
      fontSize: "10px",
    },
  },
  tooltip: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      horizontal: true,
      rangeBarOverlap: true,
    },
  },
};

// Breakpoint: 768px
export const mdOptions: ApexOptions = {
  legend: {
    show: true,
    position: "bottom",
    fontFamily,
    floating: true,
    labels: {
      colors: ["#ffffff"],
    },
    horizontalAlign: "left",
  },
  tooltip: {
    enabled: false,
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      horizontal: true,
      rangeBarOverlap: true,
    },
  },
};

// Breakpoint: 640px
export const smOptions: ApexOptions = {
  legend: {
    show: false,
    position: "bottom",
    floating: true,
    fontFamily,
    labels: {
      colors: ["#ffffff"],
    },
    horizontalAlign: "left",
    offsetY:
      typeof window !== "undefined" &&
      typeof window.navigator !== "undefined" &&
      window.navigator &&
      /iPad|iPhone|iPod/.test(window.navigator.userAgent)
        ? 120
        : 0,
  },
  tooltip: {
    enabled: true,
  },
  dataLabels: {
    enabled: true,
    style: {
      ...dataLabelStyle,
      fontSize: "15px",
    },
  },
  yaxis: {
    labels: {
      style: {
        fontSize: "17px",
        colors: "#fff",
      },
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      colorStops: [],
    },
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: "100%",
    },
  },
  chart: {
    height: 500,
  },
};

export const xsOptions = {
  yaxis: {
    labels: {
      style: {
        fontSize: "17px",
        colors: "#fff",
      },
    },
  },
};
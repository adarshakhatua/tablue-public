import "../style/chart.third.css";
import { chart as ChartJS } from "chart.js/auto";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar } from "react-chartjs-2";
import { Breeds } from "../data";

export const BarChart2 = () => {
    return (<div id="barChart2" > <Bar
        data={{
            labels: Breeds.map((item) => item.name),
            datasets: [
                {
                    label: "average adoption time",
                    data: Breeds.map(item => item.popularity),
                    datalabels: {
                        anchor: "end",
                        align: "right",
                        offset: 0,
                        color: "black",
                    },
                    backgroundColor: "#97e2e7",
                    barThickness: 10,
                    hoverBorderColor: "black",
                    hoverBorderWidth: 1,
                    borderSkipped: false,
                },
            ],
        }}
        options={{
            indexAxis: 'y',
            aspectRatio: false,
            plugins: {
                datalabels: {
                    formatter: function (value, context) {
                        // console.log(context);
                        return value
                    }
                },
                legend: {
                    display: null,
                },
                tooltip: {
                    enabled: false,
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false,
                    },
                    display: false,
                },
                y: {
                    grid: {
                        display: null,
                        borderWidth: 0,
                    },
                    ticks: {
                        callback: function (value, index, ticks) {
                            return Breeds[index].name;
                        },
                        color: "rgb(0 0 0)",
                        font: {
                            size: 12
                        }
                    }
                }
            }
        }}
        plugins={[ChartDataLabels]}
    /> </div>)
}
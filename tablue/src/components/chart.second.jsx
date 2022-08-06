import "../style/chart.second.css";
import { chart as ChartJS } from "chart.js/auto";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar } from "react-chartjs-2";
import { averageAdoptionTime } from "../data";

export const BarChart=()=> {
    return (<div id="barChart" > <Bar
        data={{
            labels: averageAdoptionTime.map((item) => item.type),
            datasets: [
                {
                    label: "average adoption time",
                    data: averageAdoptionTime.map(item => item.days),
                    datalabels: {
                        anchor:"end",
                        align: "right",
                        offset: 0, 
                    },
                    backgroundColor: "#97e2e7",
                    hoverBorderColor: "black",
                    hoverBorderWidth:1,
                    barThickness: 15,
                }, 
            ],
        }}
        options={{
            indexAxis: 'y',
            aspectRatio:20/6,
            plugins: {
                datalabels: {
                    formatter: function (value, context) {
                        // console.log(context);
                        return value+" days"
                    }
                },
                legend: {
                    display: null,
                },
                tooltip: {
                    enabled:false,
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
                        borderWidth:0,
                    }, 
                    ticks: {
                        callback: function (value, index,ticks) {
                            return averageAdoptionTime[index].age + " " + averageAdoptionTime[index].type;
                        }
                    }
                }
            }
        }}
        plugins={[ChartDataLabels]}
        /> </div>)
}
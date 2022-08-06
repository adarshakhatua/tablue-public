import "../style/chart.first.css";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Ticks } from "chart.js/auto";
import { liveSaved} from "../data";


export const LineChart = () => {

    return (
        <div id="firstChart">
            <Line
                data={{
                    labels: liveSaved.map((res) => res.year),
                    datasets: [
                        {   type:"line",
                            label: liveSaved[liveSaved.length - 1].count,
                            data: liveSaved.map((res) => { return res.count }),
                            backgroundColor: "#e3f2f3",
                            borderColor: "#97e2e7",
                            borderWidth:4,
                            fill: true,
                            pointRadius: 1,
                            pointBorderWidth: 1,
                            pointBorderColor: "#97e2e7",
                            pointHoverRadius: 3,
                            pointHoverBorderColor: "#97e2e7",
                            tension:0.2,
                        },
                        {
                            type: "line",
                            label: null,
                            data: null,
                            yAxisID:"right_y",
                        },
                    ],
                }}
                options={
                    {   
                        scales: {
                            
                            x: {
                                grid: {
                                    display: false,
                                },
                                offset: true,
                                ticks: {
                                    color: "rgba(16, 16, 16, 0.75)",
                                    autoSkip: true,
                                    maxTicksLimit: 5,
                                    maxRotation: 0,
                                    padding: 0,
                                
                                },
                            },
                            xAxis2: {
                                grid: {
                                    display: false,
                                    tickWidth:0,
                                },
                                offset: true,
                                ticks: {
                                  display: false,
                                },
                                position: "top",
                            },                            
                            y: {
                                beginAtZero: true,
                                grid: {
                                    display: false,
                                    tickWidth:0
                                },
                                ticks: {
                                    autoSkip: true,
                                    maxTicksLimit: 7,
                                    maxRotation: 0,
                                    align:"center",
                                    callback: function (value, index, ticks) {
                                        if (value >= 1000) {
                                            value = Math.floor(value / 1000);
                                        }
                                        return value+"K"
                                    }
                                },
                                position: "left",
                            },
                            right_y: {
                                position: "right",
                                grid: {
                                    display: false,
                                    tickWidth: 0
                                },
                                ticks: {
                                    display: null,
                                },
                            }                            
                        },
                        hover: {
                            node: "dataset",
                            intersect:false,
                        },
                        maintainAspectRatio:false,
                        plugins: {  
                            legend: {
                                display: null
                            },
                            tooltip: {
                                enabled:false
                            },
                            
                        },                        
                    }
                }
            />
        </div>
    )
}
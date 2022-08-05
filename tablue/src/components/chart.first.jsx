import "../style/chart.first.css";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Ticks } from "chart.js/auto";
import { liveSaved} from "../data";


export const FirstChart = () => {
    
    return (
        <div id="firstChart">
            <Line
                data={{
                    labels: liveSaved.map((res) => res.year),
                    datasets: [
                        {   type:"line",
                            label: liveSaved[liveSaved.length - 1].count,
                            data: liveSaved.map((res) => { return res.count.toString().slice(0, -3) }),
                            backgroundColor: "#e3f2f3",
                            borderColor: "#97e2e7",
                            fill: true,
                            pointRadius: 1,
                            pointHoverRadius:1,
                            pointBorderWidth: 1,
                            pointHoverBorderWidth:3,
                            pointHoverBackgroundColor: "#97e2e7",
                            pointBorderColor: "#97e2e7",
                            pointHoverBorderColor:"#97e2e7"
                        }
                    ],
                }}
                options={
                    {   type:"bar",
                        scales: {
                            x: {
                                grid: {
                                    display: false
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
                            y: {
                                beginAtZero: true,
                                grid: {
                                    display: false,
                                },
                                ticks: {
                                    callback: function (value, index, ticks) {
                                        // console.log(ticks)
                                        return value+"K"
                                    }
                                }
                            }
                        },
                        plugins: {
                            legend: {
                                display: null
                            },
                            
                        },
                        aspectRatio:"376px"/"346px"
                        
                    }
                }
            

            />
        </div>
    )
}
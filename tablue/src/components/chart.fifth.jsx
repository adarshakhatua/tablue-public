import "../style/chart.fifth.css";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Ticks } from "chart.js/auto";
import { averageAdoptionTimeOverTime } from "../data";

export const LineChart2 = () => {
    return (
        <div id="lineChart2">
            <Line
                data={{
                    labels: averageAdoptionTimeOverTime.map((res) => res.year),
                    datasets: [
                        {
                            type: "line",
                            label: averageAdoptionTimeOverTime[averageAdoptionTimeOverTime.length - 1].count,
                            data: averageAdoptionTimeOverTime.map((res) => { return res.time }),
                            backgroundColor: "#e3f2f3",
                            borderColor: "#97e2e7",
                            borderWidth: 4,
                            fill: true,
                            pointRadius: 1,
                            pointBorderWidth: 1,
                            pointBorderColor: "#97e2e7",
                            pointHoverRadius: 2,
                            pointHoverBorderColor: "#000000",
                            pointHoverBackgroundColor: "#000000",
                            tension: 0.1,
                        },
                        {
                            type: "line",
                            label: null,
                            data: null,
                            yAxisID: "right_y",
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
                                    color: "rgb(0, 0, 0)",
                                    maxRotation: 0,
                                    padding: 0,
                                    font: {
                                        size:"12px"
                                    }
                                },

                            },
                            xAxis2: {
                                grid: {
                                    display: false,
                                    tickWidth: 0,
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
                                    tickWidth: 0
                                },
                                ticks: {
                                    color: "rgb(0, 0, 0)",
                                    autoSkip: true,
                                    maxTicksLimit: 4,
                                    maxRotation: 0,
                                    align: "center",
                                    font: {
                                        size: "12px"
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

                            intersect: false,
                        },
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                display: null
                            },
                            tooltip: {
                                enabled: false
                            },
                        },
                        interaction: {
                            mode: 'index',
                            axis: "x"
                        },
                    }
                }
            />
        </div>
    )
}
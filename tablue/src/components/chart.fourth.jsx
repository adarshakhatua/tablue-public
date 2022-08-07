import "../style/chart.fourth.css";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS,Tooltip } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Adoptibility } from "../data";

export const StackChart = () => {

    Tooltip.positioners.myCustomPositioner = function (elements, eventPosition) {
        const tooltip = this;
        return {
            x: eventPosition.x,
            y: eventPosition.y+50,
        };
    };

    return <div id="stackChart">
        <Bar
            data={{
                labels: Adoptibility.map(item => item.type),
                
                datasets: [
                    {   
                        label: "Does/Are",
                        data: Adoptibility.map(item => item.Does),
                        datalabels: {
                            formatter: function (value, context) {
                                return value+"%"
                            },
                            display: function name(params) {
                                let data = params.dataset.data[params.dataIndex]
                                if (data >= 5) {
                                    return true
                                }
                                else {
                                    return false
                                }
                            },
                        },
                        backgroundColor: "#97e2e7",
                        barThickness: 15,
                        hoverBorderColor: "black",
                        hoverBorderWidth: 1,
                        borderSkipped: false,
                    },
                    {   
                        label: "Does Not/Are Not",
                        data: Adoptibility.map(item => item.DoesNot),
                        datalabels: {
                            formatter: function (value, context) {
                                return value + "%"
                            },
                            display: function name(params) {
                                let data = params.dataset.data[params.dataIndex]
                                if (data >= 5) {
                                    return true
                                }
                                else {
                                    return false
                                }
                            }
                        },
                        backgroundColor: "rgb(92 96 104)",
                        barThickness: 15,
                        hoverBorderColor: "black",
                        hoverBorderWidth: 1,
                        borderSkipped: false,
                    },
                    {   
                        label: "Not Sure",
                        data: Adoptibility.map(item => item.NotSure),
                        datalabels: {
                            formatter: function (value, context) {
                                return value + "%"
                            },
                            display: function name(params) {
                                let data = params.dataset.data[params.dataIndex]
                                if (data >= 5) {
                                    return true
                                }
                                else {
                                    return false
                                }
                            }
                        },
                        backgroundColor: "rgb(211 211 211)",
                        barThickness: 15,
                        hoverBorderColor: "black",
                        hoverBorderWidth: 1,
                        borderSkipped:false,
                    }
                ],
            }}
        
            
            options={{
                indexAxis: 'y',
                aspectRatio:false,
                scales: {
                    x: {
                        stacked: true,
                        grid: {
                            display: false,
                            borderWidth: 0,
                        },
                        display: false,
                    },
                    y: {
                        stacked: true,
                        grid: {
                            display: false,
                            borderWidth:0,
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: "bottom",
                        labels: {
                            boxHeight: 12,
                            boxWidth:12,
                            
                        }
                    },
                    tooltip: {
                       
                        callbacks: {
                           
                            title: function (tooltipItem) {
                                
                                if (tooltipItem[0].dataset.label === "Does/Are") {
                                    return (tooltipItem[0].label + "? : YES");
                                }
                                else if (tooltipItem[0].dataset.label === "Does Not/Are Not") {
                                    return (tooltipItem[0].label + "? : NO");
                                }
                                else {
                                    return (tooltipItem[0].label + "? : NOT SURE"); 
                                }
                            },
                            label: function (tooltipItem) {
                                return "% of total Adoption: " + tooltipItem.dataset.data[tooltipItem.dataIndex]+"%"
                            },
                        },
                        caretSize: 0,
                        cornerRadius: 0,
                        backgroundColor: "white",
                        bodyColor: "black",
                        titleColor: "black",
                        boxHeight: null,
                        boxWidth: null,
                        xAlign: "right",
                        padding: 15,
                        borderColor: "#484848",
                        borderWidth: 0.5,
                        position: "myCustomPositioner",
                        
                    }
                },
            }} 


        plugins={[ChartDataLabels]}    
        />
    </div>
}
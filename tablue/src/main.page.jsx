import "./style/main.page.css";
import { LineChart } from "./components/chart.first";
import { LineChart2 } from "./components/chart.fifth";
import { BarChart } from "./components/chart.second";
import { BarChart2 } from "./components/chart.third";
import { StackChart } from "./components/chart.fourth";
import { liveSaved } from "./data";
import { averageAdoptionTimeOverTime } from "./data";

export const MainPage = () => {
    


    return (
        <div id="mainPage">
            <div id="leftDiv">
                <h1>{`${Math.floor(liveSaved[liveSaved.length - 1].count / 1000)},${liveSaved[liveSaved.length - 1].count%1000} `}</h1>
                <LineChart />
            </div>

            <div id="rightDiv">

                <div id="leftSubDiv">
                    <h1>{Math.ceil((averageAdoptionTimeOverTime.reduce((a, b) => a + b.time, 0) / averageAdoptionTimeOverTime.length)) } days</h1>
                    <h1 className="heading2">Avg Time to Adopt by Age Bucket</h1>
                    <BarChart />
                    <p className="heading2">Note: Starts at Date of Transport</p>
                    <h1 className="heading2">Avg Time to Adopt over Time</h1>
                    <LineChart2 />
                </div>

                <div id="rightSubDiv">
                    <h1 className="heading2">Prportion of Dogs that...</h1>
                    <StackChart />
                    <h1 className="heading2">Top 10 Primary Breeds(Including Mixes)</h1>
                    <BarChart2 />
                </div>

            </div>
            
            
        </div>
    )
}
import "./style/main.page.css";
import { LineChart } from "./components/chart.first";
import { LineChart2 } from "./components/chart.fifth";
import { BarChart } from "./components/chart.second";
import { BarChart2 } from "./components/chart.third";
import { StackChart } from "./components/chart.fourth";


export const MainPage = () => {
    


    return (
        <div id="mainPage">
            <LineChart />
            <BarChart />
            <BarChart2 />
            <StackChart />
            <LineChart2/>
        </div>
    )
}
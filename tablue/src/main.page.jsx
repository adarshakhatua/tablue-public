import "./style/main.page.css";
import { LineChart } from "./components/chart.first";
import { BarChart } from "./components/chart.second";



export const MainPage = () => {
    


    return (
        <div id="mainPage">
            <LineChart />
            <BarChart/>
        </div>
    )
}
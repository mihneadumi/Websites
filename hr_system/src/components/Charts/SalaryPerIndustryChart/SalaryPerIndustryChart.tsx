import { StyledSalaryPerIndustryChart } from "./SalaryPerIndustryChart.styled"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons"

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useSelector } from "react-redux";
import { getUsers } from "../../../redux/actions";
import { calculateAverageSalaryPerIndustry } from "../../../utils/functions";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const SalaryPerIndustryChart = () => {

    const list = useSelector(getUsers);
    const calc = calculateAverageSalaryPerIndustry(list);
    const labels = calc
    .map((item) => item.industry!== "not specified" ? item.industry : null)
    .filter((item)=>item !== null);

    const dataArr = calc
    .map((item) => item.industry!== "not specified" ? item.averageSalary : null)
    .filter((item) => item !== null)
    .sort(function(a, b) {
        if(a === null) return 1;
        if(b === null) return -1;
        if (a < b) return 1;
        if (a > b) return -1;
        return 0;
    });
    
    const options = {
        indexAxis: 'y' as const,
        elements: {
          bar: {
            borderWidth: 2,
          },
        },
        responsive: true,
        plugins: {
        },
      };
      const data = {
        labels,
        datasets: [
          {
            label: 'Average Salary',
            data: dataArr,
            borderColor: '#0077B6',
            backgroundColor: '#00B4D8',
          },
        ],
    };

    return (
        <StyledSalaryPerIndustryChart>
            <nav className="stats-nav">
                <Link to="/stats">
                    <FontAwesomeIcon icon={faArrowLeft} size="2x"/>
                </Link>
                <h2>Average Salary Per Industry</h2>
                <Link to="/stats/salary-per-yoe">
                    <FontAwesomeIcon icon={faArrowRight} size="2x"/>
                </Link>
            </nav>
            <Bar options={options} data={data} />
        </StyledSalaryPerIndustryChart>
    )
}

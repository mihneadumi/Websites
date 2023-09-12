import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { StyledSalaryPerYoeChart } from "./SalaryPerYoeChart.styled"

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useSelector } from "react-redux";
import { getUsers } from "../../../redux/actions";
import { calculateAverageSalaryPerYoe } from "../../../utils/functions";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const SalaryPerYoeChart = () => {

    const list = useSelector(getUsers);
    const calc = calculateAverageSalaryPerYoe(list);
    const labels = calc.categories;



    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart',
          },
        },
    };

    const data = {
        labels,
        datasets: [
          {
            label: 'AverageSalary',
            data: calc.avgSalaries,
            borderColor: '#0077B6',
            backgroundColor: '#00B4D8',
          },
        ],
      };

    return (
        <StyledSalaryPerYoeChart>
            <nav className="stats-nav">
                <Link to="/stats/salary-per-industry">
                    <FontAwesomeIcon icon={faArrowLeft} size="2x"/>
                </Link>
                <h2>Average Salary Per YoE</h2>
            </nav>
            <Line options={options} data={data} />
        </StyledSalaryPerYoeChart>
    )
}

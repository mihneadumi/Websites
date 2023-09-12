import { getUsers } from "../../../redux/actions";
import { useSelector } from "react-redux"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { calculateAverageAgePerIndustry } from '../../../utils/functions';
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
import { StyledAgePerIndustryChart } from './AgePerIndustryChart.styled';
import { Link } from "react-router-dom";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


const AverageAgePerIndustryChart = () => {

    const list = useSelector(getUsers);
    const calc = calculateAverageAgePerIndustry(list);
    const labels = calc
    .map((item) => item.industry!== "not specified" ? item.industry : null)
    .filter((item)=>item !== null);

    const dataArr = calc
    .map((item) => item.industry!== "not specified" ? item.averageAge : null)
    .filter((item) => item !== null);

        // sort by age descending
    dataArr.sort(function(a, b) {
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
            label: 'Average Age',
            data: dataArr,
            borderColor: '#0077B6',
            backgroundColor: '#00B4D8',
          },
        ],
    };
    return (
        <StyledAgePerIndustryChart>
            <nav className="stats-nav">
                <h2>Average Age Per Industry</h2>
                <Link to="salary-per-industry">
                    <FontAwesomeIcon icon={faArrowRight} size="2x"/>
                </Link>
            </nav>
            <Bar options={options} data={data} />
        </StyledAgePerIndustryChart>
    );
    //         <Bar data={chartData} options={chartOptions} />
};

export default AverageAgePerIndustryChart;

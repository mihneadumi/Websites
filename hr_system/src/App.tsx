import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { loadUsers } from './redux/reducers/usersSlice.tsx'
import { Home } from './pages/Home/Home.tsx'
import { GlobalStyles } from './components/GlobalStyle.tsx'
import { Users } from './pages/Users/Users.tsx'
import { ErrorPage } from './pages/Error/ErrorPage.tsx'
import { EditUser } from './pages/Users/EditUser/EditUser.tsx'
import { AllUsers } from './pages/Users/AllUsers/AllUsers.tsx'

import axios from 'axios'
import { Statistics } from './pages/Statistics/Statistics.tsx'
import AverageAgePerIndustryChart from './components/Charts/AgePerIndustryChart/AgePerIndustryChart.tsx'
import { SalaryPerIndustryChart } from './components/Charts/SalaryPerIndustryChart/SalaryPerIndustryChart.tsx'
import { SalaryPerYoeChart } from './components/Charts/SalaryPerYoeChart/SalaryPerYoeChart.tsx'

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
        path: '/users',
        element: <Users />,
        children: [
            {
                index: true,
                element: <AllUsers />
            },
            {
                path: ":id",
                 element: <EditUser />
            }
        ]
    },
    {
        path: '/stats',
        element: <Statistics />,
        children: [
            {
                index: true,
                element: <AverageAgePerIndustryChart />
            },
            {
                path: "salary-per-industry",
                element: <SalaryPerIndustryChart />
            },
            {
                path: "salary-per-yoe",
                element: <SalaryPerYoeChart />
            }
        ]
    }
]);


function App() {

    const dispatch = useDispatch();

    // fetching only once when the website is loaded
    useEffect(() => {
        axios.get("/MOCK_DATA.json")
        .then((response) => {
            const users = response.data
            dispatch(loadUsers(users));
        })
        .catch((error) => {
            console.error('Error fetching user data:', error);
        })
    }, [dispatch]);

    return (
        <React.StrictMode>
                <GlobalStyles />
                <RouterProvider router={router} />
        </React.StrictMode>
    );
}

export default App

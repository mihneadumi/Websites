import axios from 'axios'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadItems } from '../redux/reducers/items/itemsSlice'

import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/Global'
import { Header } from './Header'
import { Catalog } from './Catalog'
import { Cart } from './Cart'


const App = () => {

    const apiUrl = 'https://fakestoreapi.com/products'
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(apiUrl)
            .then((response) => {
                dispatch(loadItems(response.data))
            })
    }, [dispatch])

    const theme = {
        colors: {
            main: '#F5F5F5',
            accent: '#F2EAD3',
            accent2: '#DFD7BF',
            text: '#3F2305', 
            
            header: '#F2EAD3',
            body: '#F5F5F5',
            footer: '#F2EAD3',
        }
    }

    const showCart = useSelector(state => state.cart.showCart)
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Header />
            {!showCart ? <Catalog /> : <Cart />}
        </ThemeProvider>
    )
}

export default App

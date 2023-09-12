import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import store from './redux/store.ts'


ReactDOM.createRoot(document.getElementById('root')!).render(
    // The App component contains the routing of the application
    <Provider store={store}>
        <App />
    </Provider>
)


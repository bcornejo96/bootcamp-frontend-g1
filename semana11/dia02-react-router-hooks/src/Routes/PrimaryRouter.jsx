import { createBrowserRouter } from 'react-router-dom'
import PrimaryLayout from '../Layouts/PrimaryLayout'
import Home from '../Page/Home'
import Login from '../Page/Login'
import Register from '../Page/Register'
import PokemonDetail from '../Page/PokemonDetail'
import ErrorPage from '../Page/ErrorPage'


export const PrimaryRouter = createBrowserRouter([

    {
        path: '/',
        element: <PrimaryLayout/>,
        errorElement: <ErrorPage/>,
        children:[
        {
            index: true,
            element: <Home/>

        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/register',
            element: <Register/>
        },
        {
            path: '/pokemon/:id',
            element: <PokemonDetail/>
        }       
        ]
    }
])
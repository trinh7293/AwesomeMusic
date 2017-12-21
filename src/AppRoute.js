import { StackNavigator } from 'react-navigation'
import RouteNames from './routes/RouteNames'

import Login from './Login'
import App from './App'

const AppRoute = StackNavigator(
    {
        [RouteNames.Login]: {
            screen: Login
        },
        [RouteNames.Main]: {
            screen: App
        }
    },
    {
        initialRouteName: RouteNames.Login
    }
)

export default AppRoute
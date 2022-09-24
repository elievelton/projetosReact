import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Home } from '../screens/Home'
import { Game } from '../screens/Game'

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes(){

    return(
        //screensOptions aplica em todas as rotas de uma vez
        <Navigator screenOptions={{headerShown: false}}>
            <Screen
                name ='home'
                component={Home}
                //options={{headerShown: false}}// remove uma barra de dentro do app, server para customization
            />
            <Screen
                name ='game'
                component={Game}
            />
        </Navigator>
    )
}

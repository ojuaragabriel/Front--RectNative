import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/login";
import BottomRoutes from "./bottom.routes";
import Criar from "../pages/criar";
import MenuAdm from '../pages/menuAdm';
import MenuProdutor from "../pages/menuProdutor";
import NlADM from "../pages/nlADM";
import NlPROD from "../pages/nlPROD";
import MlPROD from "../pages/mlPROD";
import Perfil from "../pages/perfil";
import MlADM from "../pages/mlADM";


export default function Routes(){
    const Stack = createStackNavigator()

    return(
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown:false,
                cardStyle:{
                    backgroundColor:'#FFFFFF'
                }
            }}
        >

            <Stack.Screen 
                name = "Login"
                component={Login}
            />
                <Stack.Screen 
                    name = "BottomRoutes"
                    component={BottomRoutes}
                />
            <Stack.Screen 
                    name = "Criar"
                    component={Criar}
                />
                <Stack.Screen 
                    name = "MenuAdm"
                    component={MenuAdm}
                />
                <Stack.Screen 
                    name = "MenuProdutor"
                    component={MenuProdutor}
                />
                <Stack.Screen 
                    name = "NlADM"
                    component={NlADM}
                />
                <Stack.Screen 
                    name = "NlPROD"
                    component={NlPROD}
                />
                <Stack.Screen 
                    name = "MlPROD"
                    component={MlPROD}
                />
                <Stack.Screen 
                    name = "Perfil"
                    component={Perfil}
                />
                <Stack.Screen 
                    name = "MlADM"
                    component={MlADM}
                />

        </Stack.Navigator>
    )
}
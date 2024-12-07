import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/login";
import BottomRoutes from "./bottom.routes";
import Criar from "../pages/criar";
import MenuAdm from '../pages/menuAdm';
import MenuProdutor from "../pages/menuProdutor";

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
                {/* <Stack.Screen 
                    name = "MenuProdutor"
                    component={MenuProdutor}
                /> */}

        </Stack.Navigator>
    )
}
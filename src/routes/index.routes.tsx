import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/login";

export default function Routes(){
    const Stack = createStackNavigator()

    return(
        <Stack.Navigator>

            <Stack.Screen 
                name = "Login"
                component={Login}
            />
                {/* <Stack.Screen 
                    nome = "Login"
                    component={Login}
                /> */}

        </Stack.Navigator>
    )
}
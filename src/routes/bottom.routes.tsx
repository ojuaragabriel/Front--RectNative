import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entrar from '../pages/entrar';
import Criar from '../pages/criar';

const Tab = createBottomTabNavigator();

export default function BottomRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
            name="Entrar" 
            component={Entrar} 
        />

      <Tab.Screen 
            name="Criar" 
            component={Criar} 
        />
    </Tab.Navigator>
  );
}
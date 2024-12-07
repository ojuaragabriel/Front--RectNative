import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entrar from '../pages/entrar';
import Criar from '../pages/criar';

const Tab = createBottomTabNavigator();

export default function BottomRoutes() {
  return (
    <Tab.Navigator
    screenOptions={{
      headerShown:false
    }}
    >
      <Tab.Screen 
            name="Entrar" 
            component={Entrar} 
            options={{
              tabBarStyle: { display: 'none' }  // Remove a barra de navegação inferior apenas para "Criar"
            }}    
        />

      <Tab.Screen 
            name="Criar" 
            component={Criar} 
        />
        
    </Tab.Navigator>
  );
}
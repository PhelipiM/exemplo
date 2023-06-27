import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {MaterialIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function PedidosRouter() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Pedidos" component={Pedidos} />
        <Tab.Screen
          name="PedidosAnteriores"
          component={PedidosAnteriores}
          options={{ tabBarLabel: 'Pedidos Anteriores' }}
        />
      </Tab.Navigator>
    );
  }

import Home from './pages/Home';
import Busca from  './pages/Busca';
import Perfil from  './pages/Perfil';
import Pedidos from  './pages/Pedidos';
// import Carteira from  './pages/Carteira';
import Pagamentos from './pages/Pagamentos';
import PedidosAnteriores from "./pages/PedidosAnteriores";

const BottomTab = createBottomTabNavigator();

const PerfilStack = createStackNavigator();

function PerfilRoutes() {
  return (
    <PerfilStack.Navigator>
      <PerfilStack.Screen name="Perfil" component={Perfil} />
      <PerfilStack.Screen name="Pagamentos" component={Pagamentos} />
    </PerfilStack.Navigator>
  );
} 

export default function Routes(){
    return ( 
        <NavigationContainer>
            <BottomTab.Navigator activeColor="#333" inactiveColor="gray">
                <BottomTab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarlabel: 'Home',
                        tabBarIcon: ({ color }) => (
                            <MaterialIcons name="home" color={color} size={26} />
                            ),
                    }}            
                />
                <BottomTab.Screen
                    name="Perfil"
                    component={Perfil}
                    options={{
                        tabBarlabel: 'Perfeil',
                        tabBarIcon: ({ color }) => (
                            <MaterialIcons name="person" color={color} size={26} />
                            ),
                    }}            
                />
                 <BottomTab.Screen
                  name="Pedidos"
                  component={PedidosRouter}
                  options={{
                    tabBarLabel: 'Pedidos',
                    tabBarIcon: ({ color }) => (
                      <MaterialIcons name="assignment" color={color} size={26} />
                    ),
                  }}
                />
                <BottomTab.Screen
                    name="Busca"
                    component={Busca}
                    options={{
                        tabBarlabel: 'Busca',
                        tabBarIcon: ({ color }) => (
                            <MaterialIcons name="search" color={color} size={26} />
                            ),
                    }}            
                />
                <BottomTab.Screen
                    name="PerfilRoutes"
                    component={PerfilRoutes}
                    options={{
                        headerShown: false,
                        tabBarLabel: 'Perfil',
                        tabBarIcon: ({ color }) => (
                            <MaterialIcons name="person" color={color} size={26} />
                            ),
                    }}
                />
            </BottomTab.Navigator>
        </NavigationContainer>
    )
}


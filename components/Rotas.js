import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import { Text, View } from 'react-native';
import Sobre from './Sobre';
import Cadastro from './Cadastro';
import IMC from './IMC';
import Perfil from './Perfil';
import Resultado from './Resultado';

const Rotas = createStackNavigator();
const RotasGeral = createStackNavigator();

function RotasDasTelas() {
    return (
        <Rotas.Navigator initialRouteName="Home">
            <Rotas.Screen name="Home" component={Home}>
            </Rotas.Screen>

            <Rotas.Screen name="Sobre" component={Sobre}>
            </Rotas.Screen>

            <Rotas.Screen name="Cadastro" component={Cadastro}>
            </Rotas.Screen>

            <Rotas.Screen name="IMC" component={IMC}>
            </Rotas.Screen>

            <Rotas.Screen name="Resultado" component={Resultado}>
            </Rotas.Screen>

        </Rotas.Navigator>
    )
}


export default function RotaGeral() {
    return (
        <NavigationContainer>
            <RotasGeral.Navigator initialRouteName="Principal">
                <RotasGeral.Screen name="Principal" component={RotasDasTelas} options={{ headerShown: false }}>
                </RotasGeral.Screen>

                <RotasGeral.Screen name="Perfil" component={Perfil} options={{ headerShown: false }}>
                </RotasGeral.Screen>

            </RotasGeral.Navigator>
        </NavigationContainer>
    )
}
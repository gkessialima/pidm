import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import AlbumList from './AlbumList';
import { NavigationContainer } from '@react-navigation/native';
import Modal from './Modal';
import AlbumDetail from './AlbumDetail';

const Rotas = createStackNavigator();

function RotasTelas(){
    return (
        <NavigationContainer>

            <Rotas.Navigator initialRouteName="Lista">

                <Rotas.Screen name="AlbumList" component={AlbumList} options={{title: 'Galeria'}}>
                </Rotas.Screen>

                <Rotas.Screen name="AlbumDetail" component={AlbumDetail}>
                </Rotas.Screen>

                <Rotas.Screen name="Modal" component={Modal} options={{headerShown: false}}>
                </Rotas.Screen>

            </Rotas.Navigator>
        </NavigationContainer>
    )
}

export default RotasTelas
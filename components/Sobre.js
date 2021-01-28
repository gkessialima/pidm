import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import { estilo } from './Style'

export class Sobre extends Component {
    render() {
        return (
            <View style={estilo.container}> 
                <Text>Olá, eu sou a Késsia Lima, seja bem-vindo!</Text>
                <Button title="Home" onPress={()=>{this.props.navigation.navigate("Home")}}></Button>
            </View>
        )
    }
}

export default Sobre

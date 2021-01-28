import React, { Component } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import { estilo } from './Style'

export class Home extends Component {
    render() {
        return (
            <View style={estilo.container}>
                <Button title="Cadastro" onPress={()=>{this.props.navigation.navigate("Cadastro")}}></Button>
                <Button title="IMC" onPress={()=>{this.props.navigation.navigate("IMC")}}></Button>
                <Button title="Sobre" onPress={()=>{this.props.navigation.navigate("Sobre")}}></Button>
            </View>
        )
    }
}

export default Home

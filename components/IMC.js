import React, { Component } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import { estilo } from './Style'

export class IMC extends Component {
    constructor(props){
        super(props)
        this.state = {
            peso: 0,
            altura: 0
        }
    }

    render() {
        return (
            <View style={estilo.container}>
                <TextInput placeholder="Peso (Kg)" onChangeText={(peso)=>{this.setState({peso: peso})}}></TextInput>
                <TextInput placeholder="Altura (M)" onChangeText={(altura)=>{this.setState({altura: altura})}}></TextInput>
                <Button title="OK" onPress={()=>{this.props.navigation.navigate("Resultado", {peso: this.state.peso, altura: this.state.altura})}}></Button>
            </View>
        )
    }
}

export default IMC

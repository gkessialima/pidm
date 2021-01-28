import React, { Component } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import { estilo } from './Style'

export class Cadastro extends Component {

    constructor(props){
        super(props)
        this.state = {
            nome: "",
            idade: "",
            email: "",
        }
    }

    render() {
        return (
        <View style={estilo.container}>
            <TextInput placeholder="Nome" style={estilo.TextInput} onChangeText={(nome)=>{this.setState({nome: nome})}}></TextInput>
            <TextInput placeholder="Idade" style={estilo.TextInput} onChangeText={(idade)=>{this.setState({idade: idade})}}></TextInput>
            <TextInput placeholder="E-mail" style={estilo.TextInput} onChangeText={(email)=>{this.setState({email: email})}}></TextInput>
            <Button title="OK" onPress={()=>{this.props.navigation.navigate("Perfil",{nome: this.state.nome, idade: this.state.idade, email: this.state.email})}}></Button>
        </View>
        )
    }
}

export default Cadastro

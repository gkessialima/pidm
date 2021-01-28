import React, { Component } from 'react'
import { Button, Image, Text, View } from 'react-native'
import { estilo } from './Style'

export class Perfil extends Component {
    render() {
        return (
        <View style={estilo.container}>
            <Image style={estilo.Image} source={{uri:"https://comps.canstockphoto.com.br/estilo-quadrado-imagem-rosto-le%C3%A3o-vetor-eps_csp33178438.jpg"}}></Image>
            <Text>Nome: {this.props.route.params.nome}</Text>
            <Text>Idade: {this.props.route.params.idade}</Text>
            <Text>Email: {this.props.route.params.email}</Text>
            <Button title="Home" onPress={()=>{this.props.navigation.navigate("Home")}}></Button>
        </View>
        )
    }
}

export default Perfil

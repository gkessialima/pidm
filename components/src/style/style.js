import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    header: {
        backgroundColor: "gray",
        textAlign: "center",
        fontSize: 20,
    },
    imagem: {
        width: 200,
        height: 200,
        alignSelf: "center",
        marginBottom: 10,
        marginTop: 10
    },
    card: {
        width: 220,
        borderColor: "black",
        borderWidth: 1,

    },

    title:{
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 10,
    },
    subtitle:{
        marginLeft: 10,
        color: "grey",
    },
    container:{
        flex: 1,
        justfyContent: "center",
        alignItems: "center",
    }
})

export {estilo}
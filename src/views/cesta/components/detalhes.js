import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import Texto from "../../../components/texto";
import Logo from "../../../../assets/logo.png";
import Botao from "./botao";

export default function Detalhes({
  nome,
  logoFazenda,
  nomeFazenda,
  descricao,
  preco,
  botao,
}) {
  return (
    <>
      <Texto style={style.nome}>{nome} </Texto>
      <View style={style.fazenda}>
        <Image source={logoFazenda} style={style.imagemFazenda} />
        <Texto style={style.nomeFazenda}>{nomeFazenda} </Texto>
      </View>
      <Texto style={style.descricao}>{descricao}</Texto>
      <Texto style={style.preco}> {preco} </Texto>

      <Botao> {botao}</Botao>
    </>
  );
}

const style = StyleSheet.create({
  nome: {
    fontSize: 26,
    lineHeight: 42,
    color: "#464646",
    fontWeight: "bold",
  },
  fazenda: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  imagemFazenda: {
    width: 32,
    height: 32,
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  descricao: {
    color: "#a3a3a3",
    fontSize: 16,
    lineHeight: 26,
  },
  preco: {
    color: "#2a9f85",
    fontWeight: "bold",
    fontSize: 26,
    marginTop: 8,
  },
});

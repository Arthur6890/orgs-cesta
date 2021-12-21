import React from "react";
import { Image, StyleSheet, View, FlatList } from "react-native";
import Texto from "../../../components/texto";

export default function Item({ item: { nome, imagem } }) {
  return (
    <View style={style.item}>
      <Image source={imagem} style={style.imagem} />
      <Texto style={style.nome}> {nome} </Texto>
    </View>
  );
}

const style = StyleSheet.create({
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ececec",
    alignItems: "center",
    padding: 16,
  },
  imagem: {
    width: 46,
    height: 46,
  },
  nome: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: "#464646",
  },
});

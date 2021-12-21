import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Detalhes from "./components/detalhes";
import Head from "./components/head";
import Item from "./components/item";
import Texto from "../../components/texto";
export default function Cesta({ topo, detalhes, itens }) {
  return (
    <>
      <FlatList
        data={itens.lista}
        renderItem={Item}
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={() => {
          return (
            <>
              <Head {...topo} />
              <View style={style.cesta}>
                <Detalhes {...detalhes} />
                <Texto style={style.titulo}>{itens.titulo} </Texto>
              </View>
            </>
          );
        }}
      />
    </>
  );
}

const style = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  titulo: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
});

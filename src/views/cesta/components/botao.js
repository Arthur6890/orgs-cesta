import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Texto from "../../../components/texto";

export default function Botao({ children }) {
  return (
    <TouchableOpacity style={style.botao} onPress={() => {}}>
      <Texto style={style.textoBotao}> {children}</Texto>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  botao: {
    marginTop: 16,
    backgroundColor: "#2a9f85",
    paddingVertical: 16,
    borderRadius: 6,
  },
  textoBotao: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  },
});

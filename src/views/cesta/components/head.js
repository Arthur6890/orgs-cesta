import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";
import Texto from "../../../components/texto";
import Topo from "../../../../assets/topo.png";

const width = Dimensions.get("screen").width;

export default function Head({ titulo }) {
  return (
    <>
      <Image source={Topo} style={style.topo} />
      <Texto style={style.titulo}>{titulo}a</Texto>
    </>
  );
}

const style = StyleSheet.create({
  topo: {
    width: "100%",
    height: (578 / 768) * width,
    fontFamily: "Montserrat",
  },
  titulo: {
    position: "absolute",
    width: "100%",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
    color: "white",
    fontWeight: "bold",
    padding: 16,
  },
});

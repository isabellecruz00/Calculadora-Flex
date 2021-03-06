import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  const [currentNumber, setCurrentNumber] = useState("");
  const [ultimoNumero, setultimoNumero] = useState("");

  const botoes = [
    "AC",
    "DEL",
    "%",
    "/",
    7,
    8,
    9,
    "*",
    4,
    5,
    6,
    "-",
    3,
    2,
    1,
    "+",
    0,
    ".",
    "+/-",
    "="
  ];

  const calcular = () => {
    const espacoNumeros = currentNumber.split(" ");
    const primeiroNumero = parseFloat(espacoNumeros[0]);
    const ultimoNumero = parseFloat(espacoNumeros[2]);
    const operador = espacoNumeros[1];

    switch (operador) {
      case "+":
        setCurrentNumber((primeiroNumero + ultimoNumero).toString());
        return;
      case "-":
        setCurrentNumber((primeiroNumero - ultimoNumero).toString());
        return;
      case "*":
        setCurrentNumber((primeiroNumero * ultimoNumero).toString());
        return;
      case "/":
        setCurrentNumber((primeiroNumero / ultimoNumero).toString());
        return;
    }
  };

  const operationValue = (selectedButton) => {
    if (
      (selectedButton === "+") ||
      (selectedButton === "-") ||
      (selectedButton === "*") ||
      (selectedButton === "/")
    ) {
      setCurrentNumber(currentNumber + " " + selectedButton + " ");
      return;
    }

    switch (selectedButton) {
      case "DEL":
        setCurrentNumber(currentNumber.substring(0, currentNumber.length - 1));
        return;

      case "AC":
        setultimoNumero("");
        setCurrentNumber("");
        return;

      case "=":
        setultimoNumero(currentNumber + " = ");
        calcular();
        return;

      case "+/-":
        return;
    }

    setCurrentNumber(currentNumber + selectedButton);
  };

  return (
    <View>
      <View style={styles.resultado}>
        <Text style={styles.historicoValor}>{ultimoNumero}</Text>
        <Text style={styles.resultadoValor}>{currentNumber}</Text>
      </View>

      <View style={styles.digitosBotoes}>
        {botoes.map((button) =>
          button === "=" || button === "+" || button === "-" 
          || button === "*" || button === "/" || button === "%"
          || button === "DEL" || button === "AC" ? (
            <TouchableOpacity
              onPress={() => operationValue(button)}
              key={button}
              style={styles.operacaoBotao}
            >
              <Text style={styles.valorBotao}>{button}</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => operationValue(button)}
              key={button}
              style={styles.botao}
            >
              <Text style={styles.valorBotao}>{button}</Text>
            </TouchableOpacity>
          )
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  resultado: {
    backgroundColor: "#ffefc1",
    width: "100%",
    minHeight: 280,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },

  resultadoValor: {
    color: "#ffa463",
    margin: 15,
    fontSize: 50,
  },

  historicoValor: {
    color: "#ffa463",
    fontSize: 25,
    marginRight: 20,
    alignSelf: "flex-end",
  },

  digitosBotoes: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  botao: {
    borderColor: "#ffa463",
    backgroundColor: "#ffefc1",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 90,
    minHeight: 90,
    display: "flex",
    flex: 2,
  },

  operacaoBotao: {
    borderColor: "#ffa463",
    backgroundColor: "#ffefc1",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 90,
    minHeight: 90,
    display: "flex",
    flex: 2,
  },

  valorBotao: {
    fontSize: 25,
    color: "#ffa463"
  },
});
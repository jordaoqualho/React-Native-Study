import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import ShoesColumn from "../../component/ShoesColumn";
import Button from "../../component/Button";

export default function Carrinho({ navigation }) {
  navigation.setOptions({
    headerTitle: "Carrinho de compras",
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container_entrega}>
        <Feather
          name="map-pin"
          size={35}
          color="black"
          style={styles.iconeMap}
        />
        <View style={styles.text_entrega}>
          <Text>Entrega em Maringá-Pr</Text>
          <Text style={styles.text_entrega}>Rua Pacaembu, 2993 - Ap 302</Text>
          <Text>Prevista para o dia 01/01/2021</Text>
        </View>
      </View>
      <View style={styles.line} />
      <View style={styles.title_box}>
        <Text style={styles.text_entrega}>Itens no Carrinho</Text>
      </View>
      <View style={{ flexDirection: "column", justifyContent: "flex-start" }}>
        <ShoesColumn img={require("../../assets/1.png")} cost="R$140,90">
          Nike Air Max Dia
        </ShoesColumn>
        <ShoesColumn img={require("../../assets/2.png")} cost="R$280,90">
          Nike Downshifter 10
        </ShoesColumn>
      </View>
      <View style={styles.line} />

      <View style={styles.pagamento}>
        <Feather name="credit-card" size={24} color="black" />
        <View style={styles.text_entrega}>
          <Text style={styles.super_text_left}>Cartão de Credito</Text>
          <Text style={styles.a} >Mastercard ****** 8399</Text>
        </View>
      </View>

      <View style={styles.textContent}>
        <View style={styles.price_box}>
          <Text style={styles.text_size_left}>Subtotal</Text>
          <Text style={styles.text_size_right}>R$ 395,00</Text>
        </View>
        <View style={styles.price_box}>
          <Text style={styles.text_size_left}>Taxa de Entrega</Text>
          <Text style={styles.text_size_right}>Grátis</Text>
        </View>
        <View style={styles.price_box}>
          <Text style={styles.super_text_left} >Total</Text>
          <Text style={styles.super_text_right} >R$ 395,00</Text>
        </View>
      </View>
      <Button> </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFF",
  },  
  title: {
    fontFamily: "Anton_400Regular",
    paddingHorizontal: "2%",
  },
  textContent: {
    paddingVertical: "2%",
    paddingHorizontal: "5%",
  },
  price_box: {
    display: "flex",
    flexDirection: "row",
    width: '100%',
    alignItems: "flex-start",
  },
  line: {
    borderWidth: 1,
    borderBottomColor: "#CECECF",
    borderRadius: 5,
    width: "90%",
    alignSelf: "center",
    marginVertical: "2%",
  },
  container_entrega: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: "2%",
    marginVertical: "3%",
  },
  pagamento: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "5%",
    marginVertical: "3%",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    
  },
  iconeMap: {
    marginHorizontal: "5%",
  },
  text_entrega: {
    fontFamily: "Anton_400Regular",
    fontSize: 20,
    lineHeight: 30,
    textAlign: "center",
  },
  title_box: {
    width: "100%",
    marginVertical: "2%",
  },
  text_size_right: {
    width: "50%",
    textAlign:'right'
  },
  text_size_left: {
    width: "50%",
  },
  super_text_right: {
    fontFamily: "Anton_400Regular",
    fontSize: 20,
    width: "50%",
    lineHeight: 30,
    textAlign: 'right',
  },
  super_text_left: {
    fontFamily: "Anton_400Regular",
    fontSize: 20,
    width: "50%",
    lineHeight: 30,
    textAlign: 'left',
  }
});

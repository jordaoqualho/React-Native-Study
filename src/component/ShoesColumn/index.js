import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function Shoes(props) {

 function filterDesc(desc){
    if(desc.length < 27){
        return desc;
    }

    return `${desc.substring(0, 23)}...`;
 }

 return (
   <TouchableOpacity style={styles.container} onPress={props.onClick}>      
      <View style={styles.text_container}>
        <Text style={styles.shoesText}>
              1 {filterDesc(props.children)}
        </Text>
        <View opacity={0.4}>
          <Text style={styles.shoesText}> {props.cost} </Text>
        </View>
      </View>
      <Image
        source={props.img}
        style={styles.shoesImg}
      />
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container:{
        paddingVertical: '2%',
        paddingHorizontal: '3%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'        
    },
    text_container: {
      paddingVertical: '2%',
      paddingHorizontal: '2%',
      width: '50%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start' 

    },
    shoesImg:{
        width: '50%',
        height: 100
    },
    shoesText:{
        fontSize: 18       
    }
});
import React from 'react';
import {FlatList, View, StyleSheet, Text, TextInput} from 'react-native';
import { Ionicons, Feather, Entypo, EvilIcons } from '@expo/vector-icons'; 
import JacketList from './components/JacketList';
import StarRating from './components/StarRating';
import { AntDesign } from '@expo/vector-icons';


export default function ProductDetails() {
      const product = [
          {
           name: "Bike Jacket Softshell Warm",
           price:"$94",
           icon: <StarRating/>,
           photo: require("./assets/bike.jpg"),
          },

          {
            name: "Hooded Jacket",
            price:"$86",
            icon: <StarRating/>,
            photo: require("./assets/jacket2.jpg"),
          },

          {
            name: "Red Hoody Marine",
            price:"$100",
            icon: <StarRating/>,
            photo: require("./assets/jack.jpg"),
          },

          {
            name: "Red Woman Jacket",
            price:"$105",
            icon: <StarRating/>,
            photo: require("./assets/red.jpg"),
          },
          {
            name: "Pink Hoody Marine",
            price:"$70",
            icon: <StarRating/>,
            photo: require("./assets/bike.jpg"),
          },
          {
            name: "Bike Jacket Softshell Warm",
            price:"$100",
            icon: <StarRating/>,
            photo: require("./assets/bike.jpg"),
           },
      ]
    return (
        <View style={styles.container}>

        <View style={styles.iconContainer}>
           <AntDesign name="arrowleft" size={25} color="black" />
           <Feather style={styles.cart} name="shopping-cart" size={25} color="black" />
        </View>

     <View style={styles.titleContainer}>
        <Text style={styles.title}>Women Jacket</Text>
     </View>

           <View style={styles.searchArea}>
             <TextInput style={styles.searchBar}placeholder="Search Jacket"/>
             
           </View>

           <FlatList
              data={product}
              renderItem={({item})=> <JacketList {...item} />}
              keyExtractor={(name, price, icon) => name + price + icon}
              />
      
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 30,
      paddingTop: 30,
      paddingLeft: 20,
      backgroundColor: "#e6ebe6",
    },

    iconContainer:{
        flexDirection:"row",
        paddingBottom:5
    },

    arrow:{
        borderRadius:50,
        backgroundColor:"white",
        width:35,
        height:35,
        paddingVertical:5,
        paddingHorizontal:10  
    },

    cart:{
        marginHorizontal:260,
        borderRadius:70,
        width:45,
        height:45,
        paddingVertical:7,
        paddingHorizontal:8,
    },
  
    searchArea: {
      flexDirection: "row",
     
    },
  
    searchBar: {
      flex: 1,
      fontSize: 12,
      paddingLeft: 10,
      width: "95%",
      height: 52,
      backgroundColor: "white",
      borderRadius: 15,
      textAlign:"left",
      marginBottom:15
    },
    filter:{
      paddingRight:20
    },
    titleContainer:{
        marginHorizontal:13,
        paddingBottom:5
    },

    inputContainer:{
        marginVertical:15,
        marginHorizontal:13
    },

    title:{
        fontWeight:"bold",
        fontSize:25,
    },
  });
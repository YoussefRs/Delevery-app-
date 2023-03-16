import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React, {useLayoutEffect, useState} from 'react'
import { useTailwind } from 'tailwind-rn/dist'
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { TabStackParamList } from '../Navigator/TabNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';
import { RootStackParamList } from '../Navigator/RootNavigator';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { Image, Input } from '@rneui/themed';

export type CustomerScreenNavigationProp = CompositeNavigationProp<
BottomTabNavigationProp<TabStackParamList, 'Customers'>,
NativeStackNavigationProp<RootStackParamList>
>


const CustomerScreen = () => {
  const tw = useTailwind();
  const navigation = useNavigation<CustomerScreenNavigationProp>();
  const [input, setInput] = useState<string>("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown : false,
    })
  }, [])
  return (
    <ScrollView style={{backgroundColor : "#69cbd5"}} >
      <Image
      source={{uri : "https://www.shutterstock.com/image-vector/online-delivery-vector-concept-internet-260nw-1714737814.jpg"}} 
      style={styles.image}
      />
      <Input  
        placeholder='Search by Customer' 
        value={input} 
        onChangeText={setInput}
        style={styles.input}
      />

    
    </ScrollView>
    
  )
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  input : {
    backgroundColor : "#fff",
    paddingTop : 5,
    paddingBottom : 0,
    paddingHorizontal : 10,
    borderRadius : 15,

  },
  
});

export default CustomerScreen

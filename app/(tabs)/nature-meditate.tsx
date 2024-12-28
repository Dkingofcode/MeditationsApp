import { StyleSheet, View, Text, Pressable, ImageBackground, FlatList } from 'react-native';
import React from 'react';
import AppGradient from '@/components/AppGradient';
 import  MEDITATION_IMAGES  from "@/constants/MeditationImages";
import { MEDITATION_DATA } from '@/constants/MeditationData';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';



const natureMeditate = () => {
  return (
    <View className='flex-1'>
      <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
        <View className='mb-6'>
          <Text className='text-gray-200 mb-3 font-bold text-4xl'>
            natureMeditate
          </Text>
          <Text className='text-indigo-100 text-xl font-medium'>
            Start your meditation practice today
          </Text>
        </View>
        <View>
          <FlatList 
               data={MEDITATION_DATA} 
               className='mb-20'  
               keyExtractor={(item) => item.id.toString()} 
               showsVerticalScrollIndicator={false}
               renderItem={({ item }) =>  (
                 <Pressable 
                     onPress={() => console.log("press")} 
                     className='h-48 my-3 rounded-md overflow-hidden'>
                    <ImageBackground 
                       source={MEDITATION_IMAGES[item.id - 1]}
                       resizeMode='cover'
                       className='flex-1 rounded-lg justify-center'>
                        <LinearGradient 
                           colors={["transparent", "rgba(0, 0, 0, 0.8"]}
                           className='flex-1'
                           >
                         <Text className='text-gray-100 text-3xl font-bold text-center'>
                          {item.title}
                         </Text>
                        </LinearGradient>
                    </ImageBackground>
                 </Pressable>     
               )}
               />
        </View>
      </AppGradient>
      <StatusBar style='light' />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    borderRadius: 10,
    justifyContent: "center",
  },
  gradient: {
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    width: "100%",
  },
  list: {
    paddingBottom: 150,
  },
})

export default natureMeditate;
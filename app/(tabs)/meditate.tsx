import { View, Text, ImageBackground, Pressable } from 'react-native';
import React from 'react';

import MEDITATION_IMAGES from "@/constants/MeditationImages";
import AppGradient from '@/components/AppGradient';
import { router } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';


const meditate = () => {
  return (
    <View className='flex-1'>
        <ImageBackground 
             source={MEDITATION_IMAGES[0]} 
             resizeMode='cover' 
             className='flex-1'
             >
               <AppGradient colors={["transparent", "rgba(0, 0, 0, 0.8)", "rgba(0, 0, 0, 0.6)"]}>
                 <Pressable 
                    onPress={() => router.back()} className='absolute top-16 left-6 z-10'>
                      <AntDesign name='leftcircle' size={50} color="white" />  
                 </Pressable>

                 <View className='flex-1 justify-center'>
                    <View className='mx-auto bg-neutral-200 rounded-full'>
                        <Text className='text-4xl text-blue-400'>
                          00:00
                        </Text>
                    </View>
                 </View>
               </AppGradient>
        </ImageBackground>
      <Text>meditate</Text>
    </View>
  )
};

export default meditate;
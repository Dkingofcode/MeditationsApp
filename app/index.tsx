import { View, Text, Image, ImageBackground,  } from 'react-native';
import React from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from 'expo-status-bar';
//import CustomButton from '@/components/CustomButton';
import beachImage from "@/assets/meditation-images/beach.webp";
import CustomButton from '@/components/CustomButton';
import { useRouter } from 'expo-router';
import AppGradient from '@/components/AppGradient';
import Animated, { FadeInDown, FadeInUp, withSpring } from 'react-native-reanimated';



function App() {
   const router = useRouter();

  return (
      <View className="flex-1">
        <ImageBackground
           source={beachImage}
           resizeMode='cover'
           className="flex-1"
        >
          <AppGradient colors={["rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0.8)"]}>
            <SafeAreaView className="flex-1 px-1 justify-between">
              <Animated.View entering={FadeInDown.delay(300).mass(0.5).stiffness(80).springify(20)}>
                 <Text className="text-center text-white font-bold">
                    Simple Meditation
                  </Text>
                  <Text className="text-center text-white text-regular">
                    Simplifying Meditation for Everyone
                  </Text>
              </Animated.View>

              <Animated.View>
                <CustomButton onPress={() => router.push("/nature-meditate")}
                 title='Get Started'
                 />

              </Animated.View>
              <StatusBar style='light' />
            </SafeAreaView>
        </AppGradient>
        </ImageBackground>
      </View>
  );
}

export default App;
import { Stack } from 'expo-router/stack';

import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { useFonts, Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { ActivityIndicator } from 'react-native';

export default function Layout() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <GluestackUIProvider mode="light">
      <Stack screenOptions={{headerShown: false}} />
    </GluestackUIProvider>
  )
}

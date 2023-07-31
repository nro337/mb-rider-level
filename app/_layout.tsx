import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import Trails from '@/constants/Trails';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // option: Populate Trails in DB
  // useEffect(() => {
  //   for (let trail of Trails) {
  //     fetch(`https://bike.langswap.app/trail`, {
  //         method: "POST",
  //         body: JSON.stringify({
  //             title: trail.title,
  //             description: trail.summary,
  //             start_lat: trail.lat,
  //             start_lon: trail.long,
  //             end_lat: 0,
  //             end_lon: 0,
  //             length: trail.length
  //         }),
  //         headers: {
  //             "Content-type": "application/json; charset=UTF-8"
  //         }
  //     })
      
  //     // Converting to JSON
  //     .then(response => response.json())
      
  //     // Displaying results to console
  //     .then(json => console.log(json));
  //   }
  // }, [])

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack>
    </ThemeProvider>
  );
}

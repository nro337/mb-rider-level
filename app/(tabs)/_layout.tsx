import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '@/constants/Colors';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // setLoading(true)
    fetch('https://bike.langswap.app/users/1')
      .then((response) => response.json())
      .then(async (json) => {
        try {
          const jsonValue = JSON.stringify(json);
          await AsyncStorage.setItem('user', jsonValue);
        } catch (error) {
          console.error(error)
        }
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].black
        }
      }}>
      <Tabs.Screen
        name="(index)"
        options={{
          title: 'Find Trails',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
          tabBarActiveTintColor: '#000',
          tabBarActiveBackgroundColor: Colors[colorScheme ?? 'light'].tabBackgroundSelected,
          tabBarInactiveBackgroundColor: '#D9D9D9',
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="(two)"
        options={{
          title: 'My Top 10',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="arrow-up" color={color} />,
          tabBarActiveTintColor: '#000',
          tabBarActiveBackgroundColor: Colors[colorScheme ?? 'light'].tabBackgroundSelected,
          tabBarInactiveBackgroundColor: '#D9D9D9'
        }}
      />
      <Tabs.Screen
        name="(four)"
        options={{
          title: 'Create Trail',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="tree" color={color} />,
          tabBarActiveTintColor: '#000',
          tabBarActiveBackgroundColor: Colors[colorScheme ?? 'light'].tabBackgroundSelected,
          tabBarInactiveBackgroundColor: '#D9D9D9'
        }}
      />
      <Tabs.Screen
        name="(three)"
        options={{
          title: 'About',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
          tabBarActiveTintColor: '#000',
          tabBarActiveBackgroundColor: Colors[colorScheme ?? 'light'].tabBackgroundSelected,
          tabBarInactiveBackgroundColor: '#D9D9D9'
        }}
      />
    </Tabs>
  );
}

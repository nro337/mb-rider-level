import { StyleSheet, FlatList } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import User from "@/app/types/User";
import { Stack } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export default function TabTwoScreen() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getUsers = async () => {
      const user = await getData();
      setUser(user);
    };

    getUsers();
  }, []);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("user");
      setLoading(false)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={styles.container}>
      {loading ? <Stack.Screen options={{ title: 'About' }} /> : <Stack.Screen options={{ title: user?.email }} />}
      {loading ? (
        <Text style={{ color: "#FFA500" }}>Loading</Text>
      ) : (
        <View style={styles.about_wrapper}>
          <View style={styles.row}>
            <View style={styles.block}>
              <Text style={{ fontSize: 20 }}>Rider Level</Text>
              <Text style={{ fontSize: 18 }}>8</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.block}>
              <Text style={{ fontSize: 20 }}>Avg Trail Level</Text>
              <Text style={{ fontSize: 18 }}>7.7</Text>
            </View>
            <View style={styles.block}>
              <Text style={{ fontSize: 20 }}>Avg Run Time</Text>
              <Text style={{ fontSize: 18 }}>10:25</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.block}>
              <Text style={{ fontSize: 20 }}>Avg Speed</Text>
              <Text style={{ fontSize: 18 }}>23.9 mph</Text>
            </View>
            <View style={styles.block}>
              <Text style={{ fontSize: 20 }}>Flow</Text>
              <Text style={{ fontSize: 18 }}>6.7</Text>
            </View>
          </View>
        </View>
      )}
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/three.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 150,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  about_wrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3f93",
    width: "100%",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
  },
  block: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#000",
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#E83F6F",
    width: "48%",
    justifyContent: "center",
    alignItems: "center",
  },
});

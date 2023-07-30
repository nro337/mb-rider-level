import { FlatList, Platform, StyleSheet, TouchableOpacity } from "react-native";

import { ItemProps } from "@/constants/Trails";
import { TrailData, Trails } from "@/constants/Trails";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { useEffect, useRef, useState } from "react";
import { Link, Stack, useRouter, useSegments } from "expo-router";
import useScrollToTop from "@/components/useScrollToTopWithOffset";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TrailType from "@/app/types/Trail";

type Group<T extends string> = `(${T})`;
type SharedSegment = Group<"index">;

export default function TabOneScreen() {
  const [selectedId, setSelectedId] = useState<string>();
  const [segment] = useSegments() as [SharedSegment];
  const router = useRouter();
  const ref = useRef<FlatList>(null);

  const [loading, setLoading] = useState(false);
  const [trails, setTrails] = useState<TrailData | any | null>(null);

  ///
  // useEffect(() => {
  //   // setLoading(true)
  //   fetch('https://bike.langswap.app/trails')
  //     .then((response) => response.json())
  //     .then(async (json) => {
  //       try {
  //         const jsonValue = JSON.stringify(json);
  //         await AsyncStorage.setItem('trails', jsonValue);
  //       } catch (error) {
  //         console.error(error)
  //       }
  //     })
  //     .catch((error) => console.error(error))
  //     // .finally(() => setLoading(false));
  // }, []);
  // ///

  // useEffect(() => {
  //   const getTrails = async () => {
  //     await getData();
  //   };

  //   getTrails(); // run it, run it
  // }, []);

  // const getData = async () => {
  //   try {
  //     const response = await fetch("https://bike.langswap.app/trails");
  //     const trails = await response.json();
  //     // console.log(trails);
  //     setTrails(trails);
  //     setLoading(false);
  //     // return jsonValue != null ? JSON.parse(jsonValue) : null;
  //   } catch (e) {
  //     // error reading value
  //     console.error(e);
  //   }
  // };

  // useScrollToTop(
  //   ref,
  //   Platform.select({
  //     ios: -150,
  //     default: 0,
  //   })
  // );

  useEffect(() => {
    if (selectedId) {
      router.push({
        pathname: `/${segment}/trail/${selectedId}`,
        // @ts-ignore
        // params: {id: selectedId}
      })
      // router.push(`/${segment}/trail/${selectedId}`);
      // setSelectedId("");
    }
  }, [selectedId]);

  const Trail = ({ item, onPress, backgroundColor, textColor }: ItemProps) => (
    // <Link href={
    //   `/trails/${selectedId}`
    // } asChild >
    <TouchableOpacity
      onPress={onPress}
      style={[styles.item, { backgroundColor }]}
    >
      <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
      <Text style={[styles.title, { color: textColor }]}>{item.length} mi</Text>
    </TouchableOpacity>
    // </Link>
  );

  const renderItem = ({ item }: { item: TrailData }) => {
    const backgroundColor = item.id === selectedId ? "#E83F6F" : "#FFFFFF";
    const color = item.id === selectedId ? "white" : "black";

    return (
      <Trail
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    // <View style={styles.container}>
    <>
      <Stack.Screen options={{ title: "Find Trails" }} />
      {loading ? (
        <Text style={{color: '#ffffff'}}>Loading...</Text>
      ) : (
        <FlatList
          ref={ref}
          scrollToOverflowEnabled
          contentInsetAdjustmentBehavior="automatic"
          data={Trails}
          style={{ flex: 1 }}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      )}
      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
      {/* </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   // flex: 1,
  //   // alignItems: 'stretch',
  //   // justifyContent: 'center',
  //   // paddingTop: 150
  // },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  item: {
    padding: 20,
    marginVertical: 0,
    marginHorizontal: 0,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#000",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
});

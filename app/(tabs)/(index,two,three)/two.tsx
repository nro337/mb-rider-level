import { FlatList, Platform, StyleSheet, TouchableOpacity } from 'react-native';

import Trails, { ItemProps, TrailData } from '@/constants/Trails';
// import { TrailData, Trails } from '@/constants/Trails';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { useEffect, useRef, useState } from 'react';
import { Stack, useRouter, useSegments } from 'expo-router';
import useScrollToTop from '@/components/useScrollToTopWithOffset';
import TrailType from '@/app/types/Trail';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Group<T extends string> = `(${T})`
type SharedSegment = Group<"two">

export default function TabTwoScreen() {
  const [selectedId, setSelectedId] = useState<string>();
  const [loading, setLoading] = useState(true);
  const [trails, setTrails] = useState<TrailType[] | null>(null);
  const [segment] = useSegments() as [SharedSegment]
  const router = useRouter()
  const ref = useRef<FlatList>(null)

  useEffect(() => {
    const getUsers = async () => {
      const trails = await getData();
      setTrails(trails);
    };

    getUsers();
  }, []);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("trails");
      setLoading(false)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.error(e);
    }
  };

  useScrollToTop(
    ref,
    Platform.select({
      ios: -150,
      default: 0,
    })
  );

  const Trail = ({item, onPress, backgroundColor, textColor}: ItemProps) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
      <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
    </TouchableOpacity>
  )

  const renderItem = ({item}: {item: TrailData}) => {
    const backgroundColor = item.id === selectedId ? '#E83F6F' : '#FFFFFF';
    const color = item.id === selectedId ? 'white' : 'black';

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
      <Stack.Screen options={{title: 'My Top 10'}} />
      <FlatList
        ref={ref}
        scrollToOverflowEnabled
        contentInsetAdjustmentBehavior='automatic'
        data={Trails}
        style={{flex: 1}}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
      {/* <EditScreenInfo path="app/(tabs)/two.tsx" /> */}
    {/* </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: 'stretch',
  //   justifyContent: 'center',
  // },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  item: {
    padding: 20,
    marginVertical: 0,
    marginHorizontal: 0,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000'
  },
});

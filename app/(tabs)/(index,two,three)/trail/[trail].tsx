import { TrailData } from '@/constants/Trails';
import { Image as ExpoImage, ImageSource} from 'expo-image';
import {Asset, useAssets} from 'expo-asset';
import { Link, Stack, useLocalSearchParams, useSegments } from 'expo-router';
import { Image, Text, View, StyleSheet, Dimensions, Pressable, useColorScheme } from 'react-native';
import Trails from '@/constants/Trails';
import { ScrollView } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

type Group<T extends string> = `(${T})`
type SharedSegment = Group<"tabs">

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
    />
  );
}

export default function Trail() {
  // @ts-ignore
  const { trail: id } = useLocalSearchParams<{ trail: TrailData }>();
  const trail = Trails.find((trail) => trail.id == id)
  const [assets, error]: [Asset[] | undefined, Error | undefined]  = useAssets([
    require("@/assets/images/green_circle.jpg"),
    require("@/assets/images/blue_square.jpg"),
    require("@/assets/images/black_diamond.jpg"),
    require("@/assets/images/double_black_diamond.jpg"),
  ]);

  const colorScheme = useColorScheme();
  const [segment] = useSegments() as [SharedSegment]


  if (!trail) {
    return (
      <ScrollView contentInsetAdjustmentBehavior='automatic'>
        <Text style={{color: '#fff'}}>Post not found: {id}</Text>
      </ScrollView>
    )
  }

  // if (trail.id === 'review') {
  //   return (
  //     <ScrollView contentInsetAdjustmentBehavior='automatic'>
  //       <Text style={{color: '#fff'}}>Review</Text>
  //     </ScrollView>
  //   )
  // }


  return (
    <>
      <Stack.Screen options={{title: `${trail.title}`, headerRight: () => (
        <Link href={`/${segment}/review`} asChild>
        <Pressable>
          {({ pressed }) => (
            <FontAwesome
              name="edit"
              size={25}
              color={Colors[colorScheme ?? 'light'].text}
              style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
            />
          )}
        </Pressable>
      </Link>
      )}} />
      {/* <ScrollView contentInsetAdjustmentBehavior='automatic'> */}
        <View style={styles.container}>
          <ExpoImage 
            style={styles.image}
            source={trail.img}
            contentFit='cover'
            transition={100}
          />
          {assets && trail.difficulty_rating === 'Green' && 
            <ExpoImage 
              style={styles.difficulty_rating}
              source={assets[0].uri}
              contentFit='cover'
          />
          }
          {assets && trail.difficulty_rating === 'Blue' && 
            <ExpoImage 
              style={styles.difficulty_rating}
              source={assets[1].uri}
              contentFit='cover'
          />
          }
          {assets && trail.difficulty_rating === 'Green/Blue' &&
          <View style={styles.image_layout}>
            <ExpoImage 
              style={styles.difficulty_rating}
              source={assets[0].uri}
              contentFit='cover'
            />
            <ExpoImage 
              style={styles.difficulty_rating}
              source={assets[1].uri}
              contentFit='cover'
            />
          </View>
          }
          {assets && trail.difficulty_rating === 'Blue/Black' &&
          <View style={styles.image_layout}>
            <ExpoImage 
              style={styles.difficulty_rating}
              source={assets[1].uri}
              contentFit='cover'
            />
            <ExpoImage 
              style={styles.difficulty_rating}
              source={assets[2].uri}
              contentFit='cover'
            />
          </View>
          }
          {assets && trail.difficulty_rating === 'Black' && 
            <ExpoImage 
              style={styles.difficulty_rating}
              source={assets[2].uri}
              contentFit='cover'
          />
          }
          {assets && trail.difficulty_rating === 'Double Black' && 
            <ExpoImage 
              style={{width: 150, height: 100}}
              source={assets[3].uri}
              contentFit='cover'
          />
          }
          <View style={styles.table}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
              <View style={{}}>
                <Text style={{color: '#fff', fontSize: 32}}>Trail Level</Text>
              </View>
              <View>
                <Text style={{color: '#fff', fontSize: 24}}>7</Text>
              </View>
            </View>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
              <View>
                <Text style={{color: '#fff', fontSize: 32}}>Avg. Speed</Text>
              </View>
              <View>
                <Text style={{color: '#fff', fontSize: 24}}>29.1 mph</Text>
              </View>
            </View>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
              <View>
                <Text style={{color: '#fff', fontSize: 32}}>Avg. Time</Text>
              </View>
              <View>
                <Text style={{color: '#fff', fontSize: 24}}>7:12</Text>
              </View>
            </View>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
              <View>
                <Text style={{color: '#fff', fontSize: 32}}>Flow</Text>
              </View>
              <View>
                <Text style={{color: '#fff', fontSize: 24}}>6.3</Text>
              </View>
            </View>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
              <View>
                <Text style={{color: '#fff', fontSize: 32}}>Grit</Text>
              </View>
              <View>
                <Text style={{color: '#fff', fontSize: 24}}>1</Text>
              </View>
            </View>
          </View>
        </View>
      {/* </ScrollView> */}
    </>
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Text style={{color: '#fff'}}>Test</Text>
    //   {/* <Stack.Screen
    //     options={{
    //       // https://reactnavigation.org/docs/headers#setting-the-header-title
    //       title: 'My home',
    //       // https://reactnavigation.org/docs/headers#adjusting-header-styles
    //       headerStyle: { backgroundColor: '#f4511e' },
    //       headerTintColor: '#fff',
    //       headerTitleStyle: {
    //         fontWeight: 'bold',
    //       },
    //       // https://reactnavigation.org/docs/headers#replacing-the-title-with-a-custom-component
    //       headerTitle: props => <LogoTitle {...props} />,
    //     }}
    //   />
    //   <Text>Home Screen</Text>
    //   <Link href={{ pathname: 'details', params: { name: 'Bacon' } }}>Go to Details</Link> */}
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#585123'
  },
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
  image: {
    backgroundColor: '#585123',
    width: 250,
    height: 250,
    // height: '50%',
  },
  difficulty_rating: {
    backgroundColor: '#585123',
    width: 75,
    height: 75
  },
  image_layout: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  table: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 8
  }
});
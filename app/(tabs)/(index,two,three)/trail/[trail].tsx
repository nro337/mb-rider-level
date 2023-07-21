import { TrailData } from '@/constants/Trails';
import { Image as ExpoImage} from 'expo-image';
import { Link, Stack, useLocalSearchParams } from 'expo-router';
import { Image, Text, View, StyleSheet, Dimensions } from 'react-native';
import Trails from '@/constants/Trails';
import { ScrollView } from 'react-native-gesture-handler';

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

  if (!trail) {
    return (
      <ScrollView contentInsetAdjustmentBehavior='automatic'>
        <Text style={{color: '#fff'}}>Post not found: {id}</Text>
      </ScrollView>
    )
  }


  return (
    <>
      <Stack.Screen options={{title: `${trail.title}`}} />
      {/* <ScrollView contentInsetAdjustmentBehavior='automatic'> */}
        <View style={styles.container}>
          <Text>{trail.title}</Text>
          <ExpoImage 
            style={styles.image}
            source={trail.img}
            contentFit='cover'
            transition={100}
          />
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
    width: 200,
    height: 200,
    // height: '50%',
  }
});
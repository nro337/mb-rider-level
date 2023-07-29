import { StyleSheet, FlatList, TextInput, TouchableWithoutFeedback, Keyboard, Button, GestureResponderEvent } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { Stack, useGlobalSearchParams, useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
// import { TrailData } from '@/constants/Trails';
import TrailType from '@/app/types/Trail';
import { Formik, FormikHandlers, FormikHelpers } from 'formik';

type Submission = {
  user: number,
  trail: number,
  start: string,
  end: string
}

export default function Completion() {
  const [text, setText] = useState<string>()
  // const [values, setValues] = useState<Submission>()
  const router = useRouter()

  // @ts-ignore
  const {id: id} = useLocalSearchParams<string>(id);

  const DismissKeyboard = ({ children }: {children: any}) => (
    <TouchableWithoutFeedback 
    onPress={() => Keyboard.dismiss()}> 
      {children}
    </TouchableWithoutFeedback>
    );

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Submit completion" }} />
      <View>
        <Text>Hello {id}</Text>
      </View>
      <Formik
        initialValues={{
          user: undefined,
          trail: id,
          start: "",
          end: "", 
        }}
        onSubmit={values => console.log(values)}
      >
        {({handleChange, handleSubmit, values}) => (
          <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', 'alignItems': 'center'}}>
            <View style={{display: 'flex', flexDirection : 'row', width: '100%', justifyContent: 'space-evenly'}}>
              <Text>User ID</Text>
              <TextInput
                onChangeText={handleChange('user')}
                value={values.user}
                // label="User ID"
                placeholder="User ID"
              />
            </View>
            <View style={{display: 'flex', flexDirection : 'row', width: '100%', justifyContent: 'space-evenly'}}>
              <Text>Trail ID</Text>
              <TextInput
                onChangeText={handleChange('trail')}
                value={id}
                // label="User ID"
                placeholder="Trail ID"
              />
            </View>
            <View style={{display: 'flex', flexDirection : 'row', width: '100%', justifyContent: 'space-evenly'}}>
              <Text>Start</Text>
              <TextInput
                onChangeText={handleChange('start')}
                value={values.start}
                // label="User ID"
                placeholder="Start"
              />
            </View>
            {/* {errors.firstName ? (
              <Text>{errors.firstName}</Text>
            ) : (
              <></>
            )} */}
            <Button title='Submit' onPress={handleSubmit as (event: GestureResponderEvent | undefined) => void} color={'#fff'} />
          </View>
        )}
      </Formik>
      {/* <ScrollView keyboardShouldPersistTaps={'handled'}>
      <DismissKeyboard>
        <TextInput
          style={{ width: 300, height: 200, backgroundColor: 'white', borderRadius: 8, fontSize: 16 }}
          multiline
          numberOfLines={10}
          onChangeText={() => setText(text)}
          value={text}
          placeholder='  Leave a review...'
        />
      </DismissKeyboard>
      <Button title='Submit' color={'#fff'} onPress={() => router.push(`/`)} />
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 150
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
});

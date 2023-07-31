import { StyleSheet, FlatList, TextInput, TouchableWithoutFeedback, Keyboard, Button, GestureResponderEvent, SafeAreaView } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { Stack, useGlobalSearchParams, useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
// import { TrailData } from '@/constants/Trails';
import TrailType from '@/app/types/Trail';
import { Formik, FormikHandlers, FormikHelpers } from 'formik';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker'
import User from '@/app/types/User';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Submission = {
  user: number,
  trail: number,
  start: string,
  end: string,
  flow: number
}

type mode = 'date' | 'time' | 'datetime' | 'countdown';

export default function Completion() {
  const [text, setText] = useState<string>()
  const [startDate, setStartDate] = useState(new Date('2023-01-01T000:00:00'));
  const [endDate, setEndDate] = useState(new Date('2023-01-01T000:00:00'));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(true);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
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
  
    // @ts-ignore
    const onStartChange = (event, selectedDate) => {
      const currentDate = selectedDate;
      // setShow(false);
      setStartDate(currentDate);
    };

    // @ts-ignore
    const onEndChange = (event, selectedDate) => {
      const currentDate = selectedDate;
      // setShow(false);
      setEndDate(currentDate);
    };

    const onChangeWrapper = (event:DateTimePickerEvent, selectedDate:any) => {
      onStartChange(event, selectedDate)
      // setFieldValue()
    }
  
    const showMode = (currentMode: mode) => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    const showTimepicker = () => {
      showMode('time');
    };
  
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

    const submitHandler = (obj: any) => {
      let parsed_obj: Submission = {
        user: parseInt(obj.user),
        trail: parseInt(obj.trail),
        start: obj.start,
        end: obj.end,
        flow: parseFloat(obj.flow)
      }
      console.log(parsed_obj)
    }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Submit completion" }} />
      {loading ? <Text style={{ color: "#FFA500" }}>Loading</Text> : 
      <>
          <Formik
            initialValues={{
              user: user?.id.toString(),
              trail: id,
              start: "",
              end: "", 
              flow: 0
            }}
            onSubmit={values => submitHandler(values)}
          >
            {({handleChange, handleSubmit, setFieldValue, values, errors}) => (
              <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', 'alignItems': 'center', width: '100%'}}>
                <View style={styles.rowWrapper}>
                  <Text style={styles.label}>User ID</Text>
                  <TextInput
                    style={styles.textArea}
                    onLayout={() => setFieldValue('user', user?.id.toString())}
                    onChangeText={handleChange('user')}
                    value={user?.id.toString()}
                    // label="User ID"
                    placeholder="User ID"
                    keyboardType='numbers-and-punctuation'
                  />
                </View>
                <View style={styles.rowWrapper}>
                  <Text style={styles.label}>Trail ID</Text>
                  <TextInput
                    style={styles.textArea}
                    onChangeText={handleChange('trail')}
                    value={id}
                    editable={false}
                    // label="User ID"
                    placeholder="Trail ID"
                  />
                </View>
                <View style={styles.rowWrapper}>
                  <Text style={styles.label}>Start</Text>
                  {/* <TextInput
                    onChangeText={handleChange('start')}
                    value={values.start}
                    // label="User ID"
                    placeholder="Start"
                  /> */}
                  <SafeAreaView>
                    {/* <Button onPress={showDatepicker} title="Show date picker!" />
                    <Button onPress={showTimepicker} title="Show time picker!" /> */}
                    {show && (
                      <DateTimePicker
                        testID="dateTimePicker"
                        value={startDate}
                        mode='datetime'
                        onChange={(e, t) => {onStartChange(e, t); setFieldValue('start', t?.toISOString())}}
                      />
                    )}
                  </SafeAreaView>
                </View>
                {errors.start ? (
                  <Text>{errors.start}</Text>
                ) : (
                  <></>
                )}
                <View style={styles.rowWrapper}>
                  <Text style={styles.label}>End</Text>
                  {/* <TextInput
                    onChangeText={handleChange('start')}
                    value={values.start}
                    // label="User ID"
                    placeholder="Start"
                  /> */}
                  <SafeAreaView>
                    {/* <Button onPress={showDatepicker} title="Show date picker!" />
                    <Button onPress={showTimepicker} title="Show time picker!" /> */}
                    {show && (
                      <DateTimePicker
                        testID="dateTimePicker"
                        value={endDate}
                        mode='datetime'
                        onChange={(e, t) => {onEndChange(e, t); setFieldValue('end', t?.toISOString())}}
                      />
                    )}
                  </SafeAreaView>
                </View>
                <View style={styles.rowWrapper}>
                  <Text style={styles.label}>Flow Rating</Text>
                  <TextInput
                    style={styles.textArea}
                    onChangeText={handleChange('flow')}
                    value={values.flow.toString()}
                    // label="User ID"
                    placeholder="Flow"
                    keyboardType='numbers-and-punctuation'
                  />
                </View>
                {errors.flow ? (
                  <Text>{errors.flow}</Text>
                ) : (
                  <></>
                )}
                <View style={{borderColor: '#000', borderWidth: 1, borderStyle: 'solid', borderRadius: 10, backgroundColor: '#000'}}>
                  <Button title='Submit' onPress={handleSubmit as (event: GestureResponderEvent | undefined) => void} color={'#F5E960'}  />
                </View>
              </View>
            )}
          </Formik>
          {/* <Text>selected: {startDate.toISOString()} {endDate.toISOString()}</Text> */}
        </>
      }
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
    // paddingTop: 150
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
  label: {
    fontSize: 32
  },
  rowWrapper: {
    display: 'flex', 
    flexDirection : 'row', 
    width: '100%', 
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 10
  },
  textArea: {
    fontSize: 24, 
    color: '#fff', 
    width: 40, 
    borderColor: '#000', 
    borderStyle: 'solid', 
    borderWidth: 2, 
    borderRadius: 8,
    textAlign: 'center'
  }
});

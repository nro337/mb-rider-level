import { StyleSheet, FlatList, TextInput, Button, SafeAreaView, GestureResponderEvent } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import User from "@/app/types/User";
import { Stack } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Formik } from "formik";

type SubmissionStrings = {
  title: string,
  description: string,
  start_lat: string,
  start_lon: string,
  end_lat: string,
  end_lon: string,
  length: string,
  town: string,
  state: string,
  imba_score: string,
  url: string,
  image_url: string
}

type SubmissionFixed = {
  title: string,
  description: string,
  start_lat: number,
  start_lon: number,
  end_lat: number,
  end_lon: number,
  length: number,
  town: string,
  state: string,
  imba_score: string,
  url: string,
  image_url: string
}

export default function NewTrail() {
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

  const submitHandler = (obj: any) => {
    let parsed_obj: SubmissionFixed = {
      title: obj.title,
      description: obj.description,
      start_lat: parseFloat(obj.start_lat),
      start_lon: parseFloat(obj.start_lon),
      end_lat: parseFloat(obj.end_lat),
      end_lon: parseFloat(obj.end_lon),
      length: parseFloat(obj.length),
      town: obj.town,
      state: obj.state,
      imba_score: obj.imba_score,
      url: obj.url,
      image_url: obj.image_url
    }
    console.log(parsed_obj)
  }

  return (
    <View style={styles.container}>
      {loading ? <Stack.Screen options={{ title: 'New Trail' }} /> : <Stack.Screen options={{ title: user?.email }} />}
      {loading ? (
        <Text style={{ color: "#FFA500" }}>Loading</Text>
      ) : (
        <>
        <Formik
          initialValues={{
            title: "",
            description: "",
            start_lat: 0,
            start_lon: 0,
            end_lat: 0,
            end_lon: 0,
            length: 0,
            town: "",
            state: "",
            imba_score: "",
            url: "",
            image_url: ""
          }}
          onSubmit={(values) => submitHandler(values)}
        >
          {({handleChange, handleSubmit, setFieldValue, values, errors}) => (
            <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', 'alignItems': 'center', width: '100%'}}>
              <View style={styles.rowWrapper}>
                <Text style={styles.label}>Title</Text>
                <TextInput
                  style={styles.textArea}
                  // onLayout={() => setFieldValue('title', user?.id.toString())}
                  onChangeText={handleChange('title')}
                  value={values.title}
                  // label="User ID"
                  placeholder="Title"
                />
              </View>
              <View style={styles.rowWrapper}>
                <Text style={styles.label}>Description</Text>
                <TextInput
                  style={styles.textArea}
                  onChangeText={handleChange('description')}
                  value={values.description}
                  // label="User ID"
                  placeholder="Description"
                />
              </View>
              <View style={styles.rowWrapper}>
                <Text style={styles.label}>Starting Lat</Text>
                <TextInput
                  style={styles.textArea}
                  onChangeText={handleChange('start_lat')}
                  value={values.start_lat.toString()}
                  // label="User ID"
                  placeholder="Starting Lat"
                  keyboardType="numeric"
                />
              </View>
              <View style={styles.rowWrapper}>
                <Text style={styles.label}>Starting Long</Text>
                <TextInput
                  style={styles.textArea}
                  onChangeText={handleChange('start_lon')}
                  value={values.start_lon.toString()}
                  // label="User ID"
                  placeholder="Starting Long"
                  keyboardType="numeric"
                />
              </View>
              <View style={styles.rowWrapper}>
                <Text style={styles.label}>Ending Lat</Text>
                <TextInput
                  style={styles.textArea}
                  onChangeText={handleChange('end_lat')}
                  value={values.end_lat.toString()}
                  // label="User ID"
                  placeholder="Ending Lat"
                  keyboardType="numeric"
                />
              </View>
              <View style={styles.rowWrapper}>
                <Text style={styles.label}>Ending Long</Text>
                <TextInput
                  style={styles.textArea}
                  onChangeText={handleChange('end_lon')}
                  value={values.end_lon.toString()}
                  // label="User ID"
                  placeholder="Ending Long"
                  keyboardType="numeric"
                />
              </View>
              <View style={styles.rowWrapper}>
                <Text style={styles.label}>Length</Text>
                <TextInput
                  style={styles.textArea}
                  onChangeText={handleChange('length')}
                  value={values.length.toString()}
                  // label="User ID"
                  placeholder="Length"
                  keyboardType="numeric"
                />
              </View>
              <View style={styles.rowWrapper}>
                <Text style={styles.label}>Town</Text>
                <TextInput
                  style={styles.textArea}
                  onChangeText={handleChange('town')}
                  value={values.town}
                  // label="User ID"
                  placeholder="Town"
                />
              </View>
              <View style={styles.rowWrapper}>
                <Text style={styles.label}>State</Text>
                <TextInput
                  style={styles.textArea}
                  onChangeText={handleChange('state')}
                  value={values.state}
                  // label="User ID"
                  placeholder="State (Abbr.)"
                />
              </View>
              <View style={styles.rowWrapper}>
                <Text style={styles.label}>IMBA Rating</Text>
                <TextInput
                  style={styles.textArea}
                  onChangeText={handleChange('imba_score')}
                  value={values.imba_score}
                  // label="User ID"
                  placeholder="IMBA Score"
                />
              </View>
              <View style={styles.rowWrapper}>
                <Text style={styles.label}>URL</Text>
                <TextInput
                  style={styles.textArea}
                  onChangeText={handleChange('url')}
                  value={values.url}
                  // label="User ID"
                  placeholder="URL"
                />
              </View>
              <View style={styles.rowWrapper}>
                <Text style={styles.label}>Image URL</Text>
                <TextInput
                  style={styles.textArea}
                  onChangeText={handleChange('image_url')}
                  value={values.image_url}
                  // label="User ID"
                  placeholder="Image URL"
                />
              </View>
              <View style={styles.rowWrapper}>
                {/* <Text style={styles.label}>Flow Rating</Text>
                <TextInput
                  style={styles.textArea}
                  onChangeText={handleChange('flow')}
                  value={values.flow.toString()}
                  // label="User ID"
                  placeholder="Flow"
                  keyboardType='numbers-and-punctuation'
                /> */}
              </View>
              <View style={{borderColor: '#000', borderWidth: 1, borderStyle: 'solid', borderRadius: 10, backgroundColor: '#000'}}>
                <Button title='Submit' onPress={handleSubmit as (event: GestureResponderEvent | undefined) => void} color={'#F5E960'}  />
              </View>
            </View>
          )}
        </Formik>
      </>
      )}
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
    // backgroundColor: "#3f93",
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
    width: 170, 
    borderColor: '#000', 
    borderStyle: 'solid', 
    borderWidth: 2, 
    borderRadius: 8,
    textAlign: 'center'
  }
});

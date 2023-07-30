import { StyleSheet, FlatList, TextInput, TouchableWithoutFeedback, Keyboard, Button } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { Stack, useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

export default function Review() {
  const [text, setText] = useState<string>()
  const router = useRouter()

  const DismissKeyboard = ({ children }: {children: any}) => (
    <TouchableWithoutFeedback 
    onPress={() => Keyboard.dismiss()}> 
      {children}
    </TouchableWithoutFeedback>
    );

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Write a Review" }} />
      <ScrollView keyboardShouldPersistTaps={'handled'}>
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
      </ScrollView>
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

import * as React from 'react';
import { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import tailwind from 'tailwind-rn';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  const [myName, setMyName] = useState('Istvan');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{myName}</Text>
      <View
        style={tailwind('py-2 px-5 bg-blue-500 rounded')}
        onClick={() => {
          setMyName('Simon');
        }}
      >
        <Text>Change Name</Text>
      </View>
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40, // font-size: 20;
    fontWeight: 'bold',
    color: 'red',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

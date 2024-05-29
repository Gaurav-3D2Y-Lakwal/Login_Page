import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import Navigation from './navigation';

export default function App() {
  return (
    <View style={styles.conatiner}>
      <StatusBar style="auto" />
      <Navigation/>
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner:{
    flex: 1,
    marginTop: 40,
    backgroundColor: '#ffff',
  }
});

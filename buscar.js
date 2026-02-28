import { View, Text, StyleSheet } from 'react-native';

export default function Buscar() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '300',
    color: '#333333',
    textAlign: 'center',
  },
});

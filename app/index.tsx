import { ScrollView, Text, View } from "react-native";


export default function Index() {
  return (
    <ScrollView style={{
      display: 'flex',
      gap: '2rem',
      padding: 24,
      backgroundColor: 'white'
    }}>
      <View style={{
        width: '100%',
        minHeight: 100,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#10B981',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Text style={{
          
        }}>Total Per Person</Text>

        <Text></Text>
      </View>
    </ScrollView>
  );
}

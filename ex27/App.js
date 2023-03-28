import  React  from 'react';
import { View, StyleSheet } from 'react-native';
import BotaoProps from './components/BotaoProps';

const App = () => {
  const handlePress = (msg) => {
    console.log(msg);
  };

  return (
    <View style={style.container}>
        <BotaoProps 
        label="Oi" 
        corFundo="#1ff"
        msg={"Lecau"}
        />
    </View>
  );
};

const style = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
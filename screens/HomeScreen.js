import React from "react";
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from "react-native";

export function HomeScreen({ route, navigation }) {
  function handleSettingsPress() {
    navigation.navigate("Settings");
  }

  return (
    <View style={styles.screen}>
      <Text>The Home Screen!</Text>
      <Button
        title="Go to the Settings screen!"
        onPress={handleSettingsPress}
      />
      <View style={styles.rezultat}>

          <View style={styles.resultWrapper}>
<Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/2560px-Flag_of_Croatia.svg.png"}}
style={{width:150, height:100, margin: 25}}/>
    
    <Text style={styles.rezText}>1 : </Text>
              </View>
          <View style={styles.resultWrapper}>
          
          <Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Flag_of_Russia_with_border.svg/1280px-Flag_of_Russia_with_border.svg.png"}}
style={{width:150, height:100, margin: 25}}/> 
 <Text style={styles.rezText}>0</Text> 
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  rezultat : {flexDirection: "row",},
});
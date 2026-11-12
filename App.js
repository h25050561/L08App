import {Text, View, Image, ScrollView, Alert, TouchableOpacity, Button, StyleSheet} from 'react-native';
import {FontAwesome6, Ionicons} from "@expo/vector-icons";
import {Picker} from "@react-native-picker/picker";
import React, {useState} from "react";
import stringifySafe from "react-native/Libraries/Utilities/stringifySafe";

const Intro = () => {
  return (
      <View>
        <View style={{backgroundColor: 'gray', width: '100%', height: '25'}}/>
        <View style={{backgroundColor: '#94D4FF', width: '100%', height: '50'}}>
          <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginTop: 5}}>
            Are you smarter than a 5th grader
          </Text>

        </View>
      </View>
  )
}

const Question = ({index, photo, onValueChange}) => {
  return (
      <View style={[styles.questionContainer, {margin: 20, borderColor: 'gray', borderWidth: 1}]}>
          <View style={styles.questionTitleContainer}>
              <Ionicons name="triangle" size={40} color="gray">
                  Question {index}
              </Ionicons>
          </View>
        <Image source={photo} style={[styles.imageContainer, {width: 350, height: 350}]}/>
        <Text style={{color: 'black', fontSize: 30, textAlign: 'center', marginTop: 5}}>
          What is this
        </Text>
        <Picker onValueChange={onValueChange} style={styles.pickerBox}>
          <Picker.Item label="What is this" value="What is this"/>
          <Picker.Item label="Pythagorean theorem" value="Pythagorean theorem"/>
          <Picker.Item label="Sine wave" value="Sine wave"/>
          <Picker.Item label="Kulbit" value="Kulbit"/>
          <Picker.Item label="Cobra" value="Cobra"/>
          <Picker.Item label="Circumference" value="Circumference"/>
        </Picker>
      </View>
  )
}

const App = () => {
  const [valueList, setValueList] = useState([
    {id: 1, value: ''},
    {id: 2, value: ''},
    {id: 3, value: ''},
    {id: 4, value: ''},
    {id: 5, value: ''}
  ]);

  const updateValue = (valueList, index, newValue) => {
    setValueList(
        valueList.map(value => {
          if (value.id === index) {
            return {...value, value: newValue};
          } else {
            return value;
          }
        })
    )
  }

  const checkValue = (valueList) => {
    let score = 0;

    valueList.map(value => {
      if ((value.id === 1 && value.value === "Pythagorean theorem") ||
          (value.id === 2 && value.value === "Kulbit") ||
          (value.id === 3 && value.value === "Circumference") ||
          (value.id === 4 && value.value === "Cobra") ||
          (value.id === 5 && value.value === "Sine wave")) {
        score += 1;
      }
    })

    return score;
  }


  return (
      <View>
        <Intro/>
        <ScrollView style={{height: '85%'}}>
          <Question index="1"
                    photo={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWyLUaBZg7eLM1n7AYpW7m-aZ9bpgHqJuJYh1rJIsCfA&s=10"}}
                    onValueChange={value => updateValue(valueList, 1, value)}/>
          <Question index="2"
                    photo={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT787GTirHsiPgdZLzCASDKgKhb0b_NbXh4E_gx9KsKmA&s=10"}}
                    onValueChange={value => updateValue(valueList, 2, value)}/>
          <Question index="3"
                    photo={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtfa4k2cuEHeIwwJ6S-1HKLHVv-BL5iGtzFeMWbZHbFQ&s=10"}}
                    onValueChange={value => updateValue(valueList, 3, value)}/>
          <Question index="4"
                    photo={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxhpPUb4hnPkNo3dja8ZXb2JqX9iifCkkX5deBi1Lngg&s=10"}}
                    onValueChange={value => updateValue(valueList, 4, value)}/>
          <Question index="5"
                    photo={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvcrh5JnfSS8Hsq6VKAsu3YNCUlNvbyh_mDIlnfRJ6_g&s=10"}}
                    onValueChange={value => updateValue(valueList, 5, value)}/>
        </ScrollView>
        <Button style={{width: '100%', height: '15%'}} title='SUBMIT' onPress={() => {
          const score = checkValue(valueList);
          Alert.alert("You scored " + score + " out of 5 points!");
        }}/>
      </View>
  )
}

const styles = StyleSheet.create({
    questionTitleContainer: {
        borderWidth: 1,
        borderColor: 'gray',
        margin: 20,
        alignItems: "center",
        backgroundColor: 'lightblue',
    },
    questionContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
    },
    imageContainer: {
        borderWidth: 1,
        borderColor: 'gray',
        alignItems: "center",
        justifyContent: 'center'
    },
    pickerBox: {
        borderWidth: 1,
        borderColor: 'gray',
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgray',
        marginBottom: 10,
        marginHorizontal: 10
    }

})

export default App;
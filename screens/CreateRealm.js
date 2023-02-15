// In App.js in a new project

import * as React from 'react';
import { View, Text,Button,TextInput,StyleSheet} from 'react-native';
import Realm from 'realm';



function CreateRealm ({ navigation, route }){
    let TaskSchema = new Realm({ path: 'UserDetails.realm' });
    const [name, onChangeText] = React.useState('');
    const [contact, onChangeNumber] = React.useState("");


 

      const createTask=()=>{
        let task1;
        let TaskSchema = new Realm({ path: 'UserDetails.realm' });
        var arrayValue=TaskSchema.objects('Task')
       
        if(name!=''&& contact!='')
        {
        TaskSchema.write(() => {
          task1 = TaskSchema.create("Task", {
    recordID:TaskSchema.objects('Task').length+1,
            name: name,
           contact:contact
          });
        
       
        });
       
    }
    }

        

      
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput
         style={ {  height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,}}
      placeholder="Enter Name"
        onChangeText={onChangeText}
        value={name}
      />
         <TextInput
         style={{   height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,}}
        onChangeText={onChangeNumber}
        value={contact}
        placeholder="Enter Contact Number"
        keyboardType="numeric"
      />
      <Button title='Submit' onPress={createTask}/>
      </View>
    );
  }

  const styles = StyleSheet.create({
    input: {
   
    },
  });
export default CreateRealm;
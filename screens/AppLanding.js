// In App.js in a new project

import * as React from 'react';
import { View, Text,Button} from 'react-native';

import Realm from 'realm';
function AppLanding({ navigation, route }) {
    let TaskSchema = new Realm({
        path: 'UserDetails.realm',
        schema: [
          {
            name: 'Task',
                properties: {
                    recordID:'int',
                  name: "string",
                  contact: "string",
                },
              
    primaryKey: "recordID"  
          },
        ],
      });
    const createRealm=()=>{
        navigation.navigate('CreateRealm')
    }
    const viewRealm=()=>{
    navigation.navigate('ViewRealm')    
    }
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{margin:30}}>
        <Button title='Create Task' onPress={createRealm } />
        </View>
     
        <Button title='View Task' onPress={viewRealm }/>
      </View>
    );
  }

export default AppLanding;
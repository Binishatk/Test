
import * as React from 'react';
import { View, Text,FlatList} from 'react-native';

import Realm from 'realm';
const Item = ({name,contact}) => (
    <View style={{backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,}}
    >
   
        <Text >{name}</Text>
       <Text >{contact}</Text>
    </View>
  );
function ViewRealm({ navigation, route }) {
    let TaskSchema = new Realm({ path: 'UserDetails.realm' });
    var arrayValue=TaskSchema.objects('Task')
    var Data = Object.values(arrayValue);

  
    return (
      <View style={{ flex: 1,  }}>
       
       <FlatList
        data={Data}
      
        renderItem={({item}) => <Item name={item.name} contact={item.contact} />}
        keyExtractor={(item, index) => index.toString()}
      />
      
        
      </View>
    );
  }

export default ViewRealm;
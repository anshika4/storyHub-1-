import React from 'react';
import {Text, View ,StyleSheet} from 'react-native';

export default class ReadScreen extends React.Component {
render(){
return (
<View>
<Text style={styles.header}>Story Hub</Text>
<Text style={styles.Text}>ReadStory</Text>
</View>
);
}
}

const styles = StyleSheet.create({
header: {
marginTop:15, 
backgroundColor : 'blue',  
color : 'white', 
fontSize : 50,
textAlign : 'center',
backgroundColor : '#ff1493', 
},
Text: {
marginTop:240,
justifyContent:'center',
alignItems:'center',
color : 'black',
backgroundColor:'#ffb6c1',
textAlign:'center',
fontSize :30,
},
});

import React from 'react';
import { StyleSheet, Text,TouchableOpacity, View,TextInput, } from 'react-native';

export default class WriteScreen extends React.Component{
constructor(){
super();
this.state={
TitleStory:'write Story Tittle' ,
AuthorStory:'write Author of the story' ,
Writestory: 'write story here',
}
}
render(){
return (
<View>

<Text style={styles.header}>Story Hub</Text>



<TextInput
style={styles.TitleStory}
onChangeText={(text)=>{
this.setState({
TitleStory: text
})
}}
value={this.state.TitleStory}/>

<TextInput
style={styles.AuthorStory}
onChangeText={(text)=>{
this.setState({
AuthorStory: text
})
}}
value={this.state.AuthorStory}/>   


<TextInput 
style={styles.Writestory}
onChangeText={(text)=>{ 
this.setState({
Writestory:text
})
}}
multiline={true}
value={this.state.Writestory}
/>

<TouchableOpacity style={styles.submit}>
<Text>Sumbit</Text>   
</TouchableOpacity>

</View>
)
}
}

const styles = StyleSheet.create({
submit: {
marginTop:15, 
marginLeft:80,    
height: 60,
width: 200,
alignItems: 'center',
justifyContent: 'center',
color: 'white',
borderWidth: 4,
borderColor: 'indigo',
backgroundColor: '#ff69b4',
},

Writestory: {
marginTop: 50, 
width: '80%',
alignSelf: 'center', 
height: 40, 
textAlign: 'center', 
borderWidth: 4, 
height:200,
borderColor: 'pink',
},

TitleStory: {
marginTop: 50, 
width: '80%',
alignSelf: 'center', 
height: 40, 
textAlign: 'center', 
borderWidth: 4, 
borderColor: 'pink',
},

AuthorStory: {
marginTop: 50, 
width: '80%',
alignSelf: 'center', 
height: 40, 
textAlign: 'center', 
borderWidth: 4, 
borderColor: 'pink',
},

header: {
marginTop:15, 
backgroundColor : '#ff1493',  
color : 'white', 
fontSize : 50,
textAlign : 'center'
},
});

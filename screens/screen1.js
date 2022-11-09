import { Animated, Easing, StyleSheet, Text, View } from "react-native"
import { FontAwesome5 } from '@expo/vector-icons';
import { useEffect, useRef, useState } from "react";

const Screen1  = (props)=>{

    const [location,setLocation] = useState({
        x:null,
        y:null,
    })
    const catAnim = useRef(new Animated.ValueXY({ x:0,y:0})).current;

    useEffect (()=>{
        Animated.timing(catAnim,{
            toValue :{
                x: location.x,
                y: location.y,
            },
            duration:1000,
            useNativeDriver:false,
            easing: Easing.back(1),
        }).start()
    },[location])

    const onpress = (e)=>{
        var x = e.nativeEvent.locationX
        var y = e.nativeEvent.locationY
        console.log(x,y)
        setLocation({x:x,y:y})
        console.log(location)
        
    }
    const onMove = ()=>{

    }
    const onRelease = ()=>{

    }

    return (
        <View 
            style = {styles.container}
            onStartShouldSetResponder= {()=>true}
            onMoveShouldSetResponder= { ()=> true}
            onResponderGrant = {onpress}
            onResponderMove = {onMove}
            onResponderRelease = {onRelease}
        >
            <Animated.View style = {{marginTop:catAnim.y,marginLeft:catAnim.x}}>
                <FontAwesome5 name="cat" size={44} color="black" />
            </Animated.View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal:16,
        marginVertical:16,
    },
    cat:{
    }
})
export default Screen1;
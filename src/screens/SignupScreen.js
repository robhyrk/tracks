import React, {useState} from 'react'
import {View, StyleSheet} from 'react-native'
import {Text, Input, Button} from 'react-native-elements'
import Spacer from '../components/Spacer'

const SignupScreen = ({navigation}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
    <View style={styles.container}>
        <Spacer>
            <Text h4>Sign Up for Tracker</Text>
        </Spacer>
        <Input 
            label="Email"
            autoCapitalize="none"
            autoCorrect={false} 
            value={email}
            onChangeText={setEmail}
        />
        <Spacer />
        <Input 
            label="Password"
            autoCapitalize="none"
            secureTextEntry
            autoCorrect={false}  
            value={password}
            onChangeText={setPassword}
        />
        <Spacer>
            <Button title="Sign Up" />
        </Spacer>
    </View>
    )
}

SignupScreen.navigationOptions = {
        headerShown: false
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 200
    }
})

export default SignupScreen
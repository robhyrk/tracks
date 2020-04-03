import {useState, useEffect} from 'react'
import {Accuracy, requestPermissionsAsync, watchPositionAsync} from 'expo-location'


export default (shouldTrack, callback) => {
    const [err, setErr] = useState(null)
    const [subscriber, setSubscriber] = useState(null)

    const startWatching = async () => {
        try {
            const {granted} = await requestPermissionsAsync()
            const sub = await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            }, callback)
            if (granted) {
                // Do my stuff here...
            } else {
                throw new Error('Location permission not granted');
            }
        setSubscriber(sub)
        } catch (err) {
             setErr(err);
        }
    }
    
    useEffect(()=>{
        if(shouldTrack){
            startWatching()
        } else {
            subscriber.remove()
            setSubscriber(null)
        }
    },[shouldTrack])

    return[err]
}
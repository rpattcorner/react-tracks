import { useState, useEffect } from 'react';
import {
    Accuracy,
    requestPermissionsAsync,
    watchPositionAsync
} from 'expo-location';

export default (shouldTrack, callback) => {
    console.log('should track is '+shouldTrack);
    const [err, setErr] = useState(null);
    const [subscriber, setSubscriber] = useState(null);

    const startWatching = async () => {
        try {
            const { granted } = await requestPermissionsAsync();
            if (!granted) {
                throw new Error("Location permissions refused");
            }
            console.log('about to watch')
            const sub = await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            }, callback)
            setSubscriber(sub);
        } catch (e) {
            setErr(e);
            console.log(err)
        }
    };

    useEffect(() => {
        console.log('before start watch')
        if (shouldTrack) {
            startWatching();
        } else {
            console.log("Turning off subscriber");
            subscriber.remove();
            setSubscriber(null);
        }
        console.log('after start watch')
    }, [shouldTrack]);

    return [err];
}

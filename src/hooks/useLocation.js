import { useState, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Location from "expo-location";

export function useLocation() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        try {
          let locationData = await Location.getCurrentPositionAsync({
            distanceInterval: 10,

            timeInterval: 10000,

            accuracy: Location.Accuracy.Balanced,
          });

          setLocation(locationData);

          SplashScreen.hideAsync();
        } catch (error) {
          console.log(error);
        }
      }
    };

    SplashScreen.preventAutoHideAsync();

    fetchLocation();
  }, []);
  console.log(location);
  return location;
}

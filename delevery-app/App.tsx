import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from "./Navigator/RootNavigator"
import { StyleSheet } from 'react-native';

export default function App() {
  return (
    // @ts-ignore 
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </TailwindProvider> 
  );
}

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { CategoryScreen } from './screens/CategoryScreen';
import { MealsOverviewScreen } from './screens/MealsOverviewScreen';
import { MealDetailScreen } from './screens/MealDetailScreen';
import { FavoritesScreen } from './screens/FavoritesScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator () {
  return (
    <Drawer.Navigator
      screenOptions={{
          headerStyle: {backgroundColor: "#351401"},
          headerTintColor: "white",
          sceneContainerStyle: {backgroundColor: "#3f2f25"}
        }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoryScreen}
        options={{
              title: "Meal Categories",
            }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
      />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
              headerStyle: {backgroundColor: "#351401"},
              headerTintColor: "white",
              contentStyle: {backgroundColor: "#3f2f25"}
            }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              title: "Meal Categories",
              headerShown: false
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
          />
          <Stack.Screen
            name="MealDetails"
            component={MealDetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});

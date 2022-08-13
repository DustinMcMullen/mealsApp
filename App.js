import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons'

import { CategoryScreen } from './screens/CategoryScreen';
import { MealsOverviewScreen } from './screens/MealsOverviewScreen';
import { MealDetailScreen } from './screens/MealDetailScreen';
import { FavoritesScreen } from './screens/FavoritesScreen';
// import { FavoritesContextProvider } from './store/context/favorites-context';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator () {
  return (
    <Drawer.Navigator
      screenOptions={{
          headerStyle: {backgroundColor: "#351401"},
          headerTintColor: "white",
          sceneContainerStyle: {backgroundColor: "#3f2f25"},
          drawerContentStyle: {backgroundColor: "#351401"},
          drawerInactiveTintColor: "white",
          drawerActiveTintColor: "#351401",
          drawerActiveBackgroundColor: "#e4baa1",
        }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoryScreen}
        options={{
          title: "Meal Categories",
          drawerIcon: ({color, size}) => <Ionicons name="list" color={color} size={size} />
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: "Favorites",
          drawerIcon: ({color, size}) => <Ionicons name="star" color={color} size={size} />
        }}
      />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
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
      </Provider>
      {/* </FavoritesContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});

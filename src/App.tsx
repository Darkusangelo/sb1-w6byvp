import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MapScreen } from './screens/MapScreen';
import { SearchScreen } from './screens/SearchScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { Map, Search, User } from 'lucide-react-native';
import './i18n/i18n';

const Tab = createBottomTabNavigator();
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: '#059669',
            tabBarInactiveTintColor: 'gray',
            headerStyle: {
              backgroundColor: '#059669',
            },
            headerTintColor: '#fff',
          }}
        >
          <Tab.Screen
            name="Map"
            component={MapScreen}
            options={{
              tabBarIcon: ({ color }) => <Map size={24} color={color} />,
            }}
          />
          <Tab.Screen
            name="Search"
            component={SearchScreen}
            options={{
              tabBarIcon: ({ color }) => <Search size={24} color={color} />,
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarIcon: ({ color }) => <User size={24} color={color} />,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
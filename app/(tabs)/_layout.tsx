import { Tabs } from 'expo-router';
import { Chrome as Home, Calendar, Users, Menu } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#06121d',
          borderTopColor: 'rgba(142, 198, 63, 0.2)',
          borderTopWidth: 1,
          paddingBottom: 30,
          paddingTop: 8,
          height: 90,
        },
        tabBarActiveTintColor: '#8ec63f',
        tabBarInactiveTintColor: 'rgba(255, 250, 220, 0.6)',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ size, color }) => (
            <Home size={size} color={color} strokeWidth={2} />
          ),
        }}
      />
      <Tabs.Screen
        name="agenda"
        options={{
          title: 'Agenda',
          tabBarIcon: ({ size, color }) => (
            <Calendar size={size} color={color} strokeWidth={2} />
          ),
        }}
      />
      <Tabs.Screen
        name="speakers"
        options={{
          title: 'Speakers',
          tabBarIcon: ({ size, color }) => (
            <Users size={size} color={color} strokeWidth={2} />
          ),
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: 'More',
          tabBarIcon: ({ size, color }) => (
            <Menu size={size} color={color} strokeWidth={2} />
          ),
        }}
      />
    </Tabs>
  );
}
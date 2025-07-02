import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Info, CircleHelp as HelpCircle, Mail, MapPin, Heart, Settings, Users, Calendar, ChevronRight } from 'lucide-react-native';

const menuItems = [
  {
    id: 1,
    title: 'About Event',
    description: 'Learn about TechEvent 2025',
    icon: Info,
    route: '/about',
    color: '#8ec63f',
  },
  {
    id: 2,
    title: 'Venue & Maps',
    description: 'Find your way around',
    icon: MapPin,
    route: '/venue',
    color: '#8ec63f',
  },
  {
    id: 3,
    title: 'My Favorites',
    description: 'Saved sessions and speakers',
    icon: Heart,
    route: '/favorites',
    color: '#8ec63f',
  },
  {
    id: 4,
    title: 'Networking',
    description: 'Connect with attendees',
    icon: Users,
    route: '/networking',
    color: '#8ec63f',
  },
  {
    id: 5,
    title: 'FAQ',
    description: 'Frequently asked questions',
    icon: HelpCircle,
    route: '/faq',
    color: '#8ec63f',
  },
  {
    id: 6,
    title: 'Contact',
    description: 'Get in touch with organizers',
    icon: Mail,
    route: '/contact',
    color: '#8ec63f',
  },
  {
    id: 7,
    title: 'Settings',
    description: 'App preferences',
    icon: Settings,
    route: '/settings',
    color: '#8ec63f',
  },
];

const quickStats = [
  { label: 'Sessions', value: '50+', icon: Calendar },
  { label: 'Speakers', value: '100+', icon: Users },
  { label: 'Days', value: '3', icon: Info },
  { label: 'Attendees', value: '2000+', icon: Users },
];

export default function MoreScreen() {
  const router = useRouter();

  const handleMenuPress = (route: string) => {
    // For now, we'll just log the route since not all screens are implemented
    console.log('Navigate to:', route);
    
    // Navigate to implemented screens
    if (route === '/faq') {
      router.push('/faq' as any);
    } else if (route === '/contact') {
      router.push('/contact' as any);
    } else if (route === '/about') {
      router.push('/about' as any);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>More</Text>
          <Text style={styles.headerSubtitle}>Additional features and information</Text>
        </View>

        {/* Quick Stats */}
        <View style={styles.statsContainer}>
          <Text style={styles.sectionTitle}>Event Overview</Text>
          <View style={styles.statsGrid}>
            {quickStats.map((stat, index) => (
              <View key={index} style={styles.statCard}>
                <stat.icon size={24} color="#8ec63f" strokeWidth={2} />
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          <Text style={styles.sectionTitle}>Quick Access</Text>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.menuItem}
              onPress={() => handleMenuPress(item.route)}
            >
              <View style={styles.menuItemContent}>
                <View style={styles.menuItemLeft}>
                  <View style={[styles.iconContainer, { backgroundColor: `${item.color}20` }]}>
                    <item.icon size={24} color={item.color} strokeWidth={2} />
                  </View>
                  <View style={styles.menuItemText}>
                    <Text style={styles.menuItemTitle}>{item.title}</Text>
                    <Text style={styles.menuItemDescription}>{item.description}</Text>
                  </View>
                </View>
                <ChevronRight size={20} color="rgba(255, 250, 220, 0.4)" strokeWidth={2} />
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Event Info */}
        <View style={styles.eventInfoContainer}>
          <Text style={styles.sectionTitle}>Event Information</Text>
          <View style={styles.eventInfoCard}>
            <Text style={styles.eventInfoTitle}>TechEvent 2025</Text>
            <Text style={styles.eventInfoSubtitle}>Innovation Summit</Text>
            <Text style={styles.eventInfoDetails}>March 15-17, 2025</Text>
            <Text style={styles.eventInfoDetails}>San Francisco Convention Center</Text>
            <Text style={styles.eventInfoVersion}>App Version 1.0.0</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#06121d',
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 24,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFADC',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 250, 220, 0.8)',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFADC',
    marginBottom: 16,
    paddingHorizontal: 24,
  },
  statsContainer: {
    marginBottom: 32,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  statCard: {
    width: '48%',
    backgroundColor: 'rgba(255, 250, 220, 0.05)',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(142, 198, 63, 0.2)',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFADC',
    marginTop: 12,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: 'rgba(255, 250, 220, 0.8)',
    textAlign: 'center',
  },
  menuContainer: {
    marginBottom: 32,
  },
  menuItem: {
    backgroundColor: 'rgba(255, 250, 220, 0.05)',
    borderRadius: 16,
    marginHorizontal: 24,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(142, 198, 63, 0.2)',
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  menuItemText: {
    flex: 1,
  },
  menuItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFADC',
    marginBottom: 4,
  },
  menuItemDescription: {
    fontSize: 14,
    color: 'rgba(255, 250, 220, 0.6)',
  },
  eventInfoContainer: {
    marginBottom: 32,
  },
  eventInfoCard: {
    backgroundColor: 'rgba(255, 250, 220, 0.05)',
    borderRadius: 16,
    padding: 24,
    marginHorizontal: 24,
    borderWidth: 1,
    borderColor: 'rgba(142, 198, 63, 0.2)',
    alignItems: 'center',
  },
  eventInfoTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFADC',
    marginBottom: 4,
  },
  eventInfoSubtitle: {
    fontSize: 18,
    color: '#8ec63f',
    marginBottom: 16,
  },
  eventInfoDetails: {
    fontSize: 16,
    color: 'rgba(255, 250, 220, 0.8)',
    marginBottom: 8,
    textAlign: 'center',
  },
  eventInfoVersion: {
    fontSize: 12,
    color: 'rgba(255, 250, 220, 0.4)',
    marginTop: 16,
  },
});
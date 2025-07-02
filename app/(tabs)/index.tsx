import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import {
  Calendar,
  Users,
  MapPin,
  Clock,
  Star,
  ChevronRight,
} from 'lucide-react-native';

const { width } = Dimensions.get('window');
const cardWidth = (width - 72) / 2; // Adjusted for proper two-column layout with gap

const quickActions = [
  { id: 1, title: 'Event Info', icon: Calendar, route: '/about' },
  { id: 2, title: 'Speakers', icon: Users, route: '/speakers' },
  { id: 3, title: 'Venue', icon: MapPin, route: '/venue' },
  { id: 4, title: 'Schedule', icon: Clock, route: '/agenda' },
];

const upcomingSessions = [
  {
    id: 1,
    title: 'AI in Modern Development',
    time: '10:00 AM',
    speaker: 'Dr. Sarah Johnson',
    room: 'Main Hall',
  },
  {
    id: 2,
    title: 'Future of Cloud Computing',
    time: '2:00 PM',
    speaker: 'Mike Chen',
    room: 'Room A',
  },
  {
    id: 3,
    title: 'Mobile Development Trends',
    time: '4:30 PM',
    speaker: 'Alex Rodriguez',
    room: 'Room B',
  },
];

export default function HomeScreen() {
  const router = useRouter();

  const handleQuickAction = (route: string) => {
    if (route === '/about') {
      router.push('/about');
    } else if (route === '/speakers') {
      router.push('/speakers');
    } else if (route === '/agenda') {
      router.push('/agenda');
    } else {
      console.log('Navigate to:', route);
    }
  };

  const handleSessionPress = (sessionId: number) => {
    // Navigate to agenda page and potentially scroll to specific session
    router.push('/agenda');
  };

  const handleViewAllSessions = () => {
    router.push('/agenda');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Welcome to</Text>
          <Text style={styles.eventTitle}>TechEvent 2025</Text>
          <Text style={styles.eventSubtitle}>Innovation Summit • March 15-17</Text>
        </View>

        {/* Hero Image */}
        <View style={styles.heroContainer}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800',
            }}
            style={styles.heroImage}
          />
          <View style={styles.heroOverlay}>
            <Text style={styles.heroTitle}>3 Days of Innovation</Text>
            <Text style={styles.heroSubtitle}>100+ Speakers • 50+ Sessions</Text>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Access</Text>
          <View style={styles.quickActionsGrid}>
            {quickActions.map((action) => (
              <TouchableOpacity
                key={action.id}
                style={styles.quickActionCard}
                onPress={() => handleQuickAction(action.route)}
              >
                <action.icon size={32} color="#8ec63f" strokeWidth={1.5} />
                <Text style={styles.quickActionText}>{action.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Event Highlights */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Event Highlights</Text>
          <View style={styles.highlightsContainer}>
            <View style={styles.highlightCard}>
              <Star size={24} color="#8ec63f" strokeWidth={2} />
              <Text style={styles.highlightTitle}>100+ Expert Speakers</Text>
              <Text style={styles.highlightText}>
                Industry leaders sharing insights
              </Text>
            </View>
            <View style={styles.highlightCard}>
              <Users size={24} color="#8ec63f" strokeWidth={2} />
              <Text style={styles.highlightTitle}>Networking Sessions</Text>
              <Text style={styles.highlightText}>
                Connect with like-minded professionals
              </Text>
            </View>
          </View>
        </View>

        {/* Upcoming Sessions */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Today's Sessions</Text>
            <TouchableOpacity
              onPress={handleViewAllSessions}
              style={styles.viewAllButton}
            >
              <Text style={styles.viewAllText}>View All</Text>
              <ChevronRight size={16} color="#8ec63f" strokeWidth={2} />
            </TouchableOpacity>
          </View>
          {upcomingSessions.map((session) => (
            <TouchableOpacity 
              key={session.id} 
              style={styles.sessionCard}
              onPress={() => handleSessionPress(session.id)}
            >
              <View style={styles.sessionTimeContainer}>
                <Text style={styles.timeText}>{session.time}</Text>
              </View>
              <View style={styles.sessionInfo}>
                <Text style={styles.sessionTitle}>{session.title}</Text>
                <Text style={styles.sessionSpeaker}>{session.speaker}</Text>
                <Text style={styles.sessionRoom}>{session.room}</Text>
              </View>
              <View style={styles.sessionArrow}>
                <ChevronRight size={20} color="rgba(255, 250, 220, 0.6)" strokeWidth={2} />
              </View>
            </TouchableOpacity>
          ))}
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
  welcomeText: {
    fontSize: 16,
    color: 'rgba(255, 250, 220, 0.8)',
    marginBottom: 4,
  },
  eventTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFADC',
    marginBottom: 4,
  },
  eventSubtitle: {
    fontSize: 16,
    color: '#8ec63f',
  },
  heroContainer: {
    marginHorizontal: 24,
    marginBottom: 32,
    borderRadius: 16,
    overflow: 'hidden',
  },
  heroImage: {
    width: '100%',
    height: 200,
  },
  heroOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(6, 18, 29, 0.8)',
    padding: 20,
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFADC',
    marginBottom: 4,
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#8ec63f',
  },
  section: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFADC',
    marginBottom: 16,
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  viewAllText: {
    fontSize: 16,
    color: '#8ec63f',
    marginRight: 8,
    fontWeight: '500',
  },
  quickActionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  quickActionCard: {
    width: cardWidth,
    backgroundColor: 'rgba(255, 250, 220, 0.05)',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(142, 198, 63, 0.2)',
  },
  quickActionText: {
    fontSize: 14,
    color: '#FFFADC',
    textAlign: 'center',
    marginTop: 12,
    fontWeight: '500',
  },
  highlightsContainer: {
    gap: 16,
  },
  highlightCard: {
    backgroundColor: 'rgba(255, 250, 220, 0.05)',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(142, 198, 63, 0.2)',
  },
  highlightTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFADC',
    marginTop: 12,
    marginBottom: 8,
  },
  highlightText: {
    fontSize: 14,
    color: 'rgba(255, 250, 220, 0.8)',
    lineHeight: 20,
  },
  sessionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 250, 220, 0.05)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(142, 198, 63, 0.2)',
  },
  sessionTimeContainer: {
    width: 80,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  timeText: {
    fontSize: 14,
    color: '#8ec63f',
    fontWeight: 'bold',
  },
  sessionInfo: {
    flex: 1,
    marginLeft: 20,
    alignItems: 'flex-start',
  },
  sessionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFADC',
    marginBottom: 4,
    textAlign: 'left',
  },
  sessionSpeaker: {
    fontSize: 14,
    color: 'rgba(255, 250, 220, 0.8)',
    marginBottom: 2,
    textAlign: 'left',
  },
  sessionRoom: {
    fontSize: 12,
    color: '#8ec63f',
    textAlign: 'left',
  },
  sessionArrow: {
    paddingLeft: 16,
  },
});
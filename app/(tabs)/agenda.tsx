import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Calendar,
  Clock,
  MapPin,
  Search,
  Filter,
  Heart,
  ChevronRight,
} from 'lucide-react-native';

const agendaData = [
  {
    date: 'March 15, 2025',
    sessions: [
      {
        id: 1,
        time: '09:00 AM',
        title: 'Opening Keynote: The Future is Now',
        speaker: 'Dr. Sarah Johnson',
        room: 'Main Hall',
        duration: '1h',
        description: 'Exploring the latest trends in technology and innovation.',
        category: 'Keynote',
        isFavorite: false,
      },
      {
        id: 2,
        time: '10:30 AM',
        title: 'AI in Modern Development',
        speaker: 'Mike Chen',
        room: 'Room A',
        duration: '45min',
        description: 'How artificial intelligence is transforming software development.',
        category: 'Technical',
        isFavorite: true,
      },
      {
        id: 3,
        time: '12:00 PM',
        title: 'Networking Lunch',
        speaker: null,
        room: 'Exhibition Hall',
        duration: '1h 30min',
        description: 'Connect with fellow attendees and speakers.',
        category: 'Networking',
        isFavorite: false,
      },
      {
        id: 4,
        time: '02:00 PM',
        title: 'Cloud Computing Best Practices',
        speaker: 'Alex Rodriguez',
        room: 'Room B',
        duration: '45min',
        description: 'Learn about modern cloud architecture and deployment strategies.',
        category: 'Technical',
        isFavorite: false,
      },
    ],
  },
  {
    date: 'March 16, 2025',
    sessions: [
      {
        id: 5,
        time: '09:00 AM',
        title: 'Mobile Development Trends',
        speaker: 'Emma Thompson',
        room: 'Room A',
        duration: '45min',
        description: 'The latest in mobile app development and user experience.',
        category: 'Technical',
        isFavorite: true,
      },
      {
        id: 6,
        time: '10:30 AM',
        title: 'Panel: Industry Leaders',
        speaker: 'Various Speakers',
        room: 'Main Hall',
        duration: '1h',
        description: 'A discussion with top industry leaders about the future.',
        category: 'Panel',
        isFavorite: false,
      },
    ],
  },
];

const categories = ['All', 'Keynote', 'Technical', 'Panel', 'Networking'];

export default function AgendaScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [favorites, setFavorites] = useState<number[]>([2, 5]);

  const toggleFavorite = (sessionId: number) => {
    setFavorites(prev =>
      prev.includes(sessionId)
        ? prev.filter(id => id !== sessionId)
        : [...prev, sessionId]
    );
  };

  const filteredData = agendaData.map(day => ({
    ...day,
    sessions: day.sessions.filter(session => {
      const matchesSearch = session.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (session.speaker && session.speaker.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || session.category === selectedCategory;
      return matchesSearch && matchesCategory;
    }),
  })).filter(day => day.sessions.length > 0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Event Agenda</Text>
        
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Search size={20} color="rgba(255, 250, 220, 0.6)" strokeWidth={2} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search sessions or speakers..."
            placeholderTextColor="rgba(255, 250, 220, 0.6)"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Category Filter */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryContainer}
          contentContainerStyle={styles.categoryContent}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryButton,
                selectedCategory === category && styles.categoryButtonActive,
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === category && styles.categoryTextActive,
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        {filteredData.map((day, dayIndex) => (
          <View key={dayIndex} style={styles.daySection}>
            <View style={styles.dayHeader}>
              <Calendar size={20} color="#8ec63f" strokeWidth={2} />
              <Text style={styles.dayTitle}>{day.date}</Text>
            </View>

            {day.sessions.map((session) => (
              <TouchableOpacity key={session.id} style={styles.sessionCard}>
                <View style={styles.sessionHeader}>
                  <View style={styles.timeContainer}>
                    <Clock size={16} color="#8ec63f" strokeWidth={2} />
                    <Text style={styles.sessionTime}>{session.time}</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => toggleFavorite(session.id)}
                    style={styles.favoriteButton}
                  >
                    <Heart
                      size={20}
                      color={favorites.includes(session.id) ? "#8ec63f" : "rgba(255, 250, 220, 0.4)"}
                      fill={favorites.includes(session.id) ? "#8ec63f" : "transparent"}
                      strokeWidth={2}
                    />
                  </TouchableOpacity>
                </View>

                <Text style={styles.sessionTitle}>{session.title}</Text>
                
                {session.speaker && (
                  <Text style={styles.sessionSpeaker}>{session.speaker}</Text>
                )}

                <Text style={styles.sessionDescription}>{session.description}</Text>

                <View style={styles.sessionFooter}>
                  <View style={styles.sessionDetails}>
                    <View style={styles.detailItem}>
                      <MapPin size={14} color="#8ec63f" strokeWidth={2} />
                      <Text style={styles.detailText}>{session.room}</Text>
                    </View>
                    <View style={styles.detailItem}>
                      <Clock size={14} color="#8ec63f" strokeWidth={2} />
                      <Text style={styles.detailText}>{session.duration}</Text>
                    </View>
                  </View>
                  <View style={styles.categoryTag}>
                    <Text style={styles.categoryTagText}>{session.category}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ))}

        {filteredData.length === 0 && (
          <View style={styles.emptyState}>
            <Search size={48} color="rgba(255, 250, 220, 0.3)" strokeWidth={1} />
            <Text style={styles.emptyStateTitle}>No sessions found</Text>
            <Text style={styles.emptyStateText}>
              Try adjusting your search or filter criteria
            </Text>
          </View>
        )}
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
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 250, 220, 0.05)',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(142, 198, 63, 0.2)',
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: '#FFFADC',
  },
  categoryContainer: {
    marginBottom: 8,
  },
  categoryContent: {
    paddingRight: 24,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'rgba(255, 250, 220, 0.05)',
    borderRadius: 20,
    marginRight: 12,
    borderWidth: 1,
    borderColor: 'rgba(142, 198, 63, 0.2)',
  },
  categoryButtonActive: {
    backgroundColor: '#8ec63f',
    borderColor: '#8ec63f',
  },
  categoryText: {
    fontSize: 14,
    color: 'rgba(255, 250, 220, 0.8)',
    fontWeight: '500',
  },
  categoryTextActive: {
    color: '#06121d',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  daySection: {
    marginBottom: 32,
  },
  dayHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  dayTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFADC',
    marginLeft: 8,
  },
  sessionCard: {
    backgroundColor: 'rgba(255, 250, 220, 0.05)',
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 24,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(142, 198, 63, 0.2)',
  },
  sessionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sessionTime: {
    fontSize: 14,
    color: '#8ec63f',
    fontWeight: 'bold',
    marginLeft: 6,
  },
  favoriteButton: {
    padding: 4,
  },
  sessionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFADC',
    marginBottom: 8,
    lineHeight: 24,
  },
  sessionSpeaker: {
    fontSize: 16,
    color: '#8ec63f',
    marginBottom: 8,
    fontWeight: '500',
  },
  sessionDescription: {
    fontSize: 14,
    color: 'rgba(255, 250, 220, 0.8)',
    lineHeight: 20,
    marginBottom: 16,
  },
  sessionFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sessionDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  detailText: {
    fontSize: 12,
    color: 'rgba(255, 250, 220, 0.8)',
    marginLeft: 4,
  },
  categoryTag: {
    backgroundColor: 'rgba(142, 198, 63, 0.2)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  categoryTagText: {
    fontSize: 12,
    color: '#8ec63f',
    fontWeight: '500',
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 80,
    paddingHorizontal: 24,
  },
  emptyStateTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFADC',
    marginTop: 16,
    marginBottom: 8,
  },
  emptyStateText: {
    fontSize: 16,
    color: 'rgba(255, 250, 220, 0.6)',
    textAlign: 'center',
    lineHeight: 22,
  },
});
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Users,
  Clock,
  Target,
  Award,
  Lightbulb,
  Globe,
} from 'lucide-react-native';

const eventHighlights = [
  {
    icon: Users,
    title: '100+ Expert Speakers',
    description: 'Industry leaders and innovators from around the world',
    color: '#8ec63f',
  },
  {
    icon: Calendar,
    title: '50+ Sessions',
    description: 'Keynotes, workshops, panels, and networking events',
    color: '#8ec63f',
  },
  {
    icon: Target,
    title: 'Hands-on Workshops',
    description: 'Interactive sessions with practical takeaways',
    color: '#8ec63f',
  },
  {
    icon: Globe,
    title: 'Global Networking',
    description: 'Connect with 2000+ professionals from 50+ countries',
    color: '#8ec63f',
  },
];

const eventStats = [
  { number: '2000+', label: 'Attendees' },
  { number: '100+', label: 'Speakers' },
  { number: '50+', label: 'Sessions' },
  { number: '3', label: 'Days' },
];

export default function AboutScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <ArrowLeft size={24} color="#FFFADC" strokeWidth={2} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>About Event</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
            }}
            style={styles.heroImage}
          />
          <View style={styles.heroContent}>
            <Text style={styles.eventTitle}>TechEvent 2025</Text>
            <Text style={styles.eventSubtitle}>Innovation Summit</Text>
            <Text style={styles.eventTagline}>
              Where Technology Meets Innovation
            </Text>
          </View>
        </View>

        {/* Event Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Event Details</Text>
          <View style={styles.detailsGrid}>
            <View style={styles.detailCard}>
              <Calendar size={24} color="#8ec63f" strokeWidth={2} />
              <Text style={styles.detailTitle}>Date</Text>
              <Text style={styles.detailText}>March 15-17, 2025</Text>
            </View>
            <View style={styles.detailCard}>
              <MapPin size={24} color="#8ec63f" strokeWidth={2} />
              <Text style={styles.detailTitle}>Venue</Text>
              <Text style={styles.detailText}>San Francisco Convention Center</Text>
            </View>
            <View style={styles.detailCard}>
              <Clock size={24} color="#8ec63f" strokeWidth={2} />
              <Text style={styles.detailTitle}>Time</Text>
              <Text style={styles.detailText}>9:00 AM - 6:00 PM</Text>
            </View>
            <View style={styles.detailCard}>
              <Users size={24} color="#8ec63f" strokeWidth={2} />
              <Text style={styles.detailTitle}>Capacity</Text>
              <Text style={styles.detailText}>2000+ Attendees</Text>
            </View>
          </View>
        </View>

        {/* About Description */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About TechEvent 2025</Text>
          <Text style={styles.description}>
            TechEvent 2025 is the premier technology conference that brings together industry leaders, 
            innovators, developers, and entrepreneurs from around the globe. Over three action-packed days, 
            attendees will explore the latest trends in technology, participate in hands-on workshops, 
            and network with like-minded professionals.
          </Text>
          <Text style={styles.description}>
            Our mission is to foster innovation, share knowledge, and create meaningful connections 
            that drive the future of technology. Whether you're a seasoned professional or just 
            starting your journey in tech, TechEvent 2025 offers something valuable for everyone.
          </Text>
        </View>

        {/* Event Highlights */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>What to Expect</Text>
          {eventHighlights.map((highlight, index) => (
            <View key={index} style={styles.highlightCard}>
              <View style={styles.highlightIcon}>
                <highlight.icon size={24} color={highlight.color} strokeWidth={2} />
              </View>
              <View style={styles.highlightContent}>
                <Text style={styles.highlightTitle}>{highlight.title}</Text>
                <Text style={styles.highlightDescription}>{highlight.description}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Statistics */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>By the Numbers</Text>
          <View style={styles.statsContainer}>
            {eventStats.map((stat, index) => (
              <View key={index} style={styles.statCard}>
                <Text style={styles.statNumber}>{stat.number}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Vision */}
        <View style={styles.section}>
          <View style={styles.visionCard}>
            <Lightbulb size={32} color="#8ec63f" strokeWidth={2} />
            <Text style={styles.visionTitle}>Our Vision</Text>
            <Text style={styles.visionText}>
              To create a world where technology empowers everyone to innovate, 
              collaborate, and build a better future together.
            </Text>
          </View>
        </View>

        {/* Awards & Recognition */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Awards & Recognition</Text>
          <View style={styles.awardsContainer}>
            <View style={styles.awardCard}>
              <Award size={24} color="#8ec63f" strokeWidth={2} />
              <Text style={styles.awardTitle}>Best Tech Conference 2024</Text>
              <Text style={styles.awardOrg}>Tech Events Weekly</Text>
            </View>
            <View style={styles.awardCard}>
              <Award size={24} color="#8ec63f" strokeWidth={2} />
              <Text style={styles.awardTitle}>Innovation Award</Text>
              <Text style={styles.awardOrg}>Industry Leaders Association</Text>
            </View>
          </View>
        </View>

        {/* Call to Action */}
        <View style={styles.section}>
          <View style={styles.ctaCard}>
            <Text style={styles.ctaTitle}>Ready to Join Us?</Text>
            <Text style={styles.ctaText}>
              Don't miss out on this incredible opportunity to learn, network, 
              and be part of the future of technology.
            </Text>
            <TouchableOpacity style={styles.ctaButton}>
              <Text style={styles.ctaButtonText}>Register Now</Text>
            </TouchableOpacity>
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
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 24,
  },
  backButton: {
    marginRight: 16,
    padding: 4,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFADC',
  },
  content: {
    flex: 1,
  },
  heroSection: {
    marginBottom: 32,
  },
  heroImage: {
    width: '100%',
    height: 200,
  },
  heroContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(6, 18, 29, 0.9)',
    padding: 24,
  },
  eventTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFADC',
    marginBottom: 4,
  },
  eventSubtitle: {
    fontSize: 20,
    color: '#8ec63f',
    marginBottom: 8,
  },
  eventTagline: {
    fontSize: 16,
    color: 'rgba(255, 250, 220, 0.8)',
    fontStyle: 'italic',
  },
  section: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFADC',
    marginBottom: 20,
  },
  detailsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  detailCard: {
    width: '48%',
    backgroundColor: 'rgba(255, 250, 220, 0.05)',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(142, 198, 63, 0.2)',
  },
  detailTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFADC',
    marginTop: 12,
    marginBottom: 4,
  },
  detailText: {
    fontSize: 12,
    color: 'rgba(255, 250, 220, 0.8)',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: 'rgba(255, 250, 220, 0.8)',
    lineHeight: 24,
    marginBottom: 16,
  },
  highlightCard: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 250, 220, 0.05)',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(142, 198, 63, 0.2)',
  },
  highlightIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: 'rgba(142, 198, 63, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  highlightContent: {
    flex: 1,
  },
  highlightTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFADC',
    marginBottom: 8,
  },
  highlightDescription: {
    fontSize: 14,
    color: 'rgba(255, 250, 220, 0.8)',
    lineHeight: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
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
  statNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#8ec63f',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: 'rgba(255, 250, 220, 0.8)',
    textAlign: 'center',
  },
  visionCard: {
    backgroundColor: 'rgba(142, 198, 63, 0.1)',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(142, 198, 63, 0.3)',
  },
  visionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFADC',
    marginTop: 16,
    marginBottom: 12,
    textAlign: 'center',
  },
  visionText: {
    fontSize: 16,
    color: 'rgba(255, 250, 220, 0.8)',
    textAlign: 'center',
    lineHeight: 24,
  },
  awardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  awardCard: {
    width: '48%',
    backgroundColor: 'rgba(255, 250, 220, 0.05)',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(142, 198, 63, 0.2)',
  },
  awardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFADC',
    marginTop: 12,
    marginBottom: 4,
    textAlign: 'center',
  },
  awardOrg: {
    fontSize: 12,
    color: 'rgba(255, 250, 220, 0.8)',
    textAlign: 'center',
  },
  ctaCard: {
    backgroundColor: 'rgba(255, 250, 220, 0.05)',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(142, 198, 63, 0.2)',
  },
  ctaTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFADC',
    marginBottom: 12,
    textAlign: 'center',
  },
  ctaText: {
    fontSize: 16,
    color: 'rgba(255, 250, 220, 0.8)',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 24,
  },
  ctaButton: {
    backgroundColor: '#8ec63f',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 12,
  },
  ctaButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#06121d',
  },
});
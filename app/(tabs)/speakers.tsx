import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  X,
  MapPin,
  Calendar,
  ExternalLink,
  Linkedin,
  Twitter,
} from 'lucide-react-native';

const { width } = Dimensions.get('window');
const cardWidth = (width - 72) / 2;

const speakersData = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    title: 'Chief Technology Officer',
    company: 'TechCorp',
    image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Dr. Sarah Johnson is a renowned technology leader with over 15 years of experience in artificial intelligence and machine learning. She has led multiple breakthrough projects in AI research and currently serves as CTO at TechCorp, where she oversees the development of cutting-edge AI solutions.',
    expertise: ['Artificial Intelligence', 'Machine Learning', 'Deep Learning', 'Neural Networks'],
    sessions: [
      {
        title: 'Opening Keynote: The Future is Now',
        time: '09:00 AM',
        date: 'March 15',
        room: 'Main Hall',
      },
    ],
    social: {
      linkedin: 'sarah-johnson-tech',
      twitter: 'sarahj_tech',
    },
  },
  {
    id: 2,
    name: 'Mike Chen',
    title: 'Senior Software Engineer',
    company: 'InnovateLab',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Mike Chen is a passionate software engineer specializing in modern web development and cloud architecture. With a background in full-stack development, he has contributed to numerous open-source projects and is known for his expertise in React, Node.js, and cloud computing.',
    expertise: ['Full-Stack Development', 'Cloud Computing', 'React', 'Node.js'],
    sessions: [
      {
        title: 'AI in Modern Development',
        time: '10:30 AM',
        date: 'March 15',
        room: 'Room A',
      },
    ],
    social: {
      linkedin: 'mike-chen-dev',
      twitter: 'mikechen_dev',
    },
  },
  {
    id: 3,
    name: 'Alex Rodriguez',
    title: 'Cloud Solutions Architect',
    company: 'CloudFirst',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Alex Rodriguez is a cloud solutions architect with extensive experience in designing and implementing scalable cloud infrastructures. He has helped dozens of companies migrate to the cloud and optimize their operations for better performance and cost-efficiency.',
    expertise: ['Cloud Architecture', 'AWS', 'Azure', 'DevOps', 'Kubernetes'],
    sessions: [
      {
        title: 'Cloud Computing Best Practices',
        time: '02:00 PM',
        date: 'March 15',
        room: 'Room B',
      },
    ],
    social: {
      linkedin: 'alex-rodriguez-cloud',
      twitter: 'alexr_cloud',
    },
  },
  {
    id: 4,
    name: 'Emma Thompson',
    title: 'Mobile App Developer',
    company: 'MobileFirst Studio',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Emma Thompson is a mobile app developer who has created award-winning mobile applications for both iOS and Android platforms. She specializes in React Native development and has a keen eye for user experience design.',
    expertise: ['React Native', 'iOS Development', 'Android Development', 'UX Design'],
    sessions: [
      {
        title: 'Mobile Development Trends',
        time: '09:00 AM',
        date: 'March 16',
        room: 'Room A',
      },
    ],
    social: {
      linkedin: 'emma-thompson-mobile',
      twitter: 'emma_mobile',
    },
  },
  {
    id: 5,
    name: 'David Kim',
    title: 'Data Scientist',
    company: 'DataInsights',
    image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'David Kim is a data scientist with a passion for extracting meaningful insights from complex datasets. He has worked on various machine learning projects and is an expert in statistical analysis and data visualization.',
    expertise: ['Data Science', 'Machine Learning', 'Python', 'Statistics'],
    sessions: [
      {
        title: 'Data-Driven Decision Making',
        time: '11:30 AM',
        date: 'March 16',
        room: 'Room C',
      },
    ],
    social: {
      linkedin: 'david-kim-data',
      twitter: 'davidk_data',
    },
  },
  {
    id: 6,
    name: 'Lisa Park',
    title: 'UX Design Director',
    company: 'DesignStudio',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Lisa Park is a UX design director known for creating intuitive and beautiful user experiences. She has led design teams at multiple startups and established companies, focusing on user-centered design principles.',
    expertise: ['UX Design', 'Product Design', 'User Research', 'Design Systems'],
    sessions: [
      {
        title: 'The Future of User Experience',
        time: '03:30 PM',
        date: 'March 16',
        room: 'Room B',
      },
    ],
    social: {
      linkedin: 'lisa-park-ux',
      twitter: 'lisap_design',
    },
  },
];

export default function SpeakersScreen() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<typeof speakersData[0] | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openSpeakerModal = (speaker: typeof speakersData[0]) => {
    setSelectedSpeaker(speaker);
    setModalVisible(true);
  };

  const closeSpeakerModal = () => {
    setModalVisible(false);
    setSelectedSpeaker(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Speakers</Text>
        <Text style={styles.headerSubtitle}>Meet our industry experts</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        <View style={styles.speakersGrid}>
          {speakersData.map((speaker) => (
            <TouchableOpacity
              key={speaker.id}
              style={styles.speakerCard}
              onPress={() => openSpeakerModal(speaker)}
            >
              <Image source={{ uri: speaker.image }} style={styles.speakerImage} />
              <View style={styles.speakerInfo}>
                <Text style={styles.speakerName}>{speaker.name}</Text>
                <Text style={styles.speakerTitle}>{speaker.title}</Text>
                <Text style={styles.speakerCompany}>{speaker.company}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Speaker Detail Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeSpeakerModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeButton} onPress={closeSpeakerModal}>
              <X size={24} color="#FFFADC" strokeWidth={2} />
            </TouchableOpacity>

            <ScrollView showsVerticalScrollIndicator={false}>
              {selectedSpeaker && (
                <>
                  <View style={styles.modalHeader}>
                    <Image
                      source={{ uri: selectedSpeaker.image }}
                      style={styles.modalSpeakerImage}
                    />
                    <Text style={styles.modalSpeakerName}>{selectedSpeaker.name}</Text>
                    <Text style={styles.modalSpeakerTitle}>{selectedSpeaker.title}</Text>
                    <Text style={styles.modalSpeakerCompany}>{selectedSpeaker.company}</Text>
                  </View>

                  <View style={styles.modalSection}>
                    <Text style={styles.modalSectionTitle}>About</Text>
                    <Text style={styles.modalBio}>{selectedSpeaker.bio}</Text>
                  </View>

                  <View style={styles.modalSection}>
                    <Text style={styles.modalSectionTitle}>Expertise</Text>
                    <View style={styles.expertiseContainer}>
                      {selectedSpeaker.expertise.map((skill, index) => (
                        <View key={index} style={styles.expertiseTag}>
                          <Text style={styles.expertiseText}>{skill}</Text>
                        </View>
                      ))}
                    </View>
                  </View>

                  <View style={styles.modalSection}>
                    <Text style={styles.modalSectionTitle}>Sessions</Text>
                    {selectedSpeaker.sessions.map((session, index) => (
                      <View key={index} style={styles.sessionItem}>
                        <Text style={styles.sessionTitle}>{session.title}</Text>
                        <View style={styles.sessionDetails}>
                          <View style={styles.sessionDetail}>
                            <Calendar size={16} color="#8ec63f" strokeWidth={2} />
                            <Text style={styles.sessionDetailText}>
                              {session.date} at {session.time}
                            </Text>
                          </View>
                          <View style={styles.sessionDetail}>
                            <MapPin size={16} color="#8ec63f" strokeWidth={2} />
                            <Text style={styles.sessionDetailText}>{session.room}</Text>
                          </View>
                        </View>
                      </View>
                    ))}
                  </View>

                  <View style={styles.modalSection}>
                    <Text style={styles.modalSectionTitle}>Connect</Text>
                    <View style={styles.socialContainer}>
                      <TouchableOpacity style={styles.socialButton}>
                        <Linkedin size={20} color="#8ec63f" strokeWidth={2} />
                        <Text style={styles.socialText}>LinkedIn</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.socialButton}>
                        <Twitter size={20} color="#8ec63f" strokeWidth={2} />
                        <Text style={styles.socialText}>Twitter</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </>
              )}
            </ScrollView>
          </View>
        </View>
      </Modal>
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
  content: {
    flex: 1,
  },
  speakersGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  speakerCard: {
    width: cardWidth,
    backgroundColor: 'rgba(255, 250, 220, 0.05)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(142, 198, 63, 0.2)',
    alignItems: 'center',
  },
  speakerImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
  },
  speakerInfo: {
    alignItems: 'center',
  },
  speakerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFADC',
    textAlign: 'center',
    marginBottom: 4,
  },
  speakerTitle: {
    fontSize: 12,
    color: '#8ec63f',
    textAlign: 'center',
    marginBottom: 2,
  },
  speakerCompany: {
    fontSize: 12,
    color: 'rgba(255, 250, 220, 0.6)',
    textAlign: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#06121d',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
    paddingHorizontal: 24,
    paddingBottom: 40,
    maxHeight: '90%',
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: 8,
    marginBottom: 16,
  },
  modalHeader: {
    alignItems: 'center',
    marginBottom: 32,
  },
  modalSpeakerImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  modalSpeakerName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFADC',
    textAlign: 'center',
    marginBottom: 8,
  },
  modalSpeakerTitle: {
    fontSize: 16,
    color: '#8ec63f',
    textAlign: 'center',
    marginBottom: 4,
  },
  modalSpeakerCompany: {
    fontSize: 16,
    color: 'rgba(255, 250, 220, 0.8)',
    textAlign: 'center',
  },
  modalSection: {
    marginBottom: 32,
  },
  modalSectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFADC',
    marginBottom: 16,
  },
  modalBio: {
    fontSize: 16,
    color: 'rgba(255, 250, 220, 0.8)',
    lineHeight: 24,
  },
  expertiseContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  expertiseTag: {
    backgroundColor: 'rgba(142, 198, 63, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  expertiseText: {
    fontSize: 14,
    color: '#8ec63f',
    fontWeight: '500',
  },
  sessionItem: {
    backgroundColor: 'rgba(255, 250, 220, 0.05)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(142, 198, 63, 0.2)',
  },
  sessionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFADC',
    marginBottom: 8,
  },
  sessionDetails: {
    gap: 8,
  },
  sessionDetail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sessionDetailText: {
    fontSize: 14,
    color: 'rgba(255, 250, 220, 0.8)',
    marginLeft: 8,
  },
  socialContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 250, 220, 0.05)',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(142, 198, 63, 0.2)',
  },
  socialText: {
    fontSize: 16,
    color: '#FFFADC',
    marginLeft: 8,
    fontWeight: '500',
  },
});
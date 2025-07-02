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
import { Search, ChevronDown, ChevronUp, CircleHelp as HelpCircle, Mail, Phone } from 'lucide-react-native';

const faqData = [
  {
    id: 1,
    category: 'General',
    question: 'What is TechEvent 2025?',
    answer: 'TechEvent 2025 is a premier technology conference bringing together industry leaders, developers, and innovators for three days of learning, networking, and collaboration. The event features keynote speeches, technical sessions, workshops, and networking opportunities.',
  },
  {
    id: 2,
    category: 'Registration',
    question: 'How do I register for the event?',
    answer: 'You can register for TechEvent 2025 through our official website. Early bird tickets are available until February 1st, 2025. Registration includes access to all sessions, meals, and networking events.',
  },
  {
    id: 3,
    category: 'Schedule',
    question: 'What time does the event start each day?',
    answer: 'The event starts at 8:00 AM each day with registration and breakfast. The first session begins at 9:00 AM. The event typically ends around 6:00 PM, followed by optional networking events.',
  },
  {
    id: 4,
    category: 'Venue',
    question: 'Where is the event being held?',
    answer: 'TechEvent 2025 will be held at the San Francisco Convention Center, located at 747 Howard St, San Francisco, CA 94103. The venue is easily accessible by public transportation and offers parking facilities.',
  },
  {
    id: 5,
    category: 'Sessions',
    question: 'Can I switch between sessions?',
    answer: 'Yes, you can move between different sessions throughout the day. However, some workshops may have limited capacity and require advance registration. We recommend checking the schedule and planning your day accordingly.',
  },
  {
    id: 6,
    category: 'Technology',
    question: 'Will there be Wi-Fi available?',
    answer: 'Yes, complimentary high-speed Wi-Fi will be available throughout the venue. Network details will be provided during registration and posted at information desks.',
  },
  {
    id: 7,
    category: 'Food',
    question: 'Are meals included in the registration?',
    answer: 'Yes, all meals are included in your registration fee. This includes breakfast, lunch, and coffee breaks each day. We accommodate various dietary restrictions - please specify your requirements during registration.',
  },
  {
    id: 8,
    category: 'Networking',
    question: 'Are there networking opportunities?',
    answer: 'Absolutely! The event includes dedicated networking sessions, coffee breaks, lunch periods, and evening social events. The mobile app also features a networking platform to connect with other attendees.',
  },
  {
    id: 9,
    category: 'Certificates',
    question: 'Will I receive a certificate of attendance?',
    answer: 'Yes, digital certificates of attendance will be available after the event. You can download your certificate from the event app or website using your registration credentials.',
  },
  {
    id: 10,
    category: 'Refunds',
    question: 'What is the refund policy?',
    answer: 'Full refunds are available until February 15th, 2025. After this date, refunds will be subject to a 25% processing fee. No refunds will be issued after March 1st, 2025, but transfers to future events may be possible.',
  },
];

const categories = ['All', ...Array.from(new Set(faqData.map(item => item.category)))];

export default function FAQScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpanded = (id: number) => {
    setExpandedItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFAQs = faqData.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>FAQ</Text>
        <Text style={styles.headerSubtitle}>Frequently Asked Questions</Text>
        
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Search size={20} color="rgba(255, 250, 220, 0.6)" strokeWidth={2} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search questions..."
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
        {filteredFAQs.length > 0 ? (
          filteredFAQs.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.faqItem}
              onPress={() => toggleExpanded(item.id)}
            >
              <View style={styles.faqHeader}>
                <View style={styles.faqHeaderContent}>
                  <View style={styles.categoryTag}>
                    <Text style={styles.categoryTagText}>{item.category}</Text>
                  </View>
                  <Text style={styles.faqQuestion}>{item.question}</Text>
                </View>
                {expandedItems.includes(item.id) ? (
                  <ChevronUp size={24} color="#8ec63f" strokeWidth={2} />
                ) : (
                  <ChevronDown size={24} color="rgba(255, 250, 220, 0.6)" strokeWidth={2} />
                )}
              </View>
              
              {expandedItems.includes(item.id) && (
                <View style={styles.faqAnswer}>
                  <Text style={styles.faqAnswerText}>{item.answer}</Text>
                </View>
              )}
            </TouchableOpacity>
          ))
        ) : (
          <View style={styles.emptyState}>
            <HelpCircle size={48} color="rgba(255, 250, 220, 0.3)" strokeWidth={1} />
            <Text style={styles.emptyStateTitle}>No questions found</Text>
            <Text style={styles.emptyStateText}>
              Try adjusting your search or filter criteria
            </Text>
          </View>
        )}

        {/* Contact Support */}
        <View style={styles.supportSection}>
          <Text style={styles.supportTitle}>Still have questions?</Text>
          <Text style={styles.supportSubtitle}>
            Our support team is here to help you
          </Text>
          
          <View style={styles.supportOptions}>
            <TouchableOpacity style={styles.supportButton}>
              <Mail size={20} color="#8ec63f" strokeWidth={2} />
              <Text style={styles.supportButtonText}>Email Support</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.supportButton}>
              <Phone size={20} color="#8ec63f" strokeWidth={2} />
              <Text style={styles.supportButtonText}>Call Us</Text>
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
    paddingHorizontal: 24,
  },
  faqItem: {
    backgroundColor: 'rgba(255, 250, 220, 0.05)',
    borderRadius: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(142, 198, 63, 0.2)',
    overflow: 'hidden',
  },
  faqHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 20,
  },
  faqHeaderContent: {
    flex: 1,
    marginRight: 16,
  },
  categoryTag: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(142, 198, 63, 0.2)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    marginBottom: 12,
  },
  categoryTagText: {
    fontSize: 12,
    color: '#8ec63f',
    fontWeight: '500',
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFADC',
    lineHeight: 22,
  },
  faqAnswer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 0,
    borderTopWidth: 1,
    borderTopColor: 'rgba(142, 198, 63, 0.1)',
  },
  faqAnswerText: {
    fontSize: 15,
    color: 'rgba(255, 250, 220, 0.8)',
    lineHeight: 22,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 80,
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
  supportSection: {
    backgroundColor: 'rgba(255, 250, 220, 0.05)',
    borderRadius: 16,
    padding: 24,
    marginTop: 24,
    marginBottom: 32,
    borderWidth: 1,
    borderColor: 'rgba(142, 198, 63, 0.2)',
    alignItems: 'center',
  },
  supportTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFADC',
    marginBottom: 8,
    textAlign: 'center',
  },
  supportSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 250, 220, 0.8)',
    textAlign: 'center',
    marginBottom: 24,
  },
  supportOptions: {
    flexDirection: 'row',
    gap: 16,
  },
  supportButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(142, 198, 63, 0.1)',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(142, 198, 63, 0.3)',
  },
  supportButtonText: {
    fontSize: 16,
    color: '#8ec63f',
    fontWeight: '500',
    marginLeft: 8,
  },
});
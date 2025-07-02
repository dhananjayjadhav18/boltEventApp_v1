import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Send,
  Globe,
  MessageCircle,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from 'lucide-react-native';

export default function ContactScreen() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      Alert.alert('Error', 'Please fill in all required fields.');
      return;
    }
    
    Alert.alert(
      'Message Sent',
      'Thank you for your message. We will get back to you soon!',
      [{ text: 'OK', onPress: () => router.back() }]
    );
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'info@techevent2025.com',
      action: 'Send Email',
    },
    {
      icon: Phone,
      title: 'Phone',
      description: '+1 (555) 123-4567',
      action: 'Call Now',
    },
    {
      icon: MapPin,
      title: 'Address',
      description: '747 Howard St, San Francisco, CA 94103',
      action: 'Get Directions',
    },
    {
      icon: Globe,
      title: 'Website',
      description: 'www.techevent2025.com',
      action: 'Visit Website',
    },
  ];

  const socialMedia = [
    { icon: Facebook, name: 'Facebook', handle: '@TechEvent2025' },
    { icon: Twitter, name: 'Twitter', handle: '@TechEvent2025' },
    { icon: Linkedin, name: 'LinkedIn', handle: 'TechEvent 2025' },
    { icon: Instagram, name: 'Instagram', handle: '@techevent2025' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <ArrowLeft size={24} color="#FFFADC" strokeWidth={2} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Contact Us</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        {/* Contact Methods */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Get in Touch</Text>
          <Text style={styles.sectionSubtitle}>
            We're here to help with any questions about TechEvent 2025
          </Text>
          
          {contactMethods.map((method, index) => (
            <TouchableOpacity key={index} style={styles.contactMethod}>
              <View style={styles.contactMethodLeft}>
                <View style={styles.contactMethodIcon}>
                  <method.icon size={24} color="#8ec63f" strokeWidth={2} />
                </View>
                <View style={styles.contactMethodText}>
                  <Text style={styles.contactMethodTitle}>{method.title}</Text>
                  <Text style={styles.contactMethodDescription}>
                    {method.description}
                  </Text>
                </View>
              </View>
              <TouchableOpacity style={styles.contactMethodAction}>
                <Text style={styles.contactMethodActionText}>{method.action}</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>

        {/* Contact Form */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Send us a Message</Text>
          <Text style={styles.sectionSubtitle}>
            Fill out the form below and we'll get back to you as soon as possible
          </Text>

          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Name *</Text>
              <TextInput
                style={styles.textInput}
                value={formData.name}
                onChangeText={(text) => setFormData({ ...formData, name: text })}
                placeholder="Your full name"
                placeholderTextColor="rgba(255, 250, 220, 0.5)"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Email *</Text>
              <TextInput
                style={styles.textInput}
                value={formData.email}
                onChangeText={(text) => setFormData({ ...formData, email: text })}
                placeholder="your.email@example.com"
                placeholderTextColor="rgba(255, 250, 220, 0.5)"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Subject</Text>
              <TextInput
                style={styles.textInput}
                value={formData.subject}
                onChangeText={(text) => setFormData({ ...formData, subject: text })}
                placeholder="Subject of your message"
                placeholderTextColor="rgba(255, 250, 220, 0.5)"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Message *</Text>
              <TextInput
                style={[styles.textInput, styles.textArea]}
                value={formData.message}
                onChangeText={(text) => setFormData({ ...formData, message: text })}
                placeholder="Your message..."
                placeholderTextColor="rgba(255, 250, 220, 0.5)"
                multiline
                numberOfLines={5}
                textAlignVertical="top"
              />
            </View>

            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
              <Send size={20} color="#06121d" strokeWidth={2} />
              <Text style={styles.submitButtonText}>Send Message</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Social Media */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Follow Us</Text>
          <Text style={styles.sectionSubtitle}>
            Stay updated with the latest event news and announcements
          </Text>

          <View style={styles.socialContainer}>
            {socialMedia.map((social, index) => (
              <TouchableOpacity key={index} style={styles.socialItem}>
                <View style={styles.socialIcon}>
                  <social.icon size={24} color="#8ec63f" strokeWidth={2} />
                </View>
                <View style={styles.socialText}>
                  <Text style={styles.socialName}>{social.name}</Text>
                  <Text style={styles.socialHandle}>{social.handle}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Emergency Contact */}
        <View style={styles.section}>
          <View style={styles.emergencyCard}>
            <MessageCircle size={32} color="#8ec63f" strokeWidth={2} />
            <Text style={styles.emergencyTitle}>Need Immediate Help?</Text>
            <Text style={styles.emergencyText}>
              For urgent matters during the event, please call our 24/7 hotline
            </Text>
            <TouchableOpacity style={styles.emergencyButton}>
              <Phone size={20} color="#06121d" strokeWidth={2} />
              <Text style={styles.emergencyButtonText}>Emergency Hotline</Text>
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
  section: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFADC',
    marginBottom: 8,
  },
  sectionSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 250, 220, 0.8)',
    lineHeight: 22,
    marginBottom: 24,
  },
  contactMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255, 250, 220, 0.05)',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(142, 198, 63, 0.2)',
  },
  contactMethodLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  contactMethodIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: 'rgba(142, 198, 63, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  contactMethodText: {
    flex: 1,
  },
  contactMethodTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFADC',
    marginBottom: 4,
  },
  contactMethodDescription: {
    fontSize: 14,
    color: 'rgba(255, 250, 220, 0.8)',
  },
  contactMethodAction: {
    backgroundColor: 'rgba(142, 198, 63, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(142, 198, 63, 0.3)',
  },
  contactMethodActionText: {
    fontSize: 14,
    color: '#8ec63f',
    fontWeight: '500',
  },
  formContainer: {
    backgroundColor: 'rgba(255, 250, 220, 0.05)',
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(142, 198, 63, 0.2)',
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFADC',
    marginBottom: 8,
  },
  textInput: {
    backgroundColor: 'rgba(255, 250, 220, 0.05)',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: '#FFFADC',
    borderWidth: 1,
    borderColor: 'rgba(142, 198, 63, 0.2)',
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },
  submitButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8ec63f',
    borderRadius: 12,
    padding: 16,
    marginTop: 8,
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#06121d',
    marginLeft: 8,
  },
  socialContainer: {
    gap: 16,
  },
  socialItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 250, 220, 0.05)',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(142, 198, 63, 0.2)',
  },
  socialIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: 'rgba(142, 198, 63, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  socialText: {
    flex: 1,
  },
  socialName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFADC',
    marginBottom: 4,
  },
  socialHandle: {
    fontSize: 14,
    color: 'rgba(255, 250, 220, 0.8)',
  },
  emergencyCard: {
    backgroundColor: 'rgba(142, 198, 63, 0.1)',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(142, 198, 63, 0.3)',
  },
  emergencyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFADC',
    marginTop: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  emergencyText: {
    fontSize: 16,
    color: 'rgba(255, 250, 220, 0.8)',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 20,
  },
  emergencyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#8ec63f',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
  },
  emergencyButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#06121d',
    marginLeft: 8,
  },
});
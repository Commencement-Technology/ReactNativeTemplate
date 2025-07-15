import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function TermsAndConditionsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Terms and Conditions</Text>

      <Text style={styles.sectionTitle}>1. Introduction</Text>
      <Text style={styles.paragraph}>
        Welcome to our application. By accessing or using our app, you agree to be bound by these terms and conditions.
      </Text>

      <Text style={styles.sectionTitle}>2. User Responsibilities</Text>
      <Text style={styles.paragraph}>
        Users must ensure that all information provided is accurate and up to date. You are responsible for maintaining the confidentiality of your account and password.
      </Text>

      <Text style={styles.sectionTitle}>3. Intellectual Property</Text>
      <Text style={styles.paragraph}>
        All content, trademarks, and data on this app are the property of their respective owners and are protected by applicable copyright and intellectual property laws.
      </Text>

      <Text style={styles.sectionTitle}>4. Limitation of Liability</Text>
      <Text style={styles.paragraph}>
        We are not liable for any damages or losses arising from the use of this application, including but not limited to data loss or service interruption.
      </Text>

      <Text style={styles.sectionTitle}>5. Privacy</Text>
      <Text style={styles.paragraph}>
        We value your privacy. Your personal information is collected and processed according to our Privacy Policy.
      </Text>

      <Text style={styles.sectionTitle}>6. Modifications</Text>
      <Text style={styles.paragraph}>
        We reserve the right to change these terms at any time. Continued use of the app implies acceptance of the updated terms.
      </Text>

      <Text style={styles.sectionTitle}>7. Contact Us</Text>
      <Text style={styles.paragraph}>
        If you have any questions regarding these terms, please contact us at support@example.com.
      </Text>

      <Text style={styles.footer}>Last updated: May 31, 2025</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: '#F8F7FD',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#4C278A',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 5,
    color: '#333',
  },
  paragraph: {
    fontSize: 15,
    color: '#555',
    lineHeight: 22,
  },
  footer: {
    fontSize: 13,
    textAlign: 'center',
    marginTop: 30,
    color: '#999',
  },
});

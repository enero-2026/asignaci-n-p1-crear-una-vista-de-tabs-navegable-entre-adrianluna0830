import { Slot, useRouter, usePathname } from 'expo-router';
import { View, Text, Image, ScrollView, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Layout() {
  const router = useRouter();
  const pathname = usePathname();
  const tabs = ['inicio', 'buscar', 'perfil'];

  const navigateTo = (route) => {
    router.replace(`/${route}`);
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.rootContainer}>
        <View style={styles.header}>
          <Image
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            style={styles.headerImage}
          />
          <Text style={styles.headerTitle}>Mi Aplicación</Text>
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Slot />
        </ScrollView>

        <View style={styles.navBar}>
          <View style={styles.tabsContent}>
            {tabs.map((tab) => (
              <Pressable
                key={tab}
                onPress={() => navigateTo(tab)}
                style={styles.tab}
              >
                <Text style={[
                  styles.tabText,
                  pathname === `/${tab}` && styles.activeTabText
                ]}>
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  rootContainer: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
  },
  scrollContent: {
    flexGrow: 1,
  },
  navBar: {
    height: 100,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  tabsContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    flex: 1,
  },
  tabText: {
    fontSize: 16,
    color: '#888888',
  },
  activeTabText: {
    color: '#000000',
    fontWeight: 'bold',
  },
});

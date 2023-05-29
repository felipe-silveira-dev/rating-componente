import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.silveiranda.rating',
  appName: 'rating-component',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;

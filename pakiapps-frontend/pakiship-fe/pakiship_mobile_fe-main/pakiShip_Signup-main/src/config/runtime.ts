import Constants from 'expo-constants';

type ExpoExtra = {
  apiBaseUrl?: string;
  supabaseUrl?: string;
  supabaseAnonKey?: string;
  supabasePublishableKey?: string;
  supabasePasswordResetRedirectUrl?: string;
};

const extra = (Constants.expoConfig?.extra ?? {}) as ExpoExtra;

export const runtimeConfig = {
  apiBaseUrl: extra.apiBaseUrl ?? 'http://192.168.1.20:3000/api/v1',
  supabaseUrl: extra.supabaseUrl ?? '',
  supabaseAnonKey: extra.supabaseAnonKey ?? extra.supabasePublishableKey ?? '',
  supabasePublishableKey: extra.supabasePublishableKey ?? '',
  supabasePasswordResetRedirectUrl:
    extra.supabasePasswordResetRedirectUrl ?? 'pakiship://reset-password',
};

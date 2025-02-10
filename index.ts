import { createApp } from '@divvi/mobile'
import { registerRootComponent } from 'expo'
import Constants from 'expo-constants'
import ActivityIcon from './assets/ActivityTabIcon'
import WelcomeLogo from './assets/WelcomeLogo'
import BeefyLogo from './assets/BeefyLogo'
import ShakingCowHead from './assets/ShakingCowHead'

const expoConfig = Constants.expoConfig
if (!expoConfig) {
  throw new Error('expoConfig is not available')
}
const App = createApp({
  registryName: 'Beefy',
  displayName: expoConfig.name,
  deepLinkUrlScheme: expoConfig.scheme
    ? Array.isArray(expoConfig.scheme)
      ? expoConfig.scheme[0]
      : expoConfig.scheme
    : 'example',
  ios: {
    appStoreId: undefined, // TODO: add app store id once published
  },
  features: {
    cloudBackup: true,
    statsig: {
      apiKey: process.env.EXPO_PUBLIC_STATSIG_API_KEY,
    },
    segment: {
      apiKey: process.env.EXPO_PUBLIC_SEGMENT_API_KEY,
    }
  },
  screens: {
    tabs: ({ defaultTabs }) => {
      return {
        screens: [
          defaultTabs.wallet,
          {...defaultTabs.earn, label: (t) => t('home')},
          {
            ...defaultTabs.activity,
            label: (t) => t('activity'),
            icon: ActivityIcon,
          },
        ],
        initialScreen: 'earn',
      }
    },
  },
  themes: {
    default: {
      isDark: true,
      colors: {
        backgroundPrimary: '#242843',
        backgroundSecondary: '#363B63',
        backgroundTertiary: '#2D3154',
        backgroundScrim: '#000000',
        contentPrimary: '#FFFFFF',
        contentSecondary: '#B7B9C9',
        contentTertiary: '#242843',
        textLink: '#B7B9C9',
        borderPrimary: '#FFFFFF',
        borderSecondary: '#242843',
        softShadow: 'rgba(156, 164, 169, 0.4)',
        lightShadow: 'rgba(48, 46, 37, 0.15)',
        barShadow: 'rgba(129, 134, 139, 0.5)',
        skeletonPlaceholderHighlight: '#FFFFFF',
        skeletonPlaceholderBackground: '#4EB258A3',
        loadingIndicator: '#1AB775',
        navigationTopPrimary: '#FFFFFF',
        navigationTopSecondary: '#B7B9C9',
        navigationBottomPrimary: '#4EB258',
        navigationBottomSecondary: '#B7B9C9',
        bottomSheetHandle: '#FFFFFF',
        buttonPrimaryBackground: '#4EB258',
        buttonPrimaryContent: '#242843',
        buttonPrimaryBorder: '#4EB258',
        buttonSecondaryBackground: '#2D3154',
        buttonSecondaryContent: '#FFFFFF',
        buttonSecondaryBorder: '#2D3154',
        buttonTertiaryBackground: '#242843',
        buttonTertiaryContent: '#2E3338',
        buttonTertiaryBorder: '#E6E6E6',
        buttonQuickActionBackground: '#363B63',
        buttonQuickActionContent: '#FFFFFF',
        buttonQuickActionBorder: '#363B63',
        textInputBackground: '#363B63',
        qrTabBarPrimary: '#FFFFFF',
        qrTabBarSecondary: '#363B63',
        disabled: '#E6E6E6',
        inactive: '#B7B9C9',
        info: '#363B63',
        successPrimary: '#FFFFFF',
        successSecondary: '#FFFFFF66',
        warningPrimary: '#9C6E00',
        warningSecondary: '#9C6E0066',
        errorPrimary: '#C93717',
        errorSecondary: '#C9371766',
        accent: '#4EB258',
        brandGradientLeft: '#FFFFFF',
        brandGradientRight: '#FFFFFF',
        contentOnboardingComplete: '#1AB775',
      },
      assets: {
        welcomeLogo: WelcomeLogo,
        welcomeBackgroundImage: undefined,
        onboardingSuccessImage: require('./assets/cow-spaceship.png'),
        tabHeaderLogo: BeefyLogo,
        noEarnPoolsLogo: ShakingCowHead,
      },
    },
  },
  experimental: {
    earn: {
      showSafetyScoreOnPoolCard: true,
    },
    alchemyKeys: {
      ALCHEMY_ETHEREUM_API_KEY: process.env.EXPO_PUBLIC_ALCHEMY_ETHEREUM_API_KEY,
      ALCHEMY_BASE_API_KEY: process.env.EXPO_PUBLIC_ALCHEMY_BASE_API_KEY,
      ALCHEMY_ARBITRUM_API_KEY: process.env.EXPO_PUBLIC_ALCHEMY_ARBITRUM_API_KEY,
      ALCHEMY_POLYGON_POS_API_KEY: process.env.EXPO_PUBLIC_ALCHEMY_POLYGON_POS_API_KEY,
      ALCHEMY_OPTIMISM_API_KEY: process.env.EXPO_PUBLIC_ALCHEMY_OPTIMISM_API_KEY,
    },
    wallet: {
      showActionsCarousel: true,
    },
    activity: {
      hideActionsCarousel: true
    }
  }
})

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App)

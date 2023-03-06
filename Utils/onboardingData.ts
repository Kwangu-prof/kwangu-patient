import Colors from './Colors';

/* eslint-disable global-require */
export const OnboardingData = [
  {
    id: 1,
    logo: require('../assets/onboardingLogo.png'),
    image: require('../assets/onboarding1.png'),
    title: 'Welcome to',
    subtitle: ' Kwangu Health',
    bgColor: 'red',
    color: Colors.secondary,
    description:
      'Make easy doctor appointments anytime from anywhere without queuing from qualified health practitioners.',
  },
  {
    id: 2,
    logo: require('../assets/onboardingLogo.png'),
    image: require('../assets/onboarding2.png'),
    title: 'Personalized care',
    bgColor: 'green',
    color: 'black',

    description:
      "Kwangu Health provides tailored aftercare plans based on a patient's specific needs and health history, leading to more effective and efficient care.",
  },
  {
    id: 3,
    logo: require('../assets/onboardingLogo.png'),
    image: require('../assets/onboarding3.png'),
    title: 'Improved Accessibility',
    bgColor: 'yellow',
    color: 'black',
    description:
      'Kwangu health enables patients to access medical care from anywhere, at any time, improving access to care for those living in remote or underserved areas.',
  },
];

export default OnboardingData;

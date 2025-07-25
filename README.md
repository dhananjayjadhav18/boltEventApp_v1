# TechEvent 2025 - Innovation Summit App

Official mobile application for TechEvent 2025 Innovation Summit.

## Features

- **Event Schedule**: Browse sessions, speakers, and agenda
- **Speaker Profiles**: Detailed information about industry experts
- **Interactive Agenda**: Filter sessions by category and time
- **Favorites**: Save your preferred sessions and speakers
- **Event Information**: Venue details, maps, and contact info
- **FAQ**: Frequently asked questions with search functionality

## Tech Stack

- React Native with Expo
- Expo Router for navigation
- TypeScript for type safety
- Lucide React Native for icons
- React Native Reanimated for animations

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- Expo CLI
- iOS Simulator or Android Emulator (for testing)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/techevent-2025.git
cd techevent-2025
```
1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

4. Open the app:
   - Scan the QR code with Expo Go app on your mobile device
   - Press `i` for iOS simulator
3. Use Expo Go app to scan the QR code and test on your mobile device

## Project Structure

```
app/
├── (tabs)/           # Tab navigation screens
│   ├── index.tsx     # Home screen
│   ├── agenda.tsx    # Event agenda
│   ├── speakers.tsx  # Speaker profiles
│   ├── more.tsx      # Additional features
│   └── faq.tsx       # FAQ section
├── about.tsx         # About event page
├── contact.tsx       # Contact information
├── splash.tsx        # Splash screen
└── _layout.tsx       # Root layout
```

## Event Details

- **Date**: March 15-17, 2025
- **Venue**: San Francisco Convention Center
- **Attendees**: 2000+ professionals
- **Speakers**: 100+ industry experts
- **Sessions**: 50+ technical sessions and workshops

## Development

### Running on Device

1. Install Expo Go app on your mobile device
2. Run `npm run dev`
3. Scan the QR code displayed in terminal

### Building for Production

```bash
# Build for iOS
expo build:ios

# Build for Android
expo build:android
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For questions about the app or event:
- Email: info@techevent2025.com
- Phone: +1 (555) 123-4567
- Website: www.techevent2025.com

---

Built with ❤️ for TechEvent 2025
# Blood Connect Rescue Aid

A modern web application designed to connect blood donors with those in need, making blood donation and emergency requests more efficient and accessible.

## Features

- Real-time blood donation requests and matching
- User authentication and profile management
- Emergency blood request system
- Donor matching based on blood type and location
- Interactive dashboard for tracking donations and requests
- Mobile-responsive design

## Tech Stack

- **Frontend**: React with TypeScript
- **UI Components**: shadcn-ui
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **State Management**: React Context API
- **Authentication**: Firebase Authentication
- **Database**: Firebase Firestore

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/blood-connect-rescue-aid.git
cd blood-connect-rescue-aid
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your Firebase configuration:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
blood-connect-rescue-aid/
├── src/                    # Source files
│   ├── components/        # Reusable UI components
│   ├── pages/            # Page components
│   ├── lib/              # Utility libraries and configurations
│   ├── hooks/            # Custom React hooks
│   ├── data/             # Static data and constants
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── public/               # Static assets
├── vite.config.ts        # Vite configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── package.json          # Project dependencies and scripts
└── README.md            # Project documentation
```

### Key Directories

- **components/**: Contains all reusable UI components
  - `ui/`: Basic UI components (buttons, inputs, etc.)
  - `layout/`: Layout components (header, footer, etc.)
  - `features/`: Feature-specific components

- **pages/**: Contains all page components
  - `auth/`: Authentication related pages
  - `dashboard/`: Dashboard and user profile pages
  - `donation/`: Blood donation related pages

- **lib/**: Contains utility functions and configurations
  - `firebase/`: Firebase configuration and utilities
  - `utils/`: Helper functions and constants

- **hooks/**: Custom React hooks for shared logic
- **data/**: Static data, constants, and mock data

## Future Modifications

### Planned Features
1. **Enhanced Matching System**
   - AI-powered donor-recipient matching
   - Priority-based emergency request handling
   - Location-based donor suggestions

2. **Mobile Application**
   - Native mobile app development
   - Push notifications for emergency requests
   - Offline support

3. **Analytics Dashboard**
   - Blood donation trends
   - Regional demand analysis
   - Donor engagement metrics

4. **Integration Features**
   - Hospital management system integration
   - Blood bank inventory management
   - Emergency services integration

### Technical Improvements
1. **Performance Optimization**
   - Code splitting and lazy loading
   - Image optimization
   - Caching strategies

2. **Security Enhancements**
   - Two-factor authentication
   - Enhanced data encryption
   - Regular security audits

3. **Testing Infrastructure**
   - Unit testing setup
   - Integration testing
   - End-to-end testing

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions, please:
1. Check the [Issues](https://github.com/yourusername/blood-connect-rescue-aid/issues) section
2. Create a new issue if your problem hasn't been reported
3. Contact the maintainers for urgent matters

## Acknowledgments

- Thanks to all the contributors who have helped make this project better
- Special thanks to the open-source community for the amazing tools and libraries

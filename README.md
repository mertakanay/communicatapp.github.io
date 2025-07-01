# Communicat Website

A React-based website for Communicat, a mobile messaging app that evaluates messages and helps users identify negative communication patterns.

## Features

- **Modern React App**: Built with React 18 and React Router for navigation
- **Responsive Design**: Mobile-friendly with modern UI/UX
- **Contact Form**: Interactive form with validation and email integration
- **Legal Pages**: Privacy Policy and Terms & Conditions with proper styling
- **GitHub Pages Ready**: Configured for deployment to GitHub Pages

## Pages

- **Home**: Landing page with app preview and store links
- **Contact**: Contact form with validation
- **Privacy**: Privacy Policy page
- **Terms**: Terms & Conditions page

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deploying to GitHub Pages

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

This will automatically build and deploy to the `gh-pages` branch.

## Project Structure

```
src/
├── components/          # React components
│   ├── Home.js         # Landing page
│   ├── Contact.js      # Contact form
│   ├── Privacy.js      # Privacy policy
│   ├── Terms.js        # Terms & conditions
│   ├── Navigation.js   # Navigation bar
│   └── *.css           # Component styles
├── App.js              # Main app component
├── App.css             # App styles
├── index.js            # Entry point
└── index.css           # Global styles
```

## Customization

### App Store Links
Update the app store links in `src/components/Home.js`:
- Replace `YOUR_APP_ID_HERE` with your actual App Store ID
- Replace `YOUR.APP.PACKAGE` with your actual Google Play package name

### Contact Email
Update the contact email in `src/components/Contact.js`:
- Change `support@rated10.app` to your preferred contact email

### Styling
- Modify CSS files in the `src/components/` directory to customize the appearance
- The app uses a modern color scheme with blue accents (#007bff, #4ea8de)

## Technologies Used

- **React 18**: Modern React with hooks
- **React Router**: Client-side routing
- **CSS3**: Modern styling with flexbox and grid
- **GitHub Pages**: Static site hosting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary to Rated10 Inc. 
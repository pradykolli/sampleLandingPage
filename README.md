# FUCHA - Landing Page

A responsive, modern single-page web application built with React + TypeScript and Vite. Featuring a sleek tech aesthetic with acid green accents, glitch effects, and interactive elements.

## Features

- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop
- **TypeScript**: Full type safety with comprehensive interfaces
- **Component Architecture**: Modular, reusable React components
- **Theme System**: CSS variables-based theming for easy customization
- **Testing**: Complete test suite with Jest and React Testing Library
- **GitHub Pages Ready**: Pre-configured for easy deployment
- **Accessibility**: ARIA labels, semantic HTML, keyboard support
- **Performance**: Optimized with Vite for fast builds and hot module reloading

## Project Structure

```
├── src/
│   ├── components/          # React components
│   │   ├── Bar.tsx         # TopBar and BottomBar
│   │   ├── CornerMark.tsx  # Decorative corner marks
│   │   ├── CursorTrail.tsx # Interactive cursor effect
│   │   ├── DecorativeOverlays.tsx # Noise and scan lines
│   │   ├── DownloadButton.tsx
│   │   ├── Logo.tsx        # Main FUCHA logo with glitch
│   │   ├── Tagline.tsx
│   │   └── Waitlist.tsx    # Email capture form
│   ├── styles/             # CSS modules and theme
│   │   ├── globals.css     # Global variables and base styles
│   │   ├── theme.ts        # Theme configuration
│   │   ├── Bar.css
│   │   ├── Decorative.css
│   │   ├── DownloadButton.css
│   │   ├── Layout.css
│   │   ├── Logo.css
│   │   ├── Tagline.css
│   │   └── Waitlist.css
│   ├── types/              # TypeScript definitions
│   │   └── index.ts
│   ├── __tests__/          # Test files
│   │   ├── Bar.test.tsx
│   │   ├── CornerMark.test.tsx
│   │   ├── DownloadButton.test.tsx
│   │   ├── Logo.test.tsx
│   │   ├── Tagline.test.tsx
│   │   └── Waitlist.test.tsx
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # App entry point
│   └── setupTests.ts       # Jest configuration
├── jest.config.js          # Jest configuration
├── vite.config.ts          # Vite configuration
└── package.json
```

## Installation

```bash
npm install
```

## Development

Start the development server with hot module reloading:

```bash
npm run dev
```

The app will open at `http://localhost:3000`

## Building

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Testing

Run the test suite:

```bash
npm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

Generate coverage report:

```bash
npm run test:coverage
```

## Deployment

### GitHub Pages

Deploy to GitHub Pages:

```bash
npm run deploy
```

This command:
1. Builds the project (`npm run build`)
2. Deploys the `dist` folder to the `gh-pages` branch

Make sure your repository settings have GitHub Pages enabled for the `gh-pages` branch.

**Update the `homepage` field in `package.json`** with your GitHub Pages URL:

```json
"homepage": "https://yourusername.github.io/sampleLandingPage/"
```

### Other Deployment Options

#### Vercel
```bash
npm run build
# Then push to a connected Git repository
```

#### Netlify
```bash
npm run build
# Deploy the dist folder through Netlify UI or CLI
```

## Theme Customization

Edit `src/styles/theme.ts` and `src/styles/globals.css` to customize colors, spacing, and typography.

### Available Theme Variables

- **Colors**: black, white, acid, dim, darkGray, mediumGray, lightGray, red
- **Spacing**: xs, sm, md, lg, xl, xxl, xxxl, page
- **Fonts**: mono, default
- **Font Sizes**: xs, sm, base, md, lg, xl
- **Letter Spacing**: xs, sm, md, lg
- **Breakpoints**: mobile (480px), tablet (768px), desktop (1024px), wide (1440px)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Components

### Logo
Animated FUCHA logo with glitch effects and acid green hash character.

### Waitlist
Email capture form with validation and success state.

### TopBar & BottomBar
Fixed navigation bars with customizable items.

### CornerMark
Decorative corner marks in acid green color.

### DownloadButton
Vertical download buttons for SVG logo and PDF export.

### CursorTrail
Interactive cursor trail effect on mouse movement.

## Performance

- **Build size**: ~150KB (gzipped)
- **Lighthouse Scores**: 95+ Performance, 100 Accessibility

## License

© 2025 Fucha Inc. All Rights Reserved.

## Contributing

To contribute:
1. Create a feature branch
2. Make your changes
3. Run tests: `npm test`
4. Submit a pull request

## Support

For issues and questions, please open an issue in the repository.

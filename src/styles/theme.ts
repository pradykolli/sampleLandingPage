// Theme configuration with CSS variables for easy theming
export const theme = {
  colors: {
    black: '#060606',
    white: '#f0ede8',
    acid: '#C8FF00',
    dim: '#333',
    darkGray: '#1e1e1e',
    mediumGray: '#2a2a2a',
    lightGray: '#444',
    red: '#ff2200',
  },
  spacing: {
    xs: '8px',
    sm: '12px',
    md: '14px',
    lg: '18px',
    xl: '24px',
    xxl: '28px',
    xxxl: '40px',
    page: '52px',
  },
  fonts: {
    mono: "'Courier New', 'Courier', monospace",
    default:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  },
  fontSizes: {
    xs: 'clamp(8px, 0.9vw, 9px)',
    sm: 'clamp(9px, 1.4vw, 13px)',
    base: 'clamp(10px, 1.2vw, 12px)',
    md: 'clamp(12px, 1.5vw, 14px)',
    lg: 'clamp(14px, 2vw, 16px)',
    xl: 'clamp(16px, 3vw, 24px)',
  },
  letterSpacing: {
    xs: '2px',
    sm: '3px',
    md: '4px',
    lg: '6px',
  },
  transitions: {
    fast: '0.2s',
    normal: '0.3s',
    slow: '0.6s',
  },
  zIndex: {
    base: 1,
    content: 5,
    ui: 9,
    overlay: 10,
    decorative: 20,
    dropdown: 30,
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1440px',
  },
};

export type Theme = typeof theme;

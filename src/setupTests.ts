import '@testing-library/jest-dom';

// Mock CSS imports
jest.mock('../styles/Logo.css', () => ({}), { virtual: true });
jest.mock('../styles/Tagline.css', () => ({}), { virtual: true });
jest.mock('../styles/Waitlist.css', () => ({}), { virtual: true });
jest.mock('../styles/Bar.css', () => ({}), { virtual: true });
jest.mock('../styles/Decorative.css', () => ({}), { virtual: true });
jest.mock('../styles/DownloadButton.css', () => ({}), { virtual: true });
jest.mock('../styles/Layout.css', () => ({}), { virtual: true });
jest.mock('../styles/globals.css', () => ({}), { virtual: true });

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock URL.createObjectURL
Object.defineProperty(URL, 'createObjectURL', {
  writable: true,
  value: jest.fn(() => 'mocked-object-url'),
});

Object.defineProperty(URL, 'revokeObjectURL', {
  writable: true,
  value: jest.fn(),
});

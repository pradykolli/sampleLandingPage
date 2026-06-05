// Type definitions for the application

export interface WaitlistFormData {
  email: string;
  submitted: boolean;
  error?: string;
}

export interface CornerMarkProps {
  position: 'tl' | 'tr' | 'bl' | 'br';
}

export interface DownloadButtonProps {
  label: string;
  onClick: () => void;
  isPrimary?: boolean;
  ariaLabel?: string;
}

export interface TopBarItem {
  text: string;
}

export interface ThemeConfig {
  colors: Record<string, string>;
  spacing: Record<string, string>;
  fonts: Record<string, string>;
  fontSizes: Record<string, string>;
  letterSpacing: Record<string, string>;
  transitions: Record<string, string>;
  zIndex: Record<string, number>;
  breakpoints: Record<string, string>;
}

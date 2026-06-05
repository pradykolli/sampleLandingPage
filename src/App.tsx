import './styles/globals.css';
import './styles/Layout.css';
import { TopBar, BottomBar } from './components/Bar';
import Logo from './components/Logo';
import Tagline from './components/Tagline';
import Waitlist from './components/Waitlist';
import CornerMark from './components/CornerMark';
// import DownloadButton from './components/DownloadButton';
import DecorativeOverlays from './components/DecorativeOverlays';
import CursorTrail from './components/CursorTrail';

function App() {
  const handleWaitlistSubmit = (email: string) => {
    console.log('Waitlist submission:', email);
  };

  const handleDownloadSVG = () => {
    const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg viewBox="0 0 640 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="FUC#A Logo">
  <rect x="0" y="10" width="14" height="140" fill="#f0ede8"/>
  <rect x="0" y="10" width="72" height="14" fill="#f0ede8"/>
  <rect x="0" y="75" width="58" height="12" fill="#f0ede8"/>
  <rect x="98" y="10" width="14" height="126" fill="#f0ede8"/>
  <rect x="98" y="136" width="68" height="14" fill="#f0ede8"/>
  <rect x="152" y="10" width="14" height="126" fill="#f0ede8"/>
  <rect x="188" y="10" width="68" height="14" fill="#f0ede8"/>
  <rect x="188" y="10" width="14" height="140" fill="#f0ede8"/>
  <rect x="188" y="136" width="68" height="14" fill="#f0ede8"/>
  <rect x="285" y="20" width="10" height="120" fill="#C8FF00"/>
  <rect x="313" y="20" width="10" height="120" fill="#C8FF00"/>
  <rect x="272" y="62" width="50" height="10" fill="#C8FF00"/>
  <rect x="272" y="90" width="50" height="10" fill="#C8FF00"/>
  <polygon points="368,150 390,10 396,10 404,10 410,10 432,150 418,150 400,46 382,150" fill="#f0ede8"/>
  <rect x="376" y="92" width="48" height="12" fill="#f0ede8"/>
</svg>`;

    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'fucha-logo.svg';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handlePrintPage = () => {
    window.print();
  };

  return (
    <div className="appContainer">
      <DecorativeOverlays />
      <CornerMark position="tl" />
      <CornerMark position="tr" />
      <CornerMark position="bl" />
      <CornerMark position="br" />

      <TopBar
        items={[
          'Toronto · Canada',
          'Est. 2025',
          'Drop 001 — 2035',
        ]}
      />

      <main className="main">
        <Logo />
        <Tagline
          text="The Future Starts Here "
          accentText="Toronto"
          suffix=" Limited Drops"
        />
        <Waitlist
          onSubmit={handleWaitlistSubmit}
          label="Drop 001 — Be First"
          placeholder="your@email.com"
          buttonText="Notify Me"
          successMessage="You're in. Watch for DROP 001 — 2035."
          noteText="100 units · no restock · no exceptions"
        />
      </main>

      <BottomBar
        items={[
          '© 2025 Fucha Inc. All Rights Reserved.',
          'wearfucha.ca',
        ]}
      />

      <div className="downloadSection">
        {/* <DownloadButton
          label="Save Logo SVG"
          onClick={handleDownloadSVG}
          isPrimary
          ariaLabel="Download FUCHA logo as SVG"
        />
        <DownloadButton
          label="Save Page PDF"
          onClick={handlePrintPage}
          ariaLabel="Print or save page as PDF"
        /> */}
      </div>

      <CursorTrail isEnabled={true} />
    </div>
  );
}

export default App;

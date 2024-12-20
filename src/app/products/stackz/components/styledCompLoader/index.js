'use client';

import React, { useEffect, useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export default function StyledComponentsRegistry({ children }) {
  const [sheet, setSheet] = useState(() => new ServerStyleSheet());

  // Inject styles during server rendering
  useServerInsertedHTML(() => {
    const styles = sheet.getStyleElement();
    sheet.instance.clearTag(); // Clear the tag after extracting styles
    return <>{styles}</>;
  });

  useEffect(() => {
    // Reinitialize the stylesheet on the client after navigation
    setSheet(new ServerStyleSheet());

  }, []);

  return (
    <StyleSheetManager sheet={sheet.instance}>
      {children}
    </StyleSheetManager>
  );
}

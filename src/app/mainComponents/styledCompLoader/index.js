'use client';

import React, { useState } from 'react';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export default function StyledComponentsRegistry({ children }) {
  const [sheet] = useState(() => new ServerStyleSheet());

  if (typeof window === 'undefined') {
    // During SSR
    return (
      <>
        <StyleSheetManager sheet={sheet.instance}>{children}</StyleSheetManager>
        {sheet.getStyleElement()}
      </>
    );
  }

  // Client side
  return <StyleSheetManager>{children}</StyleSheetManager>;
}

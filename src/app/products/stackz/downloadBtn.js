"use client";

import React from 'react';
import { saveAs } from 'file-saver';

const DownloadButton = ({ fileUrl, fileName, btnName = "Download", }) => {
  const handleDownload = () => {
    if (fileUrl && fileName) {
        // fileUrl = require(fileUrl);
      saveAs(fileUrl, fileName); // Use the passed URL and filename
    } else {
      console.error('File URL and filename are required');
    }
  };

  return (
    <button onClick={handleDownload}>
     { btnName} 
    </button>
  );
};

export default DownloadButton;

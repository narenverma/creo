"use client";
import Image from "next/image";
import React from "react";

// Function to copy the Figma data to the clipboard
const copyFigmaToClipboard = (figmaCode, setCopiedItem) => {

  
  const htmlData = `
    <html>
      <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8">
      </head>
      <body>
        <!--StartFragment-->
        ${figmaCode}  <!-- Dynamic Figma component data goes here -->
        <!--EndFragment-->
      </body>
    </html>
  `;

  const blob = new Blob([htmlData], { type: "text/html" });
  const item = new ClipboardItem({ "text/html": blob });

  navigator.clipboard
    .write([item])
    .then(() => {
      console.log("Figma component copied to clipboard!");
      // alert("Figma component copied to clipboard!"); // Let the user know it worked
      setCopiedItem(true);
    })
    .catch((err) => {
      console.error("Failed to copy:", err);
      // alert("Failed to copy Figma component.");
    });

    setTimeout(() => {
      setCopiedItem(false);
    }, 2000);
};

// Reusable CopyButton component
export const CopyButton = ({
  figmaCode,
  classNames,
  iconUrl,
  buttonText = "Copy to Clipboard",
}) => {
  const [copied, setCopied] = React.useState(false);
  return (
    <button
      onClick={() => copyFigmaToClipboard(figmaCode, setCopied)}
      className={  copied === true?" copied "+ classNames:classNames}
    >
    {iconUrl && <Image src={iconUrl} alt="Figma" />}
      {buttonText}
    </button>
  );
};

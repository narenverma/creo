"use client";
import {createGlobalStyle } from "styled-components";

export const GlobalColorsStyle = createGlobalStyle`
:root{
    --theme-black: #121212;
    --black: #000000;
    --theme-white: #ffffff;
    --white: #ffffff;

  --theme-neutral-gray: #AEAEAE; /* Neutral light gray */
  --theme-light-yellow: #F0E0A5;
  --theme-cream: #FEFBF0;
  --theme-dark-yellow: #D1AA1A;



 

}

/* Background color classes */
 
.theme-bg-neutral-gray {
    background-color: var(--theme-neutral-gray);
}
.theme-bg-light-yellow {
  background-color: var(--theme-light-yellow);
}

.theme-bg-cream {
  background-color: var(--theme-cream);
}

.theme-bg-dark-yellow {
  background-color: var(--theme-dark-yellow);
}

/* Text color classes */
 
.theme-text-neutral-gray {
    color: var(--theme-neutral-gray);
}
.theme-text-light-yellow {
  color: var(--theme-light-yellow);
}

.theme-text-cream {
  color: var(--theme-cream);
}

.theme-text-dark-yellow {
  color: var(--theme-dark-yellow);
}

`;
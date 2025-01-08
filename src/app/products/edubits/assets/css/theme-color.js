"use client";
import {createGlobalStyle } from "styled-components";

export const GlobalColorsStyle = createGlobalStyle`
:root{
    --theme-black: #121212;
    --black: #000000;
    --theme-white: #ffffff;
    --white: #ffffff;

    --theme-primary-blue: #0049F3;
  --theme-primary-dark-gray: #4F4F4F; /* Strong dark gray */
  --theme-secondary-gray: #818181; /* Secondary medium gray */
  --theme-neutral-gray: #AEAEAE; /* Neutral light gray */
  --theme-soft-gray: #DDE0E4; /* Soft light gray */
  --theme-accent-light-blue: #F5F8FF; /* Accent light blue */
  --theme-base-white: #FAFAFA; /* Base soft white */
  --theme-white-smoke: #f7f7f7;
  --theme-selective-yellow: #fcbc00;

 

}

/* Background color classes */
.theme-bg-black {
    background-color: var(--theme-black);
}

.theme-bg-white {
    background-color: var(--theme-white);
}

.theme-bg-primary-blue {
    background-color: var(--theme-primary-blue);
}

.theme-bg-dark-gray {
    background-color: var(--theme-primary-dark-gray);
}

.theme-bg-secondary-gray {
    background-color: var(--theme-secondary-gray);
}

.theme-bg-neutral-gray {
    background-color: var(--theme-neutral-gray);
}

.theme-bg-soft-gray {
    background-color: var(--theme-soft-gray);
}

.theme-bg-accent-light-blue {
    background-color: var(--theme-accent-light-blue);
}

.theme-bg-base-white {
    background-color: var(--theme-base-white);
}
.theme-bg-white-smoke {
    background-color: var(--theme-white-smoke);
}

/* Text color classes */
.theme-text-black {
    color: var(--theme-black);
}

.theme-text-white {
    color: var(--theme-white);
}

.theme-text-primary-blue {
    color: var(--theme-primary-blue);
}

.theme-text-dark-gray {
    color: var(--theme-primary-dark-gray);
}

.theme-text-secondary-gray {
    color: var(--theme-secondary-gray);
}

.theme-text-neutral-gray {
    color: var(--theme-neutral-gray);
}

.theme-text-soft-gray {
    color: var(--theme-soft-gray);
}

.theme-text-accent-light-blue {
    color: var(--theme-accent-light-blue);
}

.theme-text-base-white {
    color: var(--theme-base-white);
}

.theme-text-white-smoke {
    color: var(--theme-white-smoke);
}


`;
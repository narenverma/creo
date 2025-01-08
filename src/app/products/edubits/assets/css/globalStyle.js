"use client";
import {createGlobalStyle, styled } from "styled-components";
import localFont from 'next/font/local';
import { Inter } from 'next/font/google'
 

// If loading a variable font, you don't need to specify the font weight
export const InterFont = Inter({ subsets: ['latin'], variable: '--Inter' })


export const AwesomeSerif = localFont({
    src: [
        {
            path: "../fonts/awesomeSerif/AwesomeSerif-LightTall.woff",
            weight: '300',
            style: 'normal',

        },
        {
            path: "../fonts/awesomeSerif/AwesomeSerif-LightTall.woff2",
            weight: '300',
            style: 'normal',

        },
        {
            path: "../fonts/awesomeSerif/AwesomeSerif-Tall.woff",
            weight: '400',
            style: 'normal',
        },
        {
            path: "../fonts/awesomeSerif/AwesomeSerif-Tall.woff2",
            weight: '400',
            style: 'normal',
        },
        {
            path: "../fonts/awesomeSerif/AwesomeSerif-MediumTall.woff",
            weight: '500',
            style: 'normal',
        },
        {
            path: "../fonts/awesomeSerif/AwesomeSerif-MediumTall.woff2",
            weight: '500',
            style: 'normal',
        },
        {
            path: "../fonts/awesomeSerif/AwesomeSerif-SemiBoldTall.woff",
            weight: '600',
            style: 'normal',
        },
        {
            path: "../fonts/awesomeSerif/AwesomeSerif-SemiBoldTall.woff2",
            weight: '600',
            style: 'normal',
        }, 
        {
            path: "../fonts/awesomeSerif/AwesomeSerifItalic-LightTall.woff",
            weight: '300',
            style: 'italic',

        },
        {
            path: "../fonts/awesomeSerif/AwesomeSerifItalic-LightTall.woff2",
            weight: '300',
            style: 'italic',

        },
        {
            path: "../fonts/awesomeSerif/AwesomeSerifItalic-Tall.woff",
            weight: '400',
            style: 'italic',
        },
        {
            path: "../fonts/awesomeSerif/AwesomeSerifItalic-Tall.woff2",
            weight: '400',
            style: 'italic',
        },
        {
            path: "../fonts/awesomeSerif/AwesomeSerifItalic-MediumTall.woff",
            weight: '500',
            style: 'italic',
        },
        {
            path: "../fonts/awesomeSerif/AwesomeSerifItalic-MediumTall.woff2",
            weight: '500',
            style: 'italic',
        },
        {
            path: "../fonts/awesomeSerif/AwesomeSerifItalic-SemBdTall.woff",
            weight: '600',
            style: 'italic',
        },
        {
            path: "../fonts/awesomeSerif/AwesomeSerifItalic-SemBdTall.woff2",
            weight: '600',
            style: 'italic',
        }, 
    ],
    variable: '--AwesomeSerif',
})

export const GlobalStyle = createGlobalStyle`
:root{
--equal-paddings: 4rem;
}

* {
color: var(--theme-white-primary);
padding: 0;
margin: 0;
font-family: var(--Inter);
}

html {
scroll-behavior: initial!important;
font-size: 16px;
font-size: 1.1vw;  
}

body {
margin: 0;
width: 100%;
box-sizing: border-box;
-webkit-box-sizing: border-box;
-moz-box-sizing: border-box;
font-size: 1.05rem;
font-family: var(--Inter);
font-weight: 400;
background-color: var(--theme-white);
color: var(--theme-black);
-moz-osx-font-smoothing: grayscale;
overflow-x: hidden;
text-rendering: optimizeLegibility;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
-webkit-text-size-adjust: auto;
-moz-text-size-adjust: auto;
-ms-text-size-adjust: auto;
text-size-adjust: auto;
}

::selection {
color: var(--white) ; 
background-color:  var(--theme-primary-dark-gray);
-webkit-text-fill-color: var(--white)  ;
}

/* scroll bar start */


* {
scrollbar-width: thin;
scrollbar-color: var(--theme-primary-dark-gray) var(--theme-secondary-gray)  ;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 5px;
}

*::-webkit-scrollbar-track {
background-color: var(--theme-primary-dark-gray);
}

*::-webkit-scrollbar-thumb {
background-color:  var(--theme-primary-dark-gray);
border-radius: 1.0625rem;
border: 0px;
}


/* scroll bar end */

h1, h2, h3, h4, h5, h6,
.h1, .h2, .h3, .h4, .h5, .h6{
    font-weight: 600;
}

 
h1, .h1{
    font-size: 3.5rem; 
    line-height: 114.286%;
}
h2, .h2{
    font-size: 2.5rem; 
    line-height: 120%;
}
h3, .h3{
    font-size: 1.75rem; 
    line-height: 120%;
}
h4, .h4{
    font-size: 1.5rem; 
    line-height: 120%;
}
h5, .h5{
    font-size: 1.25rem; 
    line-height: 120%;
}
h6, .h6{
    font-size: 1.125rem; 
    line-height: 146.032% ;
}

 

a,
*::before,
*::after,
img,
span,
input,
button,
.navbar,
.fixedmenu,
.tp-bullet {
    transition: ease-in-out 0.2s;
    -webkit-transition: ease-in-out 0.2s;
    -moz-transition: ease-in-out 0.2s;
    -ms-transition: ease-in-out 0.2s;
    -o-transition: ease-in-out 0.2s;
}

.btn.focus,
.btn:focus,
.form-control:focus {
    -webkit-box-shadow: none;
    box-shadow: none;
}

a,
a:link,
a:visited,
a:active {
    outline: none;
    text-decoration: none var( --theme-primary-dark-gray) ;
}

${'' /* a:hover {
    text-decoration: underline var( --theme-primary-dark-gray) ;
} */}
a{
    color: var(--theme-black);
}


p {
    word-wrap: break-word;
    word-break: break-word;
    font-size: 1.125rem;
    line-height: 160%;
    font-family: var(--Inter);
    margin-bottom: 1rem;
    letter-spacing: -0.0125rem;
    /* -webkit-hyphens: auto;
    hyphens: auto; */
}

li,
p,
span,
b,
strong {
    color: var(--theme-secondary-gray);
}



strong,
b {
    font-weight: 700;
}

ul,
ol {
    padding-left: 1.2rem;
}

${'' /* :is(ul, ol) li:not(:last-child) {
    margin-bottom: 1rem;
} */}

input,
textarea,
select,
button:focus {
    outline: 0;
}



.equal-padding-T{
    padding-top: var(--equal-paddings);
}
.equal-padding-B{
    padding-bottom: var(--equal-paddings);
}

.container{
    max-width: calc(100% - 11rem);
}

.theme-outline{
    outline:1px solid var(--theme-soft-gray);
}

@media screen and (max-width: 992px){
    html{
        font-size: 1.8vw;
    }

    h1, .h1{
    font-size: 3rem; 
}
h2, .h2{
    font-size: 2rem; 
}
h3, .h3{
    font-size: 1.5rem; 
}
h4, .h4{
    font-size: 1.25rem; 
}
h5, .h5{
    font-size: 1.125rem; 
}
h6, .h6{
    font-size: 1.025rem; 
}
.container{
    max-width: calc(100% - 9rem);
}
}

@media screen and (max-width: 768px){
    html{
        font-size: 3vw;
    }
    h1, .h1{
    font-size: 2.1rem; 
}
    .container{
    max-width: calc(100% - 2rem);
}
}

`;

export const CustomBtnWrap = styled.div`
&:has(a){
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
}
& .icon-cta{
    display: inline-flex;
    align-items: center;
    gap:0.5rem;
    font-size: 0.875rem;
    font-weight: 300;
    /* line-height: 142.857%; */
    line-height: 100%;
    padding: 0.75rem 0.88rem ;
    border-radius: 0.375rem;
    border: 1px solid var(--theme-black);
    background-color: var(--theme-white);
    color: var(--theme-black);

    & img{
        height: 1.0625rem;
    }

}
& .cta{
    padding:   0.88rem ;
    border-radius: 0.375rem;
    line-height: 100%;
    background-color: var(--theme-primary-blue);
    color: var(--theme-white);
    font-size: 0.875rem;
    font-weight: 400;
    min-width: 7.375rem;
    display: inline-block;
    text-align:center;
}

& :is(button, a):hover{
    background-color: var(--theme-black);
    color: var(--theme-white);
}

@media screen and (max-width: 768px){
    justify-content: center;
}

`;

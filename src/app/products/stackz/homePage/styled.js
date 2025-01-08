
import { styled } from "styled-components";

export const StackzHeroSection = styled.section`

& h1{
margin: 2rem 0;
}

& .theme-outline{
     margin-top:1px;
}
`;
export const StackzHeroWrap = styled.div``;
export const PillHead = styled.div`
border-radius: 2.375rem;
border: 0.5px solid #DDE0E4;
width: max-content;
padding: 0.75rem 1.31rem;
display: flex;
align-items: center;
gap: 0.38rem;

& span{
    font-size: 1rem;
    font-weight: 400; 
    line-height:164.286%;
    color: var(--theme-black);
}
& img{
    width: 1rem;
    height: 1rem;
}
`;

export const IconList = styled.ul`
display: flex;
justify-content: center;
align-items: center;
gap: 1rem;
list-style: none;
margin-bottom: 0;

body & li{
    margin-bottom: 0 ; 
    display: flex;
    gap: 0.44rem;
    align-items: center;
    color: var(--theme-primary-dark-gray);
    font-size: 1.1rem;
}
& li img{
    width: 1.375rem;
    aspect-ratio: 1/1;
    height: auto;
    margin-top:-4px;
}
`;

export const LibraryItemsTabsSection = styled.section``;
export const TabsNavWrap = styled.div`
display: grid;
grid-template-columns: repeat(5,minmax(5rem,1fr));
grid-gap: 1px;
margin-top:1px;

& :is(button, a){
    background-color:var(--theme-base-white);
    padding: 1.5rem 1.62rem;
    border: 0;
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: -0.01rem;
    line-height: normal;
    color: var(--theme-black);
    outline: 1px solid var(--theme-soft-gray);
    display: inline-block;
    text-align: center;
    &:hover{
        background-color: var(--theme-black);
        color: var(--theme-white);
    }
    &:focus{
        outline:  1px solid var(--theme-soft-gray)!important;
    }
}

& a{
    font-weight: 400;
}

@media screen and (max-width: 992px){
    & button{
        padding: 1rem 1rem;
        line-height: 120%;
    
    }
    
}

@media screen and (max-width: 768px){
    grid-template-columns: 1fr 1fr;
    
    & button{
        padding: 2rem;
        &:last-child{
            grid-column-start: 1;
            grid-column-end: 3;
        }
    }
}

`;
export const TabButton = styled.button`  

body &{

  background-color: ${(props) => (props.active ? "var(--theme-black)" : "var(--theme-base-white)")};
    color: ${(props) => (props.active ? "var(--theme-white)" : "var(--theme-black)")};

    &:hover{
        background-color: ${(props) => (props.active ? "var(--theme-black)" : "var(--theme-accent-light-blue)")};
        color: ${(props) => (props.active ? "var(--theme-white)" : "var(--theme-black)")};
    }
}

`;

export const TabsContentWrap = styled.div`
display: grid;
grid-template-columns: repeat(4,minmax(10rem,1fr));
grid-gap: 1px;
margin-top:1px;
outline: 1px solid var(--theme-soft-gray);

@media screen and (max-width: 992px){
    grid-template-columns: repeat(2,minmax(10rem,1fr));
}
`;

export const MobileTabFilter = styled.button`
background-color:var(--theme-white);
    padding: 2rem;
    border: 0;
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: -0.01rem;
    width: 100%;
    outline: 1px solid var(--theme-soft-gray);
    margin-top: 1px; 
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:focus{
        outline:  1px solid var(--theme-soft-gray)!important;
    }
`;

export const GetItemWrap = styled.div`
display:flex;
justify-content: center;
align-items: center;
gap: 0.5rem;
position: absolute;
bottom: 1.01rem;
left: 50%;
transform: translate(-50%,0);
width: 100%;
opacity: 0;
    pointer-events: none;
    padding: 0 1rem;
    
& button{
    border-radius: 0.33575rem;
    padding: 0.55rem 0.64rem;
    font-size: 0.67144rem;
    font-weight: 300;
    ${'' /* line-height: 166.667%; */}
    line-height: 110%;
    background-color: var(--theme-black);
    color: var(--theme-white);
    border:0;

    &:hover{
    background-color: var(--theme-primary-blue);
    color: var(--theme-white);
    }

&.icon-btn{
    border: 0.895px solid var(--theme-soft-gray);
    background-color: var(--theme-white);
    color: var(--theme-black);
    display: flex;
    align-items: center;
    gap: 0.1rem;
    position: relative;

    & img{
        height: 0.67131rem;
        width: auto;

    }
    &:before{
        content: "Copied";
        position: absolute;
        left: 50%;
        top: calc(-100% - 0.5rem);
        translate: -50% 1rem;
        color: var(--theme-black);
        font-size: 0.85rem;
        line-height: 110%;
        margin-top: 0.1rem;
        display: inline-block;
        padding: 0.5rem;
        background-color: var(--theme-white);
        border-radius: 5px;
        z-index: -1;
        opacity: 0;
        pointer-events: none;
    }
    &.copied:before{
        translate: -50% 0;
        opacity: 1;
    }
    &:hover{
    background-color: var(--theme-black);
    color: var(--theme-white);
}
}

}



@media screen and (max-width: 768px){
    flex-direction: column;
    & button{
        width:100% ;
        font-size: 1rem;
        &.icon-btn{
            justify-content: center;
        }
    }
}
`;

export const ItemCard = styled.div` 
/* padding: 3.37rem 3.92rem;  */
outline: 1px solid var(--theme-soft-gray);
width: 100%;
aspect-ratio: 1/1;
position: relative;
cursor: pointer;
& img{
    width: 100%;
    height: 100%;
    object-fit: scale-down;
}
&:hover{
    background-color: var(--theme-white-smoke);
}
&:hover ${GetItemWrap}{
    opacity: 1;
    pointer-events: auto;
}

@media screen and (max-width: 768px){
    padding: 2.37rem 1.92rem;
}
`;

export const PricingInfoSection = styled.section`

& .theme-outline{
    margin-top: 1px;
}
`;
export const PricingInfoWrap = styled.div`
& .row > div:first-child{
    padding-left: 6.5rem;
    /* padding-right: 6.5rem; */
}

& .bg-elem{
    /* position: absolute;
    right: 0;
    bottom: 0; */
    aspect-ratio: 619.67 / 477.5;
    width:calc(100% - 4.5rem);
    height: auto;
    margin-top: 4.5rem;
}

@media screen and (max-width: 992px){
    & .row > div:first-child{
        padding-left: 6rem;
        padding-right: 6rem;
    }
    & .bg-elem{
        width: calc(100% - 3rem);
        margin-top: 0;
    }
}

@media screen and (max-width: 768px){
    & .row > div:first-child{
        padding-left: 4rem;
        padding-right: 4rem;
    }
}

`;

export const FAQsModalWrap = styled.div`

& .modal-body{
    border-radius: 0;
    border:0;
    background-color: var(--theme-white);
    padding: 3rem;
}
& .modal-content{
    border: 0;
    border-radius: 0;
}
& .btn-close{
    background: none;
    position: absolute;
    top: 1rem;
    right: 1rem;
    &:focus{
        box-shadow: none;
    }
}

& .accordion-body ul{
    list-style: none;
    padding-left: 0;
    margin-bottom: 0;

    & li:not(:last-child){
        margin-bottom:3rem;
    }

    & :is(h3, p){
        font-size: 1rem;
        text-transform: capitalize;
    }
    & h3{
        font-weight: 500;
        color: var(--theme-black);
        margin-bottom: 0.88rem; 
        line-height: 150% ;
    }
    & p{
        font-weight: 400;
        line-height: 125%; 
        margin-bottom: 0; 
    }
}

& .accordion-item:first-of-type>.accordion-header .accordion-button,
& .accordion-item:first-of-type,
& .accordion-item:last-of-type>.accordion-header .accordion-button,
& .accordion-item:last-of-type{
    border-radius: 0;
}

& .accordion-item >.accordion-header .accordion-button{
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 146.032%;
    padding: 1.5rem 2rem;
    color: var(--theme-black);
    transition: 400ms ease-in-out;

    &:focus{
        box-shadow: none;
    }
    &:not(.collapsed){
        background-color: #0000;
        padding-bottom: 0;
        box-shadow: none;
    }
}
& .accordion-body{
    padding: 3rem ;
}

@media screen and (max-width: 768px){
    & .modal-body{
        padding: 2rem;
    }
    & .accordion-item>.accordion-header .accordion-button{
        padding: 1rem 1.5rem;
    }
    & .accordion-body{
        padding: 2rem;
    }
    & .accordion-body ul li:not(:last-child){
        margin-bottom: 2rem;
    }
    & .accordion-body ul{
        & :is(h3, p){
        font-size: 1.1rem;
        }
    }
    & .btn-close{
        top: 0.5rem;
        right: 0.5rem; 
       & img{
        width:1rem;
        height: 1rem;
        object-fit: contain;
       }
    }
}

`;


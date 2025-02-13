import styled from 'styled-components';

export const EdubitsHeroSection = styled.section``;
export const HomeHeroWrap = styled.div`
& h1{
    margin-bottom: 2.5rem;
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
    font-size: 1.125rem;
}
& li img{
    width:  0.97663rem;
    object-fit: contain;
    aspect-ratio: 1/1;
    height: auto;
    margin-top:-4px;
}
`;

export const LibraryItemsTabsSection = styled.section``;
export const TabsNavWrap = styled.div`
    position: relative; 
    width: 50%;
margin: 0 auto;

    &:before, &:after {
    content: "";
    position: absolute;
    top: 50%;
    
    width: 50%;
    height: 1px;
    pointer-events: none;
    background-color: var(--theme-light-yellow);
    translate: 0 -50%;
}
&:before {
    right: 100%;
}
&:after {
    left: 100%; 
}



`;

export const NavRow = styled.div`
display: grid;
grid-template-columns: repeat(4, minmax(10rem, 1fr));
justify-content: center;
align-items: center;

border: 1px solid var(--theme-light-yellow); 
border-radius: 0.5rem;
overflow: hidden; 
& :is(button, a){
    text-align: center;
    padding: 1.38rem 0;
    border:0;
    background-color: #0000;
}
& *:not(:last-child){
    border-right: 1px solid var(--theme-light-yellow);
}
 
`;

export const TabButton = styled.button`
body &{

background-color: ${(props) => (props.active ? "var(--theme-black)" : "#0000")};
  color: ${(props) => (props.active ? "var(--theme-white)" : "var(--theme-black)")};

  &:hover{
      background-color: ${(props) => (props.active ? "var(--theme-black)" : "var(--theme-light-yellow)")};
      color: ${(props) => (props.active ? "var(--theme-white)" : "var(--theme-black)")};
  }
}
`;  
export const TabsContentWrap = styled.div`
display: grid;
grid-template-columns: repeat(4, minmax(10rem, 1fr)); 
grid-gap: 1.55rem;
margin-top: 3.75rem;
margin-bottom: 4rem;
`;
export const MobileTabFilter = styled.button``;
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
    border: 0.895px solid #0000;

    &:hover{
    background-color: var(--theme-white);
    border-color: var(--theme-neutral-gray);
    color: var(--theme-black);
    }

&.icon-btn{
    border: 0.895px solid var(--theme-neutral-gray);
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
position: relative;
border: 0.934px solid var(--theme-light-yellow);
border-radius: 1.16694rem;


& img{
    width: 100%;
    height: auto;
    aspect-ratio: 1/1;
    object-fit: contain;
}

&:hover{
    border-color: var(--theme-dark-yellow);
    background-color: var(--theme-light-cream);
}
&:hover ${GetItemWrap}{
    opacity: 1;
    pointer-events: auto;
}
`;
import {styled} from "styled-components";


export const MainMenuWrap = styled.div`
padding-top: 1px;
`;
export const MenuItems = styled.nav`
width: 100%; 
${'' /* background-color: var(--theme-soft-gray); */}
& ul{
    list-style: none;
    padding-left: 0;
    display: grid;
    grid-template-columns: 1fr 1fr max-content 1fr 1fr;
    align-items: stretch;
    width: 100%;
    margin-bottom:0;
    grid-gap: 1px;
    & li{
        margin-bottom:0!important;
        text-align: center;
        outline:1px solid var(--theme-soft-gray);
        ${'' /* background-color: var(--theme-white); */}
    }
    & li :is(button, a){
        font-family: var(--Nohemi);
        background-color: #fff;
        border:0;
        color: var(--theme-black);
        font-weight:300;
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
    }
    & li:not(:nth-child(3)) :is(button, a){
        padding: 2rem 1.68rem;
        width: 100%;
        
        height: 100%;
        
        letter-spacing: -0.01rem;
        
        /* text-transform: uppercase; */
        font-size: 1rem;
    }
    & li:nth-child(3) a{
        padding: 0.8rem 2.19rem;
        display: block;
    }
    & li:nth-child(3) img{
        width: 3.4375rem;
        height: 3.65638rem;

    }
    & li.info-elem a{ 
        flex-direction: column; 
    }
    & li.info-elem a:after{
        content:"Announcing Soon!";
        position: relative;
        display: inline-block;
        font-size: 0.8rem;
        padding: 0.1rem 0.4rem;
        border-radius: 1rem;
        background-color: var(--theme-selective-yellow);
        color: var(--theme-black);
        font-weight: 400;
        letter-spacing: 0.3px;
        top: 2px;
    }
}

@media screen and (max-width: 768px) {
    & ul{
        grid-template-columns: auto;
        text-align: left;
        & li :is(button, a){
            padding: 2rem  ;
            font-size: 1.1rem;
            text-align: left;
            justify-content: start;
        }
        & li.info-elem a{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }
    }
}
`;

export const MobileMenu = styled.div`
display: flex;
justify-content: space-between; 

&  a{
padding: 1.22rem 1.91rem;
display: flex;
align-items: center;
justify-content: center;

& img{
    width: 2.9375rem;
    height: 3.06482rem;
    object-fit: contain;
}
}
& :is(button, a),
& :is(button, a):focus{
    outline: 1px solid var(--theme-soft-gray);
}

`;
export const MenuToggleBtn = styled.button`
padding:1.78rem 2.2rem;
border:0;
background-color: var(--theme-white);
`;

import { styled } from "styled-components";


export const MainMenuWrap = styled.div`
padding-top: 1.43rem;
`;
export const MenuItems = styled.nav`
width: 100%; 
${'' /* background-color: var(--theme-soft-gray); */}
& ul{
    list-style: none;
    padding-left: 0;  
    width: 100%;
    margin-bottom:0; 
    display: flex;
    justify-content: center;
    align-items: center; 
    & :is(a, button){
        padding:  0.94rem 2.5rem; 
        border: 0;
        background-color: #0000;
        position: relative;
        font-weight: 300;
        font-size: 1rem;
        color: var(--theme-black);
        
    } 
    & li:not(:last-child) :is(a, button){
        &:after{
            content: '/';
            position: absolute;
            top: 50%;
            right: 0;
            transform: translateY(-50%); 
            font-size: 0.75rem;
            font-weight: 300;
        }
    }

}

@media screen and (max-width: 768px) {
 
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

import {styled} from "styled-components";

export const FooterSection = styled.div`
padding-bottom: 1px;
`;
export const FooterWrap = styled.div`

 

@media screen and (max-width: 768px){
    
    & .copyrights-col{
        padding: 2rem;
        text-align: center; 
        p{
            margin-bottom: 0;
        }
    }
}

`;
export const SocialCopyrightsWrap = styled.ul`
padding-left: 0;
margin-bottom: 0;
list-style: none;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
grid-gap: 1.38rem; 

body & li{
margin-bottom: 0;
}
& li{ 
    text-align: center;
}
& li:not(.copyrights-col) a, & li.copyrights-col{
    padding: 2rem 1.63rem;
    border-radius: 1.16688rem;
    border: 1px solid var(--theme-light-yellow);
    display: inline-block;
    width: 100%;
    height: 100%; 
    font-size: 1.375rem;
    font-weight: 500;
    letter-spacing: -0.01375rem; 
}
& li:not(.copyrights-col) a:hover{
    background-color: var(--theme-black);
    color: var(--theme-white);
}
& li.copyrights-col{ 
    /* min-width: 26.875rem; */
    width: 30vw;
    & p{
        margin-bottom: 0;
        font-weight: 300;
        letter-spacing: -0.01375rem;
    }
}


@media screen and (max-width: 992px){
    & li a{
        font-size: 1.125rem;
        padding: 2.5rem 1rem; 
    }
}

@media screen and (max-width: 768px){
    grid-template-columns: 1fr 1fr ;

    & li a{
        padding: 2rem;
    }
}
`;
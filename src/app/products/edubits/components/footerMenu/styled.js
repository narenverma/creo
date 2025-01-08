import {styled} from "styled-components";

export const FooterSection = styled.div`
padding-bottom: 1px;
`;
export const FooterWrap = styled.div`

 

@media screen and (max-width: 768px){
    
    & .copyrights-col{
        padding: 2rem;
        text-align: center;
        outline: 1px solid var(--theme-soft-gray);
        margin-top: 1px;
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
grid-gap: 1px;
margin-top:1px;

body & li{
margin-bottom: 0;
}
& li{
    outline: 1px solid var(--theme-soft-gray);
    text-align: center;
}
& li:not(.copyrights-col) a{
    padding: 2.5rem 1.62rem;
    display: inline-block;
    width: 100%;
    height: 100%; 
    font-size: 1.375rem;
    font-weight: 500;
    letter-spacing: -0.01375rem; 

    &:hover{
    background-color: var(--theme-black);
    color: var(--theme-white);
       }
}
& li.copyrights-col{
    padding: 2.5rem 1.62rem;
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
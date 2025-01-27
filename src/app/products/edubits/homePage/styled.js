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
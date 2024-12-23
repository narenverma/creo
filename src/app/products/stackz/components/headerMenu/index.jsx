"use client";
import Image from 'next/image'
import React, { useEffect } from 'react'
import { MainMenuWrap, MenuItems, MenuToggleBtn, MobileMenu } from './styled'
import Link from 'next/link';
import { Nohemi } from '@/app/products/stackz/assets/css/globalStyle';
// import {Link} from 'react-router-dom';

export default function HeaderMenu() {

  const [isMobile,setIsMobile] = React.useState(false);
  const  [isMenuOpen,setIsMenuOpen] = React.useState(false);
  
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }else{
      setIsMobile(false);
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      }else{
        setIsMobile(false);
      }
    })
  }, []);
    
  return (
    <>
      <MainMenuWrap className={Nohemi.variable}>
        <div className="container">
          <MenuItems> 
           

            <MobileMenu hidden={isMobile ? false : true} >
              <Link href="/products/stackz">
                <Image src={require("../../assets/images/global-images/stackz-logo.svg").default} alt="stackz-logo" ></Image>
              </Link>
              <MenuToggleBtn
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
              {
                isMenuOpen ?
              <Image src={require("../../assets/images/global-images/close-icon.svg").default} alt="hamburger-menu" ></Image>:
              <Image src={require("../../assets/images/global-images/bars-icon.svg").default} alt="hamburger-menu" ></Image>
              }
              </MenuToggleBtn>
            </MobileMenu> 
           
          
            <ul hidden={isMenuOpen || !isMobile  ? false : true}>
              <li class="info-elem">
              <Link href="/">Pricing </Link>
              </li>
              <li><Link href="/">Terms</Link></li>
              {!isMobile &&
              <li>
                <Link href="/products/stackz">
                  <Image src={require("../../assets/images/global-images/stackz-logo.svg").default} alt="stackz-logo" ></Image>
                </Link>
              </li>
              }
              <li><button
                type='button'
                data-bs-toggle="modal" data-bs-target="#faqsModal"
              >FAQ</button></li>
              <li><Link href="/">Figma Files</Link></li>
            </ul>
          </MenuItems>
        </div>
      </MainMenuWrap>
    </>
  )
}

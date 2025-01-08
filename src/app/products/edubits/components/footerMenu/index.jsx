"use client";

import React, { useEffect } from 'react'
import { FooterSection, FooterWrap, SocialCopyrightsWrap } from './styled'
import Link from 'next/link';
import { Nohemi } from '@/app/products/stackz/assets/css/globalStyle';

export default function FooterMenu() {

    const [isMobile,setIsMobile] = React.useState(false); 
      
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
        <FooterSection className={ Nohemi.variable}>
            <div className="container">
                <FooterWrap>
                    <SocialCopyrightsWrap>
                        <li><Link href="https://x.com/wearehybreed" target="_blank">Twitter/X</Link></li>
                        <li><Link href="https://www.instagram.com/wearehybreed" target="_blank">Instagram</Link></li>
                        {
                            !isMobile &&
                            <li className="copyrights-col"><p className='theme-text-neutral-gray'>© 2024 <Link href="https://weare.hybreed.co/" target="_blank" className='theme-text-neutral-gray text-decoration-underline'>Hybreed.co</Link></p></li>
                        }
                        <li><Link href="https://in.linkedin.com/company/wearehybreed" target="_blank">Linkedin</Link></li>
                        <li><Link href="https://dribbble.com/hybreed" target="_blank">Dribbble</Link></li>
                    </SocialCopyrightsWrap>
                     
                    <div className="copyrights-col" hidden={isMobile ? false : true}>
                    <p className='theme-text-neutral-gray'>© 2024 <Link href="https://weare.hybreed.co/" target="_blank" className='theme-text-neutral-gray text-decoration-underline'>Hybreed.co</Link></p>
                    </div>
                     
                </FooterWrap>
            </div>
        </FooterSection>
    </>
  )
}

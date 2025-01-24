"use client";
import { checkReadyState } from '@/app/mainComponents/utilities/functions';
import React, { useEffect } from 'react'
import { EdubitsHeroSection, HomeHeroWrap, IconList } from './styled';
import { AwesomeSerif, InterFont } from '../assets/css/globalStyle';
import Image from 'next/image';

export default function EdubitsHome() {
  useEffect(() => {
    checkReadyState();
  }, [])
  return (
    <>
      <div className={ AwesomeSerif.variable  +" "+ InterFont.variable }>
        <EdubitsHeroSection className="hero-section">
          <div className="container">
            <div className="equal-padding-T equal-padding-B">
              <HomeHeroWrap>
                <h1 className="hero-head text-center">Elevate Education Designs <br />
                  with Ready-to-Use Assets</h1>

                <IconList  >
                  <li>
                    <Image src={require("../assets/images/global-images/check-icon-with-circle.svg").default} alt="Figma logo" ></Image>
                    Vectors</li>
                  <li>
                    <Image src={require("../assets/images/global-images/check-icon-with-circle.svg").default} alt="Figma logo" ></Image>
                    Easy-to-use</li>
                  <li>
                    <Image src={require("../assets/images/global-images/check-icon-with-circle.svg").default} alt="Figma logo" ></Image>
                    Customisable</li>
                </IconList>

              </HomeHeroWrap>
            </div>
          </div>
        </EdubitsHeroSection>
      </div>
    </>
  )
}

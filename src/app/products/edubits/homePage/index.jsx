"use client";
import { checkReadyState } from '@/app/mainComponents/utilities/functions';
import React, { useEffect, useState } from 'react'
import { EdubitsHeroSection, GetItemWrap, HomeHeroWrap, IconList, ItemCard, LibraryItemsTabsSection, MobileTabFilter, NavRow, TabButton, TabsContentWrap, TabsNavWrap } from './styled';
import { AwesomeSerif, InterFont } from '../assets/css/globalStyle';
import Image from 'next/image';
import Link from 'next/link';
import { CopyButton } from '../../productUtilities/copyFigma';
import DownloadButton from '../../productUtilities/downloadBtn';
import { filterTabs, libraryItems } from '../components/utilities/apis';

export default function EdubitsHome() {

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // checkReadyState();

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
      
            // Dynamically load the Bootstrap JS file only on the client
            if (typeof window !== "undefined") {
                import("bootstrap/dist/js/bootstrap.bundle.min.js")
                    .then(() => {
                        console.log("Bootstrap JS loaded successfully");
                    })
                    .catch((err) => {
                        console.error("Failed to load Bootstrap JS:", err);
                    });
            }
        }, []);
    
        const [openTabsFilter, setOpenTabsFilter] = useState(false);
    
        const [activeTab, setActiveTab] = useState("all");
    
    
        // Filter items based on the active tab
        const filteredItems =
            activeTab === "all"
                ? libraryItems
                : libraryItems.filter((item) => item.itemCategory.includes(activeTab)); 


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

        <LibraryItemsTabsSection>
                    <div className="container">
                    
                    <MobileTabFilter hidden={isMobile ? false : true}
                    onClick={() => setOpenTabsFilter(!openTabsFilter)}
                    >
                    Select an option <Image src={require("../assets/images/global-images/chevron-down-arrow-icon.svg").default} alt='Arrow' style={{rotate: openTabsFilter ? "180deg" : "0deg"}}></Image>
                    </MobileTabFilter>
                    

                    {
                        openTabsFilter || !isMobile ?
                        <TabsNavWrap onClick={() => setOpenTabsFilter(!openTabsFilter)}>
                        <NavRow>
                            {
                                filterTabs.map((item, index) => (

                                    <TabButton
                                        key={index}
                                        active={activeTab === item.id ? item.id : undefined}
                                        onClick={() => setActiveTab(item.id)}
                                    >{item.label}
                                        {
                                            item.id === "all" ?
                                                " (" + libraryItems.length + ")"
                                                :

                                                libraryItems.filter((items) => items.itemCategory.includes(item.id)).length !== 0 ?
                                                    " (" + libraryItems.filter((items) => items.itemCategory.includes(item.id)).length + ")" : ""

                                        }
                                    </TabButton>

                                ))
                            }
                            <Link
                                href="https://www.figma.com/community/file/1456873520751418189/stackz-fintech-design-resources" target="_blank"
                            >I want all 🤩</Link>
                            </NavRow>
                        </TabsNavWrap>
                        : ""
                    }
                        <TabsContentWrap>
                            {
                              
                                filteredItems.map((item, index) => (
                                    <ItemCard key={index}>
                                        <Image src={require(`../assets/images/library-items/png-images/${item.imageName}.png`)} alt={"Image " + item.id}   ></Image>

                                        <GetItemWrap>
                                            <CopyButton
                                                figmaCode={item.imageFigma}
                                                buttonText="Copy Figma"
                                                classNames="icon-btn"
                                                iconUrl={require("../assets/images/global-images/figma-icon.svg").default} />
                                            <DownloadButton
                                                fileUrl={`/edubits-library-images-download/svg-images/free/${item.imageName}.svg`}
                                                fileName={item.imageName + ".svg"}
                                            ></DownloadButton>
                                            {/* <Link href={`../assets/images/library-items/svg-images/${item.imageSvg}`} download={true}>Download</Link> */}

                                        </GetItemWrap>
                                    </ItemCard>
                                )) 
                            }
                        </TabsContentWrap>
                    </div>
                </LibraryItemsTabsSection>

      </div>
    </>
  )
}

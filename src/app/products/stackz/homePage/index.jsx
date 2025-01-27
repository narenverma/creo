"use client";
import React, { useEffect, useState } from 'react'
import { FloatingCTAWrap, GetItemWrap, IconList, ItemCard, LibraryItemsTabsSection, MobileTabFilter, PillHead, PricingInfoSection, PricingInfoWrap, StackzHeroSection, StackzHeroWrap, TabButton, TabsContentWrap, TabsNavWrap } from './styled'
import Image from 'next/image'
import { CustomBtnWrap, Nohemi } from '../assets/css/globalStyle';
import { faqsList, filterTabs, libraryItems } from '../components/utilities/apis';
import Link from 'next/link';
import { CopyButton } from '../../productUtilities/copyFigma';
import DownloadButton from '../../productUtilities/downloadBtn';
import { FAQsModalWrap } from './styled'; 
// import { checkReadyState } from '@/app/mainComponents/utilities/functions';
// import TagManager from 'react-gtm-module';




export default function StackzHome() {
    

const [isMobile,setIsMobile] = React.useState(false);
  
  useEffect(() => {

    

    // const tagManagerArgs = {
    //     gtmId: 'GTM-N699QL23',
    //     dataLayer: {
    //         userId: '001',
    //         userProject: 'project'
    //     }
    // }

    // TagManager.initialize(tagManagerArgs);

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

            <div className={Nohemi.variable}>
                <StackzHeroSection className="hero-section">
                    <div className="container">
                        <div className="equal-padding-T equal-padding-B theme-outline">
                            <StackzHeroWrap>

                                <PillHead className="mx-auto"> 
                                    <Image src={require("../assets/images/global-images/figma-icon.svg").default} alt="Figma logo" ></Image>
                                    <span>Made for Figma</span>
                                </PillHead>

                                <h1 className=" hero-head text-center">
                                    Ultimate Fintech Toolkit for <br />
                                    Designers and Creators
                                </h1>

                                <IconList  >
                                    <li>
                                        <Image src={require("../assets/images/global-images/check-yellow-icon.svg").default} alt="Figma logo" ></Image>
                                        Vectors</li>
                                    <li>
                                        <Image src={require("../assets/images/global-images/check-yellow-icon.svg").default} alt="Figma logo" ></Image>
                                        Easy-to-use</li>
                                    <li>
                                        <Image src={require("../assets/images/global-images/check-yellow-icon.svg").default} alt="Figma logo" ></Image>
                                        Customisable</li>
                                </IconList>

                            </StackzHeroWrap>
                        </div>
                    </div>
                </StackzHeroSection>

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
                                                fileUrl={`/library-images-download/svg-images/free/${item.imageName}.svg`}
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

                <PricingInfoSection >
                    <div className=" container">
                        <div className=" theme-outline theme-bg-accent-light-blue position-relative">
                            <PricingInfoWrap>
                                <div className="row align-items-center">
                                    <div className="col-lg-6 equal-padding-T equal-padding-B">

                                        <h2 className="mb-4 text-md-start text-center">
                                            Unlock Speed and Creativity with Pre-Built Figma Designs
                                        </h2>
                                        <CustomBtnWrap  >
                                            <Link href="https://www.figma.com/design/VpTmQUmTaAgzHDhgWK1Edc/Stackz%3A-Fintech-Website-Template?node-id=518-6681&t=FbOh0mTr4Pb8DqzY-1" 
                                            target='_blank'
                                            className="icon-cta">
                                                <Image src={require("../assets/images/global-images/figma-icon.svg").default} alt="Figma logo" ></Image>
                                                Preview in Figma</Link>
                                            <Link href="https://hybreed.gumroad.com/l/creoui-stackz-fintech-website-template" target="_blank" className="cta">Buy Now</Link>
                                        </CustomBtnWrap>
                                    </div>
                                    <div className="col-lg-6 text-end">
                                        <Image className="bg-elem" src={require("../assets/images/global-images/unlock-speed-and-creativity-with-pre-built-figma-designs-bg-image.png")} alt="Unlock Speed and Creativity with Pre-Built Figma Designs"></Image>

                                    </div>
                                </div>

                            </PricingInfoWrap>
                        </div>
                    </div>
                </PricingInfoSection>


                {/* <!-- Modal --> */}
                <FAQsModalWrap>

                <div className="modal fade" id="faqsModal" tabIndex="-1" aria-labelledby="faqsModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered ">
                        <div className="modal-content">
                            <div className="modal-body">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                    <Image src={require("../assets/images/global-images/close-icon.svg").default} alt="Close"></Image>
                                </button>
                                <h2 className="h3 text-center mb-4">Questions We Saw Coming</h2>
                                <div className="accordion" id="faqsAccordionWrap">
                                    {
                                        faqsList.map((item, index) => (

                                            <div className="accordion-item" key={index}>
                                                <h2 className="accordion-header">
                                                    <button className={index === 0 ? "accordion-button" : "accordion-button  collapsed"} type="button" data-bs-toggle="collapse" data-bs-target={"#" + item.category} aria-expanded="false" aria-controls={item.category}>
                                                        {item.categoryName}
                                                    </button>
                                                </h2>
                                                <div id={item.category} className={index === 0 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#faqsAccordionWrap">
                                                    <div className="accordion-body">
                                                        <ul>
                                                            {
                                                                item.content.map((childItem, index) => (
                                                                    <li key={index}>
                                                                        <h3>Q. {childItem.question}</h3>
                                                                        <p>A. {childItem.answer}</p>
                                                                    </li>
                                                                ))
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </FAQsModalWrap>
                <FloatingCTAWrap  >
                <div className="container">

                <div className=" theme-outline   position-relative p-4">
                <CustomBtnWrap  className='justify-content-center'>
                    <Link href="https://buymeacoffee.com/creoui" target='_blank' className="icon-cta">
                    <Image src={require("../assets/images/global-images/coffee-icon.svg").default} alt="Coffee logo" ></Image>
                    Support Us</Link>
                    <Link href="https://www.producthunt.com/posts/stackz-by-creo?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-stackz&#0045;by&#0045;creo" target="_blank" style={{backgroundColor:" #0000!important",}}><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=778192&theme=light&t=1737971963722" alt="Stackz&#0032;by&#0032;CREO - Design&#0032;assets&#0032;for&#0032;startup&#0032;owners&#0032;&#0038;&#0032;fast&#0045;paced&#0032;designers | Product Hunt" style={{width: "auto", height: "2.66rem",}} width="auto" height="2.66rem" /></Link>
                </CustomBtnWrap>
                </div>
                </div>
                </FloatingCTAWrap>
            </div>

        </>
    )
}

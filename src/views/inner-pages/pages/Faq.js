"use client";
import React, { Fragment } from 'react'
import Link from "next/link"



//componets
import ThemeMenuThree from "@/components/header/ThemeMenuThree"
import PageTitle from "@/components/page-title/PageTitle"
import FAQ from "@/components/faq/FAQ"
import NewsletterTwo from "@/components/call-to-action/NewsletterTwo"
import FooterThree from "@/components/footer/FooterThree"


const Faq = () => {
    return (
        <Fragment>
            <div className="main-page-wrapper">
                

                {/* ThemeMenuThree */}
                <ThemeMenuThree />
                {/* ThemeMenuThree */}

                {/* PageTitle */}
                <PageTitle title="FAQ" />
                {/* PageTitle */}

                {/*faq start*/}
                <div className="faq-que-list pt-150 pb-115 pt-lg-60 pb-lg-60">
                    <div className="container">
                        <div className="row gx-4 gx-xxl-5">
                            <div className="col-md-6">
                                <FAQ />
                            </div>
                            <div className="col-md-6">
                                <FAQ />
                            </div>
                        </div>
                        <div className="row gx-4 gx-xxl-5 accordion-style-two justify-content-center mt-70">
                            <div className="col-lg-10 col-md-10">
                                <FAQ />
                            </div>
                        </div>
                        <div className="row gx-4 gx-xxl-5">
                            <div className="col-lg-12 text-center mb-25">
                                <Link className="theme_btn" href="/faq">Add Your Questions</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/*faq end*/}


                {/*techy-newsletter start*/}
                <NewsletterTwo />
                {/*techy-newsletter end*/}

                {/* FooterThree start */}
                <FooterThree />
                {/* FooterThree end */}

            </div>

        </Fragment>
    )
}

export default Faq
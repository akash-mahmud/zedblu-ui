"use client";
import React, { Fragment } from 'react'
//componets
import ThemeMenuThree from "@/components/header/ThemeMenuThree"
import PageTitle from "@/components/page-title/PageTitle"
import NewsletterTwo from "@/components/call-to-action/NewsletterTwo"
import FooterThree from "@/components/footer/FooterThree"
import Link from "next/link"


const ComingSoon = () => {
    return (
        <Fragment>
            <div className="main-page-wrapper">
                

                {/* ThemeMenuThree */}
                <ThemeMenuThree />
                {/* ThemeMenuThree */}

                {/* PageTitle */}
                <PageTitle title="Coming Soon" />
                {/* PageTitle */}

                {/*coming-soon-page start*/}
                <div className="coming-soon-page pt-150 pb-115 pt-lg-60 pb-lg-20">
                    <img className="coming-shape d-none d-xl-inline-block" src="/assets/img/shape/line-round-12g.svg" alt="Shape" />
                    <div className="container">
                        <div className="row gx-4 gx-xxl-5 align-items-center">
                            <div className="col-lg-5 col-md-6">
                                <div className="coming-page-wrapper mb-40">
                                    <h2 className="sect-title text-white">Coming Soon . . .</h2>
                                    <p className="text-white">Holisticly coordinate user-centric resources through
                                        client-centric content.
                                        Completely embrace intermandated models for pandemic supply chains.
                                        Synergistically facilitate.</p>
                                    <h3 className="text-white">Our Website Launched In:</h3>
                                    <Link className="theme_btn" href="/">Back To Home</Link>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-6">
                                <div className="under-construction-wrapper mb-40">
                                    <img className="w-100" src="/assets/img/ilustration/ilus-04.svg" alt="Ilustration" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*coming-soon-page end*/}

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

export default ComingSoon
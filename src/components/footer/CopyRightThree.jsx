"use client";
import React,{Fragment} from 'react'
import Link from "next/link"


import SocialOne from '../social/SocialOne'


const servicesContent = [
    {
        name: 'FAQ',
        routerPath: '/faq',
    },
    {
        name: 'Terms & Conditions',
        routerPath: '/faq',
    },
    {
        name: 'Privacy Policy',
        routerPath: '/faq',
    },
]

/**
 * @param {{ global?: import("@/types/strapi").GlobalContent | null }} props
 */
const CopyRightThree = ({ global = null }) => {
  const siteName = global?.siteName || "Zedblu";

  return (
    <Fragment>
        <div className="copyright-three">
            <div className="container">
                <div className="row gx-4 gx-xxl-5 pt-60 align-items-center">
                    <div className="col-xl-4 col-lg-6 pb-30">
                        <ul
                            className="fot-list text-center d-sm-flex align-items-center justify-content-center justify-content-lg-start">
                           {servicesContent.map((val,i)=>(
                             <li key={i}>
                                <Link href={val.routerPath}>{val.name}</Link>
                            </li>
                           ))}
                        </ul>
                    </div>
                    <div className="col-xl-4 col-lg-6  text-center pb-30">
                        <p className="text-white mb-20">
                            © {new Date().getFullYear()} {siteName}, All Rights Reserved</p>
                    </div>
                    <div
                        className="col-xl-4 col-lg-6 d-flex justify-content-center justify-content-lg-start justify-content-xl-end pb-30">
                            {/* SocialOne */}
                            <SocialOne />
                            {/* SocialOne */}
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default CopyRightThree
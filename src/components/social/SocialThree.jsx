"use client";
import React,{Fragment} from 'react'
import Link from "next/link"


const socialContent = [
    {
        icon: 'fab fa-facebook-f',
        routerPath:'https://www.facebook.com/',
    },
    {
        icon: 'fab fa-twitter',
        routerPath:'https://twitter.com/',
    },
    {
        icon: 'fab fa-linkedin-in',
        routerPath:'https://www.linkedin.com/',
    },
    {
        icon: 'fab fa-youtube',
        routerPath:'https://www.youtube.com/',
    },
]

const SocialThree = () => {
    return (
        <Fragment>
            <div className="team-social-three mb-30">
               {socialContent.map((val, i)=>(
                 <Link key={i} href={val.routerPath}>
                    <i className={val.icon}/>
                </Link>
               ))}
            </div>
        </Fragment>
    )
}

export default SocialThree
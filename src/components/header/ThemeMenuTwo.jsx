"use client";
import React, { Fragment, useState, useEffect} from 'react'
import Link from "next/link"
import SearchModal from '../search-modal/SearchModal';
import ThemeMainMenu from './ThemeMainMenu'
import SideBar from '../sidebar/SideBar'
import MobileMenu from './MobileMenu'


const ThemeMenuTwo = ({ global }) => {
    const [sticky, setSticky] = useState(false);
    const [modalIsopen, setOpen] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    const [menu, setMenu] = useState("")
    const logoSrc = global?.logo?.url
      ? (global.logo.url.startsWith('http') ? global.logo.url : `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${global.logo.url}`)
      : '/assets/img/logo/header-logo-1.png';

    const openModal =()=>{
        setOpen(true);
    }
    const closeModal =()=>{
        setOpen(false);
    }

    const openSidebar =()=>{
        setShowSidebar(true)
    }
    const closeSidebar =()=>{
        setShowSidebar(false)
    }
    const showMobilemenu =()=>{
        setMenu('show')
    }
    const hideMobilemenu =()=>{
        setMenu()
    }

    useEffect(() => {
        const stickyMenu = () => {
            if (window.scrollY >= 60) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };
        stickyMenu();
        window.addEventListener('scroll', stickyMenu);
        return () => window.removeEventListener('scroll', stickyMenu);
    }, []);
  return (
    <Fragment>
        <SearchModal isOpen={modalIsopen} onClick={closeModal}/>
        <SideBar onClick={closeSidebar} value={showSidebar} />
        <header className="theme-main-menu theme-menu-two pt-md-25 pt-40">
            <div className="top-header pb-20">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-6 text-start">
                            <div className="logo-area">
                                <Link href="/"><img src={logoSrc} alt={global?.siteName || "Header-logo"} /></Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-6 text-end">
                            <ul className="right-nav mb-0 d-flex align-items-center justify-content-end">
                                <li className="search-area">
                                    <a className="search_input" href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop" onClick={openModal}>
                                        <i className="bi bi-search" />
                                    </a>
                                </li>
                                <li className="d-none d-lg-inline-block">
                                    <div className="hamburger-menu">
                                        <div className="d-none d-lg-inline-block">
                                            <a className="round-menu" href="#" onClick={openSidebar}>
                                                <i className="bi bi-list"/>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={sticky?"main-header-area sticky-menu":"main-header-area"}>
                <div className="container">
                    <div className="row gx-4 gx-xxl-5 align-items-center">
                        <div className="col-6 d-lg-none d-md-block">
                            <div className="hamburger-menu">
                                <a className="round-menu d-lg-none" href="#" onClick={showMobilemenu}>
                                    <i className="bi bi-list"/>
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8 d-none d-lg-block">
                            <nav className="navbar navbar-expand-lg">
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ThemeMainMenu />
                                </div>
                            </nav>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-6 text-end">
                            <ul className="right-nav mb-0 d-flex align-items-center justify-content-end">
                                <li className="d-none d-md-inline-block">
                                    <Link className="theme_btn style-two" href="/contact">
                                        Get a Quote
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* /.theme-main-menu */}
            <MobileMenu onClick={hideMobilemenu} active={menu} /> 
        </header>
    </Fragment>
  )
}

export default ThemeMenuTwo
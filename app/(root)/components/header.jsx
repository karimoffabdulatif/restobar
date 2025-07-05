'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import LanguageIcon from '@mui/icons-material/Language'
import { usePathname } from 'next/navigation'

export default function Header() {
	const [selectedLang, setSelectedLang] = useState("O'z")
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)
	const [isScrolled, setIsScrolled] = useState(false)
	const [openLangDesktop, setOpenLangDesktop] = useState(false)
	const [openLangMobile, setOpenLangMobile] = useState(false)

	const langRefDesktop = useRef(null)
	const langRefMobile = useRef(null)
	const pathname = usePathname()

	const languages = [
		{ label: "O'z", icon: "/pngegg.png", name: "UZ", Description: "O'zbekcha" },
		{ label: "Ру", icon: "/ru.png", name: "RU", Description: "Русский" },
		{ label: "Eng", icon: "/en.png", name: "EN", Description: "English" },
	]

	const selectedLangObj = languages.find(lang => lang.label === selectedLang)

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (langRefDesktop.current && !langRefDesktop.current.contains(event.target)) {
				setOpenLangDesktop(false)
			}
			if (langRefMobile.current && !langRefMobile.current.contains(event.target)) {
				setOpenLangMobile(false)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	const handleLanguageChange = (langLabel) => {
		setSelectedLang(langLabel)
		setOpenLangDesktop(false)
		setOpenLangMobile(false)
	}

	return (
		<header className={`fixed w-full z-50 h-[85px] text-white mt-[-3px] transition-colors duration-300 ${isScrolled ? 'bg-[#0F172B]/98' : 'bg-transparent'}`}>
			<div className="container mx-auto px-2 sm:px-14 mt-[-48px] flex items-center justify-between py-4 sm:py-2 relative">

				{/* Logo */}
				<div className="flex ml-3 sm:ml-0 w-[140px] items-center mt-4 sm:mt-0  sm:w-[35%]">
					<Image
						src="/mobile-logo.png"
						alt="Logo"
						width={170}
						height={170}
						className="transition-transform duration-400 hover:scale-110"
					/>
				</div>

				{/* Desktop menyu */}
				<nav className="hidden lg:flex w-[65%] justify-end items-center gap-14">
					<ul className="flex gap-8 sm:text-[18px] font-medium">
						{[
							{ href: '/', name: 'Home' },
							{ href: '', name: 'News' },
							{ href: '/category', name: 'Category' },
							{ href: '/home#about', name: 'About Us' },
							{ href: '/contact', name: 'Contact' },
						].map(({ href, name }) => {
							const isActive =
								pathname === href || (href.includes('#about') && pathname === '/home')

							return (
								<li key={href} className="relative">
									<Link
										href={href}
										className={`
          relative inline-block px-1 transition duration-300 hover:scale-110
          ${isActive ? 'text-amber-500' : 'text-white hover:text-amber-500'}
          after:content-[''] after:absolute after:left-1/2 after:bottom-0
          after:h-[2px] after:bg-amber-500 after:w-0 after:transition-all after:duration-300
          hover:after:left-0 hover:after:w-full
        `}
									>
										{name}
									</Link>

									{name === 'News' && (
										<span className="absolute -top-1 animate-pulse  w-[9px] h-[9px] bg-red-500 rounded-full"></span>
									)}
								</li>
							)
						})}
					</ul>


					{/* Til tanlash (desktop) */}
					<div className="relative" ref={langRefDesktop}>
						<button
							onClick={() => setOpenLangDesktop(!openLangDesktop)}
							className={`flex items-center gap-2 rounded-full border-[0.7px] px-2 py-1 text-lg transition duration-300 shadow-md group hover:bg-amber-300/30 ${openLangDesktop ? 'border-amber-500' : 'border-gray-400'
								}`}
						>
							<span className="flex items-center text-gray-400 transition duration-300 group-hover:text-amber-500">
								<LanguageIcon />
							</span>
							<span className="text-sm font-semibold">{selectedLangObj?.name}</span>
							<svg
								className={`w-4 h-4 transition-transform duration-200 ${openLangDesktop ? 'rotate-180' : 'rotate-0'} group-hover:text-amber-500`}
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								viewBox="0 0 24 24"
							>
								<path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
							</svg>
						</button>

						{openLangDesktop && (
							<ul className="absolute left-0 mt-2 bg-[#0F172B] text-white font-semibold border border-gray-400 rounded-2xl p-2 shadow-lg w-40 z-50 overflow-hidden transition-all duration-300">
								{languages.map(lang => (
									<li
										key={lang.label}
										onClick={() => handleLanguageChange(lang.label)}
										className={`px-3 py-2 rounded-[9px] cursor-pointer transition duration-200 ${selectedLang === lang.label ? 'bg-amber-400/30 border-0.5 border-amber-500' : 'hover:bg-amber-200/30 '
											}`}
									>
										<div className="flex items-center gap-2">
											<span className="text-amber-500">{lang.name}</span>
											<span className="text-[14px] text-gray-300">{lang.Description}</span>
										</div>
									</li>
								))}
							</ul>
						)}
					</div>
				</nav>

				{/* Mobil menyu tugmasi */}
				<button onClick={() => setIsSidebarOpen(true)} className="lg:hidden text-white pr-4 text-4xl">
					<HiMenu />
				</button>

				{/* Mobil menyu */}
				<div className={`fixed top-0 left-0 w-full bg-[#0F172B] text-white z-[999] overflow-hidden transition-all duration-300 ease-in-out ${isSidebarOpen ? 'max-h-[1000px]' : 'max-h-0'}`}>
					<div className="flex justify-between items-center px-6 border-b border-gray-600">
						<Image src="/mobile-logo.png" alt="Logo" width={90} height={70} />
						<button onClick={() => setIsSidebarOpen(false)} className="text-white text-3xl">
							<HiX />
						</button>
					</div>

					<ul className="flex flex-col gap-4 text-xl font-medium p-6">
						{[
							{ href: '/', name: 'Home' },
							{ href: '/menu', name: 'Menu' },
							{ href: '/about', name: 'About Us' },
							{ href: '/contact', name: 'Contact' },
						].map(({ href, name }) => (
							<li key={href}>
								<Link href={href} onClick={() => setIsSidebarOpen(false)}>
									<span
										className={`block text-xl px-4 py-2 rounded-md transition ${pathname === href ? 'text-amber-500' : 'text-white hover:text-amber-500'
											}`}
									>
										{name}
									</span>
								</Link>
							</li>
						))}
					</ul>

					{/* Til tanlash (mobil) */}
					<div className="relative ml-10 mt-4 mb-4" ref={langRefMobile}>
						<button
							onClick={() => setOpenLangMobile(!openLangMobile)}
							className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-md text-lg transition duration-300 shadow-md"
						>
							<span>{selectedLangObj?.name}</span>
							<svg className={`w-4 h-4 transition-transform duration-200 ${openLangMobile ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
							</svg>
						</button>

						{openLangMobile && (
							<ul className="mt-2 bg-white text-black border border-gray-200 rounded-md shadow-lg w-40 z-50 overflow-hidden transition-all duration-300">
								{languages.map(lang => (
									<li
										key={lang.label}
										onClick={() => handleLanguageChange(lang.label)}
										className={`flex items-start flex-col gap-1 px-4 py-2 cursor-pointer transition ${selectedLang === lang.label ? 'bg-amber-100 border-l-4 border-amber-500' : 'hover:bg-amber-100'
											}`}
									>
										<span>{lang.name}</span>
										<span className="text-[12px] text-gray-500">{lang.Description}</span>
									</li>
								))}
							</ul>
						)}
					</div>

					<div onClick={() => setIsSidebarOpen(false)} className="border w-[100px] py-[2px] mb-2 bg-white text-black text-center mx-auto rounded cursor-pointer hover:bg-amber-100 transition">
						Close
					</div>
				</div>
			</div>
		</header>
	)
}

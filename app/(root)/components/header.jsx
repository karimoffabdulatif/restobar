'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import LanguageIcon from '@mui/icons-material/Language';

export default function Header() {
	const [selectedLang, setSelectedLang] = useState("O'z")
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)
	const [isScrolled, setIsScrolled] = useState(false)
	const [openLangDesktop, setOpenLangDesktop] = useState(false)
	const [openLangMobile, setOpenLangMobile] = useState(false)

	const langRefDesktop = useRef(null)
	const langRefMobile = useRef(null)

	const languages = [
		{ label: "O'z", icon: "/pngegg.png", name: "UZ" },
		{ label: "Ру", icon: "/ru.png", name: "RU" },
		{ label: "Eng", icon: "/en.png", name: "ENG" },
	]

	const sortedLanguages = [
		...languages.filter(lang => lang.label === selectedLang),
		...languages.filter(lang => lang.label !== selectedLang),
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

	const handleLanguageChange = (lang) => {
		setSelectedLang(lang)
		setOpenLangDesktop(false)
		setOpenLangMobile(false)
	}

	return (
		<header className={`fixed w-full z-50 h-[78px] text-white mt-[-3px] transition-colors duration-300 ${isScrolled ? 'bg-[#0F172B]' : 'bg-transparent'}`}>
			<div className="container mx-auto px-2 sm:px-14 mt-[-52px] flex items-center justify-between py-4 sm:py-2 relative">

				{/* Logo */}
				<div className="flex ml-3 sm:ml-0 w-[140px] items-center mt-4 sm:mt-0 sm:w-[35%]">
					<Image src="/mobile-logo.png" alt="Logo" width={170} height={170} />
				</div>

				{/* Desktop menyu */}
				<nav className="hidden lg:flex w-[65%] justify-end items-center gap-14 ">
					<ul className="flex gap-8 sm:text-[20px] font-medium">
						<li><Link href="/" className="text-amber-500">Home</Link></li>
						<li><Link href="/category" className="hover:text-amber-500 transition">Category</Link></li>
						<li><Link href="/home#about" className="hover:text-amber-500 transition">About Us</Link></li>
						<li><Link href="/contact" className="hover:text-amber-500 transition">Contact</Link></li>
					</ul>

					{/* Til tanlash (desktop) */}
					<div className="relative" ref={langRefDesktop}>
						<button
							onClick={() => setOpenLangDesktop(!openLangDesktop)}
							className="flex items-center gap-2 rounded-full border-2 border-gray-400 hover:text-amber-600 hover:border-amber-600 text-white px-4 py-1.5  text-lg transition duration-300 shadow-md "
						>
							<span className="flex items-center text-gray-400 ">
								<LanguageIcon />
							</span>
							{selectedLangObj?.name}
							<svg
								className={`w-4 h-4 transition-transform duration-200 ${openLangDesktop ? 'rotate-180' : 'rotate-0'}`}
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								viewBox="0 0 24 24"
							>
								<path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
							</svg>
						</button>

						{openLangDesktop && (
							<ul className="absolute left-0 mt-2 bg-white text-black font-semibold border border-gray-200 rounded-md shadow-lg w-24 z-50 overflow-hidden transition-all duration-300">
								{sortedLanguages.map(lang => (
									<li
										key={lang.label}
										onClick={() => handleLanguageChange(lang.label)}
										className="flex items-center gap-2 px-4 py-2 hover:bg-amber-100 cursor-pointer transition"
									>
										<span>{lang.name}</span>
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
						{["/", "/menu", "/about", "/contact"].map((path, index) => {
							const names = ["Home", "Menu", "About Us", "Contact"]
							return (
								<li key={path}>
									<Link href={path} onClick={() => setIsSidebarOpen(false)}>
										<span className="block text-white hover:text-amber-500 text-xl px-4 py-2 rounded-md transition">
											{names[index]}
										</span>
									</Link>
								</li>
							)
						})}
					</ul>

					{/* Til tanlash (mobil) */}
					<div className="relative ml-10 mt-4 mb-4" ref={langRefMobile}>
						<button
							onClick={() => setOpenLangMobile(!openLangMobile)}
							className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-md text-lg transition duration-300 shadow-md"
						>
							{selectedLangObj?.name}
							<svg className={`w-4 h-4 transition-transform duration-200 ${openLangMobile ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
							</svg>
						</button>

						{openLangMobile && (
							<ul className="mt-2 bg-white text-black font-semibold border border-gray-200 rounded-md shadow-lg w-24 z-50 overflow-hidden transition-all duration-300">
								{sortedLanguages.map(lang => (
									<li key={lang.label} onClick={() => handleLanguageChange(lang.label)} className="flex items-center gap-2 px-4 py-2 hover:bg-amber-100 cursor-pointer transition">
										<Image src={lang.icon} alt={lang.name} width={20} height={20} />
										<span>{lang.name}</span>
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

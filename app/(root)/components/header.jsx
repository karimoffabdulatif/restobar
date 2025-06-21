'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

export default function Header() {
	const [openLang, setOpenLang] = useState(false)
	const [selectedLang, setSelectedLang] = useState("O'z")
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)
	const langRef = useRef(null)

	const languages = [
		{ label: "O'z", icon: "/pngegg.png", name: "UZ" },
		{ label: "Ру", icon: "/ru.png", name: "RU" },
		{ label: "Eng", icon: "/en.png", name: "ENG" },
	]

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (langRef.current && !langRef.current.contains(event.target)) {
				setOpenLang(false)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	const handleLanguageChange = (lang) => {
		setSelectedLang(lang)
		setOpenLang(false)
	}

	const sortedLanguages = [
		...languages.filter(lang => lang.label === selectedLang),
		...languages.filter(lang => lang.label !== selectedLang),
	]

	// Tanlangan til obyektini topish
	const selectedLangObj = languages.find(lang => lang.label === selectedLang)

	return (
		<header className="fixed  sm:mt-0 w-full z-50 bg-transparent text-white">
			<div className="container mx-auto px-2 sm:px-14 mt-[-50px] flex items-center justify-between py-4 relative">

				{/* Logo */}
				<div className="flex ml-3  sm:ml-0 w-[140px] items-center mt-4 sm:mt-0 sm:w-[35%]">
					<Image src="/logo3.png" alt="Logo" width={200} height={100} />
				</div>

				{/* Desktop menyu */}
				<nav className="hidden lg:flex w-[65%] justify-end items-center gap-4 mt-[-10px]">
					<ul className="flex gap-6 text-2xl font-medium">
						<li><Link href="/" className="text-amber-500">Home</Link></li>
						<li><Link href="/menu" className="hover:text-amber-500 transition">Menu</Link></li>
						<li><Link href="/about" className="hover:text-amber-500 transition">About Us</Link></li>
						<li><Link href="/contact" className="hover:text-amber-500 transition">Contact</Link></li>
					</ul>

					{/* Desktop til tanlash */}
					<div className="relative ml-6" ref={langRef}>
						<button
							onClick={() => setOpenLang(!openLang)}
							className="bg-amber-500 px-4 py-1 text-xl rounded-sm hover:bg-amber-600 transition flex items-center gap-2"
						>
							<span className="text-white">{selectedLangObj?.name}</span>
							<svg
								className={`w-4 h-4 transition-transform duration-200 ${openLang ? 'rotate-180' : 'rotate-0'}`}
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								viewBox="0 0 24 24"
							>
								<path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
							</svg>
						</button>

						{openLang && (
							<ul className="absolute left-0 mt-2 bg-white text-black rounded-md shadow-md w-[80px] z-50 overflow-hidden font-semibold">
								{sortedLanguages.map(lang => (
									<li
										key={lang.label}
										onClick={() => handleLanguageChange(lang.label)}
										className="px-4 py-2 hover:bg-amber-100 cursor-pointer flex items-center gap-2 border-b last:border-none"
									>
										<Image src={lang.icon} alt={lang.name} width={20} height={20} className="w-4 h-4" />
										{lang.name}
									</li>
								))}
							</ul>
						)}
					</div>
				</nav>

				{/* Hamburger menyu */}
				<button
					onClick={() => setIsSidebarOpen(true)}
					className="lg:hidden text-white pr-4  text-4xl"
				>
					<HiMenu />
				</button>
				<div
					className={`fixed top-0 left-0 w-full bg-[#0F172B] text-white z-[999] overflow-hidden transition-all duration-300 ease-in-out ${isSidebarOpen ? 'max-h-[1000px]' : 'max-h-0'
						}`}
				>
					{/* Logo va Yopish tugmasi */}
					<div className="flex justify-between items-center px-6  border-b border-gray-600">
						<Image src="/mobile-logo.png" alt="Logo" width={90} height={70} />
						<button onClick={() => setIsSidebarOpen(false)} className="text-white text-3xl">
							<HiX />
						</button>
					</div>

					{/* Linklar */}
					<ul className="flex flex-col gap-4 text-xl font-medium p-6">
						{["/", "/menu", "/about", "/contact"].map((path, index) => {
							const names = ["Home", "Menu", "About Us", "Contact"]
							return (
								<li key={path}>
									<Link href={path} onClick={() => setIsSidebarOpen(false)}>
										<span className="block  text-white hover:text-amber-500 text-xl px-4 py-2 rounded-md transition">
											{names[index]}
										</span>
									</Link>
								</li>
							)
						})}
					</ul>

					<div className="relative ml-10 mt-4 mb-4" ref={langRef}>
						<button
							onClick={() => setOpenLang(!openLang)}
							className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-md text-lg transition duration-300 shadow-md"
						>
							{selectedLangObj?.name}
							<svg
								className={`w-4 h-4 transition-transform duration-200 ${openLang ? 'rotate-180' : 'rotate-0'}`}
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								viewBox="0 0 24 24"
							>
								<path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
							</svg>
						</button>

						{/* Bu yerni absolute emas, relative qilib qo’yamiz */}
						{openLang && (
							<ul className="mt-2 bg-white text-black font-semibold border border-gray-200 rounded-md shadow-lg w-24 z-50 overflow-hidden transition-all duration-300">
								{sortedLanguages.map(lang => (
									<li
										key={lang.label}
										onClick={() => handleLanguageChange(lang.label)}
										className="flex items-center gap-2 px-4 py-2 hover:bg-amber-100 cursor-pointer transition"
									>
										<Image src={lang.icon} alt={lang.name} width={20} height={20} className="w-5 h-5" />
										<span>{lang.name}</span>
									</li>
								))}
							</ul>
						)}
					</div>


					<div
						onClick={() => setIsSidebarOpen(false)}
						className="border w-[100px] py-[2px] mb-2 bg-white text-black text-center mx-auto rounded cursor-pointer hover:bg-amber-100 transition"
					>
					</div>

				</div>


			</div>
		</header>
	)
}

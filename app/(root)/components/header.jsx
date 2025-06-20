'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
	const [openLang, setOpenLang] = useState(false)
	const [selectedLang, setSelectedLang] = useState("O'z") // Default til

	// Tilni tanlash funksiyasi
	const handleLanguageChange = (lang) => {
		setSelectedLang(lang)
		setOpenLang(false) // dropdown'ni yopish
	}

	return (
		<header className="fixed top-0 left-0 w-full z-50 bg-transparent text-white">
			<div className="container mx-auto flex items-center mt-[-50px] justify-between py-4 relative">
				{/* Logo */}
				<div className="flex items-center w-[35%]">
					<Image src="/logo3.png" alt="Logo" width={200} height={100} />
				</div>

				{/* Navigation */}
				<nav className="w-[65%] flex justify-end items-center mt-[-15px] gap-4">
					<ul className="flex gap-6 text-2xl font-medium">
						<li>
							<Link href="/" className="text-amber-500">Home</Link>
						</li>
						<li>
							<Link href="/menu" className="hover:text-amber-400 transition-colors duration-300">Menu</Link>
						</li>
						<li>
							<Link href="/about" className="hover:text-amber-400 transition-colors duration-300">About Us</Link>
						</li>
						<li>
							<Link href="/contact" className="hover:text-amber-400 transition-colors duration-300">Contact</Link>
						</li>
					</ul>

					{/* Til tugmasi */}
					<div className="relative ml-6">
						<button
							onClick={() => setOpenLang(!openLang)}
							className="bg-amber-500 px-6 py-1 text-xl rounded-sm hover:bg-amber-600 transition"
						>
							{selectedLang}
						</button>

						{/* Dropdown menyu */}
						{openLang && (
							<ul className="absolute right-0 mt-2 bg-gray-300 font-samibold text-black rounded-md shadow-md w-[100px] z-50">
								<li
									onClick={() => handleLanguageChange("O'z")}
									className="px-4 py-2 hover:bg-amber-100 cursor-pointer flex items-center gap-2"
								>
									<img src="/pngegg.png" alt="Uzbek" className="w-5 h-5" />
									O‘z
								</li>
								<li
									onClick={() => handleLanguageChange('Ру')}
									className="px-4 py-2 hover:bg-amber-100 cursor-pointer flex items-center gap-2"
								>
									<img src="/ru.png" alt="Russian" className="w-5 h-5" />
									Ру
								</li>
								<li
									onClick={() => handleLanguageChange('Eng')}
									className="px-4 py-2 hover:bg-amber-100 cursor-pointer flex items-center gap-2"
								>
									<img src="/en.png" alt="English" className="w-5 h-5" />
									Eng
								</li>
							</ul>
						)}
					</div>
				</nav>
			</div>
		</header>
	)
}

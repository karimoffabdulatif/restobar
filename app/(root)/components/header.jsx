// components/Header.jsx
import Link from 'next/link'
import Logo from '../../../public/logo3.png'
import Image from 'next/image'
export default function Header() {
	return (
		<header className="fixed top-0 left-0 w-full z-50 bg-transparent text-white">
			<div className="container mx-auto  flex items-center justify-between">
				<h1 className="text-2xl flex w-[30%]">
					<Image src={Logo} alt="Logo" width={150} height={100} />
				</h1>

				<nav className="w-[70%] bg flex justify-end">
					<ul className="flex gap-6 text-2xl font-medium">
						<li>
							<Link
								href="/"
								className="text-amber-500"
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								href="/menu"
								className="transition-colors duration-300 hover:text-amber-400"
							>
								Menu
							</Link>
						</li>
						<li>
							<Link
								href="/about"
								className="transition-colors duration-300 hover:text-amber-400"
							>
								About Us
							</Link>
						</li>
						<li>
							<Link
								href="/contact"
								className="transition-colors duration-300 hover:text-amber-400"
							>
								Contact
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

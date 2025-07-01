import Header from '@/app/(root)/components/header'
import React from 'react'
import Hero from './hero'
import Category from '../category/category'
import About from '../about/about'
import Btable from '../book-table/b-table'
import Footer from '@/app/(root)/components/footer'

const HomePage = () => {
	return (
		<>
			<Header />
			<Hero />
			<Category />
			<About />
			<Btable />
			<Footer />
		</>
	)
}

export default HomePage

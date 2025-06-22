import Header from '@/app/(root)/components/header'
import React from 'react'
import Hero from './hero'
import Category from '../category/category'
import About from '../about/about'

const HomePage = () => {
	return (
		<>
			<Header />
			<Hero />
			<Category />
			<About />
		</>
	)
}

export default HomePage

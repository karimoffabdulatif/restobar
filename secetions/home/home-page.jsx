import Header from '@/app/(root)/components/header'
import React from 'react'
import Hero from './hero'
import { Category } from '../category/category'
import Ct from '../ct/ct'

const HomePage = () => {
	return (
		<>
			<Header />
			<Hero />
			<Category />
			<Ct />
		</>
	)
}

export default HomePage

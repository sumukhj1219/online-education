import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const Navbar = () =>
{
	return (
		<div className='fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-secondary flex items-center'>
			<div className='md:max-w-screen-2xl mx-auto flex items-center w-full justify-between'>
				<div className='w-full flex gap-x-5'>
				</div>
				<div className='space-x-4 flex md:w-auto items-center justify-between w-full'>
					<UserButton />
				</div>
			</div>
		</div>
	)
}

export default Navbar

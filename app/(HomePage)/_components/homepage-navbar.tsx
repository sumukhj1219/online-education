import { Button } from '@/components/ui/button'
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
				<Button size={'sm'} variant={'outline'} asChild>
					<Link href={'/sign-in'}>
					Login
					</Link>
				</Button>
				<Button size={'sm'} variant={'default'} asChild>
					<Link href={'/sign-up'}>
					Sign Up as Guest
					</Link>
				</Button>
			</div>
			</div>
		</div>
	)
}

export default Navbar

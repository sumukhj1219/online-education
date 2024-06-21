import React from 'react'
import Navbar from './_components/homepage-navbar'

const HomePageLayout = ({children}:{children:React.ReactNode}) => {
  return (
	<div >
		<Navbar />
		{children}
	</div>
  )
}

export default HomePageLayout

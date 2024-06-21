import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

interface LoaderProps
{
	loading:boolean
}

const Loader = ({loading}:LoaderProps) => {
  return (
	<div className='flex items-center justify-center max-h-screen'>
	<ClipLoader
	color={'red'}
	loading={loading}
	size={100}
	aria-label="Loading Spinner"
	data-testid="loader"
  />
	</div>

  )
}

export default Loader

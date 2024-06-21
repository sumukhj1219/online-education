import React from 'react'
import
	{
		Card,
		CardContent,
		CardDescription,
		CardFooter,
		CardHeader,
		CardTitle,
	} from "@/components/ui/card"
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface VideoCardsProps
{
	videos:any[]
}

const VideoCards = ({videos}:VideoCardsProps) =>
{
	return (
		<div className='grid grid-cols-2 gap-x-2 gap-y-2 mt-10'>
			{videos.map((v:any, index)=>(
				<Card key={index} className="w-[350px]">
				<CardHeader>
					<CardTitle>{v.snippet.title}</CardTitle>
					<CardDescription>{v.snippet.description}</CardDescription>
				</CardHeader>
				<CardContent>
					<Link href={`https://www.youtube.com/watch?v=${v.snippet.resourceId}`} >
					<Image 
					src={v.snippet.thumbnails.medium.url}
					alt='video-image'
					width={350}
					height={150}
					className='rounded-lg'
					/>
					</Link>
				</CardContent>
				<CardFooter>
					<Button className='w-full'>Test</Button>
				</CardFooter>
			</Card>
			))}
		</div>
	)
}

export default VideoCards

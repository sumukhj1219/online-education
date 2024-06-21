'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useEffect, useState } from 'react'
import VideoCards from '../_components/video-cards'
import Loader from '../_components/loader'

const CoursePage = () => {
  const [videos, setVideos] = useState<any[]>([])
  const [query, setQuery] = useState<string>('javascript full course')
  const [loading, setLoading] = useState<boolean>(false)

  const fetchCourses = async () => {
    try {
      const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=10&q=${query}&key=AIzaSyBMQ1H4nlyJvdzaWG7-oFFJCQk1Q74Lsrs`)
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText)
      }
      const data = await response.json()
      setVideos(data.items)
      setLoading(false)
      console.log(data)
    } catch (error) {
      console.error('Error fetching courses:', error)
      setLoading(false)
    }
  }

  useEffect(() => {
    setLoading(true)
    fetchCourses()
  }, [query])

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)
    fetchCourses()
  }

  return (
    <div className='pt-12'>
      <form onSubmit={handleSubmit} className='flex gap-x-2'>
        <Input
          placeholder='Search Courses..'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type="submit">Search</Button>
      </form>
      {loading && <Loader loading />}
      <VideoCards videos={videos} />
    </div>
  )
}

export default CoursePage

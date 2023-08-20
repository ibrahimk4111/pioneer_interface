import React, { useEffect, useState } from 'react'
import News from '../Components/News/News'

const NewsPage = () => {

  const [news_and_blogs, setNews_and_blogs] = useState([])

  useEffect(()=>{
    getNews()
  }, [])

  const getNews = async () =>{
    const response = await fetch('https://pioneer.kodbel.com/api/news/')
    const data = await response.json()
    setNews_and_blogs(data)
  }

  return (
    <div className='p-5 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4'>
      {
        news_and_blogs.map((blog, index) => (
          <News key={index} blog={blog}/>
        ))
      }
    </div>
  )
}

export default NewsPage
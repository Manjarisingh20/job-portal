import React from 'react'
import NewsCard from './common/NewsCard'

function News() {
  return (
    <div className='pb-10  container '>
      <h1 className='text-3xl md:text-5xl font-bold mt-10  text-center'>News and Blog</h1>
      <p className='mt-4 text-sm md:text-base  text-center text-gray-600'>
        Metus faucibus sed turpis lectus feugiat tincidunt. Rhoncus sed tristique in dolor
      </p>

      <div className='mt-10 flex flex-col md:flex-row gap-0'>
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  )
}

export default News


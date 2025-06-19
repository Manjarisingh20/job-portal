import React from 'react'
import NewsCard from './common/NewsCard'

function News() {
  return (
    <div className='pb-10 px-4 md:px-12'>
      <h1 className='text-3xl md:text-5xl font-bold mt-10'>News and Blog</h1>
      <p className='mt-4 text-sm md:text-base text-gray-600'>
        Metus faucibus sed turpis lectus feugiat tincidunt. Rhoncus sed tristique in dolor
      </p>

      <div className='mt-10 flex flex-col md:flex-row gap-8'>
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  )
}

export default News


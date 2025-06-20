import React from 'react'
import NewsCard from './common/NewsCard'

function News() {
  return (
    <div className='pb-10 px-4 md:px-12'>
      <h1 className='text-3xl md:text-5xl font-bold mt-10 md:ml-20 text-center'>News and Blog</h1>
      <p className='mt-4 text-sm md:text-base md:ml-20 text-center text-gray-600'>
        Metus faucibus sed turpis lectus feugiat tincidunt. Rhoncus sed tristique in dolor
      </p>

      <div className='mt-10 flex md:ml-16 flex-col md:flex-row gap-0'>
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  )
}

export default News


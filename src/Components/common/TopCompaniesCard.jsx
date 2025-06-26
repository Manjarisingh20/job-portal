import React from 'react'
import Images from './Images'

function TopCompaniesCard() {
  return (
    <div>
      <div className="rounded-2xl bg-white p-10">
      <Images src="/Images/instagram.png" className="h-14 w-14 mx-auto" />
      <h1 className="text-xl mt-4 font-semibold">Instagram</h1>
      <p className="mb-5 mt-4 text-gray-600">
        Elit veit mauris aliquam <br />
        est diam. Leo sagittis consectetur<br />
        diam morbi erat
      </p>
      <span className="text-emerald-500 bg-emerald-50 px-3 py-2 rounded-xl">
        8 open jobs
      </span>
    </div>
    </div>
  )
}

export default TopCompaniesCard

import CountChart from '@/app/components/charts/CountChart'
import Usercard from '@/app/components/userCard/Usercard'
import React from 'react'

const AdminPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      {/* LEFT */}
      <div className='w-full lg:w-2/3'>
        L
      </div>
      {/* USER CARDS */}
      <div className="flex gap-4 justify-between flex-wrap">
        <Usercard type="student" />
        <Usercard type="teacher" />
        <Usercard type="parent" />
        <Usercard type="staff" />
      </div>
      <div className=''>
        {/* MIDDLE CHARTS */}
        <div className='flex gap-4 flex-col lg:flex-row'>
          {/* COUNT CHART */}
          <div className='w-full lg:w-1/3 h-[450px]'>
            <CountChart />
          </div>
          {/* ATTENDANCE CHART */}
          <div className='w-full lg:w-2/3 h-[450px] flex flex-col gap-8'>

          </div>
        </div>
        {/* BOTTOM CHARTS */}
        <div className='flex justify-center gap-16'>
          <div className='flex flex-col gap-1'>
            <div className='w-5 h-5 bg-red-500 rounded-full' />
            <h1 className='font-bold'>1,234</h1>
            <h2 className='text-xs text-gray-500'>Boys (55%)</h2>
            <h2 className='text-xs text-gray-500'>Girls (45%)</h2>
          </div>
        </div>
      </div>
      {/* Right */}
      <div className='w-full lg:2-1/3'>
        R
      </div>
    </div>
  )
}

export default AdminPage
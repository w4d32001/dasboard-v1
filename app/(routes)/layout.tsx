import Nabvar from '@/components/Navbar/Nabvar'
import Sidebar from '@/components/Sidebar/Sidebar'
import React from 'react'

export default function LayoutDashboard({children}: {children: React.ReactElement}) {
  return (
    <div className='flex w-full h-full'>
        <div className='hidden md:block w-80 h-full xl:fixed'>
            <Sidebar/>
        </div>
        <div className='w-full xl:ml-80'>
            <Nabvar/>
            <div className='p-6 bg-[#fafbfc] dark:bg-gray-600'>
                {children}
            </div>
        </div>
    </div>
  )
}

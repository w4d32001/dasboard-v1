"use client"
import React from 'react'
import { dataGeneralSidebar, dataSupportSidebar, dataToolSidebar } from './SidebarRoutes.data'
import SidebarItem from '../SidebarItem/SidebarItem'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

export default function SidebarRoutes() {
  return (
    <div className='flex flex-col justify-between h-full'>
      <div className='dark:text-gray-100'>
        <div className='p-2 md:p-6'>
          <p>General</p>
          {
            dataGeneralSidebar.map((item) => (
              <SidebarItem key={item.label} item={item}/>
            ))
          }
        </div>
        
        <Separator />
        <div className='p-2 md:p-6'>
          <p>Tool</p>
          {
            dataToolSidebar.map((item) => (
              <SidebarItem key={item.label} item={item}/>
            ))
          }
        </div>

        <Separator/>
        <div className='p-2 md:p-6'>
          <p>Support</p>
          {
            dataSupportSidebar.map((item) => (
              <SidebarItem key={item.label} item={item}/>
            ))
          }
        </div>
      </div>

      <div>
        <div className='text-center p-6'>
          <Button variant='outline' className='w-full dark:bg-gray-700 dark:text-gray-100'>
            Upgrade plan
          </Button>
        </div>
        <Separator />
        <footer className='mt-3 p-3 text-center dark:text-gray-100'>
          2024. All rights reserved
        </footer>
      </div>
    </div>
  )
}

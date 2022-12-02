import { Outlet } from 'react-router-dom'
import { Header } from '@renderer/src/components/Header'
import { Sidebar } from '@renderer/src/components/Sidebar'

export function DefaultLayout() {
  return (
    <div className="h-screen w-screen bg-rotion-900 text-rotion-100 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col max-h-screen">
        <Header />
        <Outlet />
      </div>
    </div>
  )
}

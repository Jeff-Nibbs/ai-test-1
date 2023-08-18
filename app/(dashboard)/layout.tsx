import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-o z-[80] bg-gray-900">
        <Sidebar />
      </div>
      <main className="md:pl-72 ">
        <Navbar />
        {children}
      </main>
    </div>
  )
}

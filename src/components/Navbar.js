import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center bg-black mb-6 px-4'>
    <Link href='/' className='flex items-center justify-center gap-2'>
      <Image src='/icon/Logo.png' width={50} height={50} />
      <h3 className='text-primary'>BLACK OWL</h3>
    </Link>
    <div class='space-y-1'>
      <div class='w-6 h-0.5 bg-white'></div>
      <div class='w-6 h-0.5 bg-white'></div>
      <div class='w-6 h-0.5 bg-white'></div>
    </div>
  </nav>
  )
}
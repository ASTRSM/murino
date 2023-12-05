import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex justify-center p-6'>
      <section className='w-[400px]'>
        <div className='flex w-full justify-between'>
          <h1 className='text-4xl font-bold'>
            Choose Your <br></br>
            <span className='text-primary'>Place</span>
          </h1>
          <Image src='/icon/map-pin.svg' width={50} height={50} />
        </div>
        <div className='my-4'>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore libero at quas eveniet sed optio, fugit nam qui consequuntur accusamus nobis, quibusdam ad,</p>
        </div>
        <div className='flex gap-2 flex-col'>
          <Link href='/rsvp'><Image src='/icon/image1.jpg' width={724} height={242} /></Link>
          <Link href='/rsvp'><Image src='/icon/image2.jpg' width={724} height={242} /></Link>
          <Link href='/rsvp'><Image src='/icon/image3.jpg' width={724} height={242} /></Link>
        </div>
        <p className='text-center mt-6'>Read our <span><Link href="/dashboard" className='text-[#3267E3]'>Terms & Condition, Privacy Policy</Link></span></p>
      </section>
    </main>
  )
}

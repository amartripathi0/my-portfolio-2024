import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='h-screen flex justify-center items-center flex-col gap-4'>
      <p>{"Could not find requested resource  :("}</p>
      <Link href="/" className='p-2 border rounded hover:scale-105 transition-transform duration-150 border-purple-500 bg-neutral-900'>Return Home</Link>
    </div>
  )
}

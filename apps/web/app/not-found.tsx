import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <p>{'Could not find requested resource  :('}</p>
      <Link
        href="/"
        className="rounded border border-purple-500 bg-neutral-900 p-2 transition-transform duration-150 hover:scale-105"
      >
        Return Home
      </Link>
    </div>
  )
}

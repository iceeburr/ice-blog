import Link from 'next/link'; 

export default function NotFound() {
  return (
    <div className="justify-center items-center text-center">
        <br /><br />
        <h1>Error 404 - Page not found.</h1>
        <br /><br />
        <p>You tried to access a page that doesn&apos;t exist. Maybe you made a typo in the link.</p>
        <Link href="/" className="underline text-blue-700 hover:text-purple-600 duration-300">Go to landing page</Link>
    </div>
  )
}
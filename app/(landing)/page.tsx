import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <>
      <p>Landing page (unprotected)</p>
      <div>
        <Link href="/sign-in">
          <Button variant="destructive" size="lg" className="m-5">
            Login
          </Button>
        </Link>
        <Link href="/sign-up">
          <Button variant="destructive" size="lg" className="m-5">
            Register
          </Button>
        </Link>
      </div>
    </>
  )
}

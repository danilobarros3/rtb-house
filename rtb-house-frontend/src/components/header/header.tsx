import Image from "next/image"
import Link from "next/link"
import logo from "@/assets/logo.svg"
import { Button } from "@/components/ui/button"

export function Header() {

  return (
    <header className="w-full border-b bg-white p-4">
      <div className="flex items-center justify-center sm:justify-between p-4 max-w-screen-2xl mx-auto">
        <Link
          href="/orders"
        >
          <Image
            src={logo}
            alt="RTB House"
            width={169}
            height={20}
            priority
          />
        </Link>
        <nav className="hidden sm:flex items-center gap-2">
          <Button variant="default" className="hover:bg-primary/80">
            <Link href="/orders" className="hover:text-primary-foreground">Orders</Link>
          </Button>
          <Button variant="default" className="hover:bg-primary/80">
            <Link href="/information" className="hover:text-primary-foreground">Information</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}

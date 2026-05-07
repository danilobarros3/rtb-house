import Image from "next/image"
import Link from "next/link"
import logo from "@/assets/logo.svg"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { MenuIcon } from "lucide-react"

export function Header() {

  return (
    <header className="w-full border-b bg-white p-6">
      <div className="flex items-center justify-between p-4 max-w-screen-2xl mx-auto">
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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
              <MenuIcon className="w-4 h-4 text-black cursor-pointer" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="focus:bg-white/10">
              <Link href="/orders">Orders</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="focus:bg-white/10">
              <Link href="/information">Information</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu> 
      </div>
    </header>
  )
}

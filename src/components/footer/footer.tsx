import Image from "next/image"
import logo from "@/assets/logo.svg"

export function Footer() {
  return (
    <footer className="w-full border-t bg-white p-4">
      <div className="flex justify-center items-center p-4">
      <Image
            src={logo}
            alt="RTB House"
            width={169}
            height={20}
            priority
          />
      </div>
    </footer>
  )
}
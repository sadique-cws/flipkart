import Image from "next/image"
import Logo from "@/public/logo.png"
import Link from "next/link"

const Header = () => {
  return (
    <div className="flex flex-1 bg-[#2874f0] text-white justify-between px-36 py-3 items-center gap-5">
        <div className="flex-[0.3]">
            <Image src={Logo} width={120}/>
        </div>
        <form className="flex-[2] flex justify-center items-center">
            <input type="text" className="bg-white border-0 outline-0 px-3 py-2 w-9/12" />
            <span className="bg-white p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" className="text-sky-600" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </span> 
        </form>
        <div className="flex gap-5">
            <Link href="/" className="font-bold">Sadique</Link>
            <Link href="/" className="font-bold">Become a Seller</Link>
            <Link href="/" className="font-bold">More</Link>
            <Link href="/viewCart" className="font-bold">Cart</Link>
        </div>
    </div>
  )
}

export default Header
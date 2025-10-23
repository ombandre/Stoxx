import Link from "next/link";
import Image from "next/image";
import NavItems from "@/components/NavItems";
import UserDropdown from "@/components/UserDropdown";

const Header = () => {
  return (
    <header className="sticky top 0 header">
        <div className="container header-wrapper">
            <Link href="/">
           <Image src="/assets/icons/logo3.svg" alt="Stoxx Logo" width={250} height={90} className="h-20 w-auto cursor-pointer -mt-4" />
            </Link>
            <nav className="hidden sm:block">
               <NavItems />

                
            </nav>
            <UserDropdown />
        </div>
    </header>
  )
}

export default Header

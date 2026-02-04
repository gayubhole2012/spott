import Image from "next/image";
import Link from "next/link";

function Header(){
    return(
        <>
           <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-xl z-20 border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
           {/*logo*/}
           <Link href= {"/"} className= "flex items-center">
      <Image src="/spott.png" 
      alt="Spott logo"
      width={500}
      height={500}
      className="w-full h-11"
      priority
      />
      </Link>
           
           {/* pro badge */}
          
           {/* Search and location - deskstop only*/}
           {/* Right side action */}
           </div>
           {/*mobile search and location - below header*/}
        </nav>
        {/* modals */}
        </>
    )
}


export default Header;
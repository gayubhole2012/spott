"use client";

import React, { useState } from "react";
import { Plus} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {SignInButton,UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Authenticated, Unauthenticated } from "convex/react";
import { BarLoader } from "react-spinners";
import { useStoreUser } from "@/hooks/use-store-user"; 
import { Ticket } from "lucide-react";

function Header(){

    const {isLoading} = useStoreUser();
const [showUpgradeModel, setShowUpgradeModel] = useState(false);
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
           <div className= "flex items-center">
           
                {/* create event */}
                <Button variant="ghost" size="sm" onClick={() => setShowUpgradeModel(true)}>Pricing</Button>                <Button variant ="ghost" size="sm" asChild className={"mr-2"}>
                    <Link href ="/explore">Explore</Link>
                </Button>
                 
                 <Authenticated>
                    <Button size="sm" asChild className={"flex gap-2 mr-4"} >
                        <Link href="/create-event">
                        <Plus className="w-4 h-4" />
                        <span className="hidden sm:inline">Create Event</span>
                        </Link>
                    </Button>
                <UserButton>
                    <UserButton.MenuItems>
                        <UserButton.Link label="My Tickets"
                        labelIcon={<Ticket size = {16}/>}
                        href = "/my-tickets"
                        />

                        <UserButton.Link label="My Events"
                        labelIcon={<Ticket size = {16}/>}
                        href = "/my-events"
                        />
                        <UserButton.Action label ="manageAccount" />

                        
                    </UserButton.MenuItems>
                    </UserButton>           
                </Authenticated>
            
            <Unauthenticated>
                <SignInButton mode = "modal">
               
                  <Button size="sm">Sign In</Button>
                  </SignInButton >
              </Unauthenticated>
              {/* Show the user button when the user is signed in */}
             

           </div>
           </div>
           {/*mobile search and location - below header*/}
           {/* loader */}
           {isLoading && (
            <div className="absolute bottom-0 left-0 w-full">
            <BarLoader width="100%" color="#a855f7"/>
           </div>)}
        </nav>
        {/* modals */}
        </>
    )
}


export default Header;
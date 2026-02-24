"use client";
import { usePathname, useRouter } from "next/navigation";
import {React} from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const ExploreLayout = ({children})=>{
    const pathname = usePathname();
    const isMainExplore = pathname === "/explore";
    const router = useRouter();

    return <div className = "pb-16 min-h-screen"> 
    <div className="max-w-7xl max-auto px-6"> {! isMainExplore && (
        <div className = "mb-6">
            <Button 
            variant = "ghost" 
            onClick = {()=> router.push("/explore")} className = "gap-2 -ml-2">
                <ArrowLeft className = "h-4 w-4"/>
                Back to Explore
            </Button>
     </div>
 )}
 {children}
      </div>
      </div>
} 

export default ExploreLayout;
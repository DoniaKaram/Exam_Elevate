"use client"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "../ui/button";
import { useRouter,usePathname } from "@/i18n/routing";
import { useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";
function LocalSwitch() {
  const locale=useLocale() as "en"|"ar";
   const router=useRouter();
    const pathname=usePathname();
     const searchParams=useSearchParams();
     const searchQuery=new URLSearchParams(searchParams)
     const switchLocale=(Locale:"en"|"ar")=>{
         router.push(`${pathname}?${searchQuery.toString()}`,{locale})
     }
  return (
    <div className="flex justify-center items-center gap-7">
     <DropdownMenu>
     <DropdownMenuTrigger >
      <Button  onClick={()=>switchLocale("en")}>  
      English
    
      </Button>
      </DropdownMenuTrigger>
  <DropdownMenuContent>
  <DropdownMenuItem asChild>
    <Button   onClick={()=>switchLocale("ar")}>Arabic</Button>
    </DropdownMenuItem>
    
  </DropdownMenuContent>
</DropdownMenu>
     <Button className="bg-white text-primary py-2 text-xl font-bold">sign in</Button>
     <Button className="bg-white text-primary rounded-full py-2 border-solid border-2 border-gray-200">Register</Button>
    </div>
   
  
  );
}

export default LocalSwitch;


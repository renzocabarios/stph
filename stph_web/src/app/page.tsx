import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Header Section */}
      <div className="w-full flex justify-center sticky top-0 bg-transparent p-8 border-b border-gray-700">
  <div className="flex items-center justify-between max-w-[1440px] w-full">
    <div className="logo">
      <img src="/stph.png" alt="Logo" className="h-11" />
  </div>

          <div className="nav-item">
            <p className="hover:text-yellow-300 cursor-pointer">Blog</p>
            <p className="hover:text-yellow-300 cursor-pointer">Events</p>
            <p className="hover:text-yellow-300 cursor-pointer">Hire</p>
            <p className="hover:text-yellow-300 cursor-pointer">About</p>
          </div>
        </div>
      </div>

      {/* Main Content */}


      <div className="w-full flex justify-end py-40 px-[7vw]">

        <div className="flex flex-col space-y-12 mr-12 mt-20 py-[35px]">
          
          <div className="flex justify-center items-center border-[2px] border-[#2D2E48] rounded-[20px] w-[60px] h-[60px] bg-[rgba(109,103,103,0.23)]">
            <Button variant="ghost" className="bg-transparent hover:bg-transparent p-0">
              <Image src="/learn.svg" alt="Icon 1" width={100} height={100} />
            </Button>
          </div>

          <div className="flex justify-center items-center border-[2px] border-[#2D2E48] rounded-[20px] w-[60px] h-[60px] bg-[rgba(109,103,103,0.23)]">
            <Button variant="ghost" className="bg-transparent hover:bg-transparent p-0">
              <Image src="/earn.svg" alt="Icon 2" width={100} height={100} />
            </Button>
          </div>

          <div className="flex justify-center items-center border-[2px] border-[#2D2E48] rounded-[20px] w-[60px] h-[60px] bg-[rgba(109,103,103,0.23)]">
            <Button variant="ghost" className="bg-transparent hover:bg-transparent p-0">
              <Image src="/build.svg" alt="Icon 3" width={30} height={30} />
            </Button>
          </div>

          <div className="flex justify-center items-center border-[2px] border-[#2D2E48] rounded-[20px] w-[60px] h-[60px] bg-[rgba(109,103,103,0.23)]">
            <Button variant="ghost" className="bg-transparent hover:bg-transparent p-0">
              <Image src="/chill.svg" alt="Icon 4" width={100} height={100} />
            </Button>
          </div>

        </div>


          <div className="flex flex-col items-start max-w-[80vw] text-left md:max-w-[725px]">
            <h1 className="text-[8vw] md:text-[90px] font-bold text-white mb-10 mt-10">Join the<br/>Web3 Revolution</h1>
            <p className="text-white max-w-[525px] text-[22px] font-medium">
              At Superteam Philippines, we are dedicated to propelling the most promising projects within the Solana ecosystem to new heights. As the official Solana Superteam in the Philippines, we are uniquely positioned to support and foster innovation in this rapidly evolving space.
            </p>
          </div>
      </div>

      {/* Additional Sections (Commented Out for Now) */}
      {/* Uncomment and customize these sections as needed */}
      {/* 
      <div className="w-full flex justify-center py-12">
        <div className="flex justify-evenly max-w-[1440px] w-full bg-slate-400 p-4 rounded-lg">
          <div className="flex flex-col gap-4 max-w-[490px]">
            <h2 className="text-2xl font-semibold">Winners Announced! Whackathon: Road to Bonkathon</h2>
            <p>
              The results of this @SuperteamEarn listing are out. Congrats to the winners! These teams showcased their talent in blockchain & decentralized tech.
            </p>
            <Button variant="outline">Read More</Button>
          </div>
          <div className="w-[444px] h-[300px] bg-slate-100 rounded-lg"></div>
        </div>
      </div>
      */}

      {/* Grid Section */}
      {/* <div className="w-full flex justify-center py-12">
        <div className="grid grid-cols-4 grid-rows-4 gap-4 max-w-[1440px] w-full">
          <div className="h-[176px] bg-slate-100 rounded-lg"></div>
          <div className="h-[176px] bg-slate-100 rounded-lg"></div>
          <div className="h-[176px] bg-slate-100 rounded-lg"></div>
          <div className="h-[176px] bg-slate-100 rounded-lg"></div>
          <div className="h-[176px] bg-slate-100 rounded-lg"></div>
          <div className="h-[176px] bg-slate-100 rounded-lg"></div>
          <div className="h-[176px] bg-slate-100 rounded-lg"></div>
          <div className="h-[176px] bg-slate-100 rounded-lg col-span-2"></div>
          <div className="h-[176px] bg-slate-100 rounded-lg"></div>
          <div className="h-[176px] bg-slate-100 rounded-lg"></div>
          <div className="h-[176px] bg-slate-100 rounded-lg"></div>
          <div className="h-[176px] bg-slate-100 rounded-lg col-span-2"></div>
        </div>
      </div> */}
    </>
  );
}

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

      {/* Main Content - 1st Page*/}

      <div className="w-full flex justify-end py-40 px-[7vw]">

        <div className="flex flex-col space-y-8 mr-12 mt-[100px] py-[35px]">
          
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

    {/* Main Content - 2nd Page*/}

    <div className="w-full flex justify-center py-12">
      <div
        className="flex flex-col md:flex-row justify-between items-center max-w-[1440px] w-full p-6 rounded-lg gap-8"
        style={{
          background: "rgba(255, 255, 255, 0.1)", // Transparent white background
          backdropFilter: "blur(10px)", // Blur effect
          WebkitBackdropFilter: "blur(10px)", // Safari support
        }}
      >

    {/* Text Content */}
      <div className="flex flex-col gap-4 max-w-[490px]">
        <h2 className="text-2xl font-semibold text-white">
          Winners Announced! Whackathon: Road to Bonkathon
        </h2>
        <p className="text-white">
          The results of this @SuperteamEarn listing are out. Congrats to the winners! These teams showcased their talent in blockchain & decentralized tech.
        </p>
        <button className="px-4 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-slate-400">
          Read More
        </button>
      </div>

    {/* Winners Section */}
      <div className="flex flex-row items-center gap-4 bg-slate-100 p-10 pl-20 pb-20 pt-20 rounded-lg">

            <div className="flex flex-col items-center gap-2">
              <img
                src="/tan.png"
                alt="Jed Tan"
                className="w-16 h-16 rounded-full object-cover"
              />
              <p className="font-medium">Jed Tan</p>
              <p className="text-gray-600 text-sm">USDC 1,000</p>
            </div>

                  <div className="flex flex-col items-center gap-2">
                    <img
                      src="/sanwan.png"
                      alt="Marc Anthony San Juan"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <p className="font-medium text-center text-[px]">Marc Anthony San Juan</p>
                    <p className="text-gray-600 text-sm">USDC 500</p>
                  </div>

                    <div className="flex flex-col items-center gap-2">
                      <img
                        src="/cayube.png"
                        alt="Adriana Emery Cayube"
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <p className="font-medium text-center">Adriana Emery Cayube</p>
                      <p className="text-gray-600 text-sm">USDC 300</p>
                    </div>

              </div>
      </div>
  </div>


     

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

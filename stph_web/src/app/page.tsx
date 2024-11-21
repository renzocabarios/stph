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

    <div className="w-full flex justify-center py-40">
      <div
        className="flex flex-col md:flex-row justify-between items-center max-w-[1440px] w-full p-6 rounded-lg"
        style={{
          minHeight: "600px", // Minimum height for the container
          background: "rgba(255, 255, 255, 0.05)", // Transparent white background
          backdropFilter: "blur(6px)", // Blur effect
        }}
      >

    {/* Text Content */}
      <div className="flex flex-col gap-10 max-w-[750px] pl-4">
        <h2 className="text-4xl font-semibold text-white py-2">
          Winners Announced! Whackathon: Road to Bonkathon
        </h2>
        <p className="text-2xl font-thin text-white py-2">
          The results of this @SuperteamEarn listing are out. Congrats to the winners! These teams showcased their talent in blockchain & decentralized tech.
        </p>
        <button className="inline-flex justify-center gap-2 px-6 py-4 border-2 border-customBlue text-customBlue rounded-3xl hover:bg-customBlue hover:text-white transition-all duration-300 max-w-[250px] font-semibold">
        Read More
        <span className="text-lg">➜</span>
      </button>
      </div>

    {/* Winners Section */}
        <div className="flex flex-row items-center gap-4 p-10 pl-20 pb-10 pt-10">
          <img src="/winners.svg" alt="winners" className="w-[1160px] h-auto rounded-2xl"/>
        </div>
      </div>
  </div>


     

          {/* Our Mission Section - 3rd page*/}
<div className="w-full flex justify-center py-[400px]">
  <div className="flex flex-col md:flex-row items-center max-w-[1440px] w-full gap-12 px-6">
    
    {/* Text Content */}
    <div className="flex flex-col max-w-[750px] text-left gap-6">
      <h2 className="text-4xl font-bold text-white">Our Mission</h2>
      <p className="text-lg font-thin text-white">
        We help the most promising projects in the Solana ecosystem in the Philippines launch and grow. We are organized as a co-operative of creatives, developers, and operators who are experienced in launching and growing technology businesses.
      </p>
      <button className="inline-flex justify-center items-center gap-2 px-6 py-3 text-customBlue border-2 border-customBlue rounded-xl hover:bg-customBlue hover:text-white transition duration-300 max-w-[200px] font-semibold">
        Join us here <span className="text-lg">➜</span>
      </button>
    </div>

    {/* Grid Content */}
    <div className="grid grid-cols-2 gap-4 md:gap-6">
      <div className="w-full h-auto rounded-lg bg-white">
        <Image
          src="/image1.png"
          alt="Event Image 1"
          className="w-full h-full object-cover rounded-lg"
          width={300}
          height={200}
        />
      </div>
      <div className="w-full h-auto rounded-lg bg-white">
        <Image
          src="/image2.png"
          alt="Event Image 2"
          className="w-full h-full object-cover rounded-lg"
          width={300}
          height={200}
        />
      </div>
      <div className="w-full h-auto rounded-lg bg-white">
        <Image
          src="/image3.png"
          alt="Event Image 3"
          className="w-full h-full object-cover rounded-lg"
          width={300}
          height={200}
        />
      </div>
      <div className="w-full h-auto rounded-lg bg-white">
        <Image
          src="/image4.png"
          alt="Event Image 4"
          className="w-full h-full object-cover rounded-lg"
          width={300}
          height={200}
        />
      </div>
      <div className="w-full h-auto rounded-lg bg-white">
        <Image
          src="/image5.png"
          alt="Event Image 5"
          className="w-full h-full object-cover rounded-lg"
          width={300}
          height={200}
        />
      </div>
      <div className="w-full h-auto rounded-lg bg-white">
        <Image
          src="/image6.png"
          alt="Event Image 6"
          className="w-full h-full object-cover rounded-lg"
          width={300}
          height={200}
        />
      </div>
      <div className="w-full h-auto rounded-lg bg-white">
        <Image
          src="/image7.png"
          alt="Event Image 7"
          className="w-full h-full object-cover rounded-lg"
          width={300}
          height={200}
        />
      </div>
      <div className="w-full h-auto rounded-lg bg-white">
        <Image
          src="/image8.png"
          alt="Event Image 8"
          className="w-full h-full object-cover rounded-lg"
          width={300}
          height={200}
        />
      </div>
    </div>
  </div>
</div>


      
    </>
  );
}

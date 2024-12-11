import Navbar from "@/components/navbar";

import Mission from "@/views/mission";
import Hero from "@/views/hero";
import Partners from "@/views/partners";
import JoinUs from "@/views/join-us";
import Faq from "@/views/faq";
import BottomNav from "@/views/bottom-nav";
export default function Home() {
  return (
    <>
      {/* Header Section */}
      <Navbar />

      {/* Main Content - 1st Page*/}

      <Hero />

      <Mission />
      <Partners />

      <JoinUs />
      <Faq />
      <BottomNav />

      {/* <div className="w-full flex justify-center py-40">
        <div
          className="flex flex-col md:flex-row justify-between items-center max-w-[1440px] w-full p-6 rounded-lg"
          style={{
            minHeight: "600px",
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(6px)",
          }}
        >
          <div className="flex flex-col gap-10 max-w-[750px] pl-4">
            <h2 className="text-4xl font-semibold text-white py-2">
              Winners Announced! Whackathon: Road to Bonkathon
            </h2>
            <p className="text-2xl font-thin text-white py-2">
              The results of this @SuperteamEarn listing are out. Congrats to
              the winners! These teams showcased their talent in blockchain &
              decentralized tech.
            </p>
            <button className="inline-flex justify-center gap-2 px-6 py-4 border-2 border-customBlue text-customBlue rounded-3xl hover:bg-customBlue hover:text-white transition-all duration-300 max-w-[250px] font-semibold">
              Read More
              <span className="text-lg">➜</span>
            </button>
          </div>

          <div className="flex flex-row items-center gap-4 p-10 pl-20 pb-10 pt-10">
            <img
              src="/winners.svg"
              alt="winners"
              className="w-[1160px] h-auto rounded-2xl"
            />
          </div>
        </div>
      </div> */}

      {/* Our Mission Section - 3rd page*/}
      {/* <div className="w-full flex justify-center py-[200px]">
        <div className="flex flex-col md:flex-row items-center max-w-[1440px] w-full gap-12 px-6">
          <div className="flex flex-col max-w-[375px] text-left gap-10">
            <h2 className="text-5xl font-bold text-white">Our Mission</h2>
            <p className="text-lg font-medium text-white pb-10">
              We help the most promising projects in the Solana ecosystem in the
              Philippines launch and grow. We are organized as a co-operative of
              creatives, developers, and operators who are experienced in
              launching and growing technology businesses.
            </p>
            <button className="inline-flex justify-center items-center gap-2 px-6 py-3 text-customBlue border-2 border-customBlue rounded-xl hover:bg-customBlue hover:text-white transition duration-300 max-w-[200px] font-semibold">
              Join us here <span className="text-lg">➜</span>
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
}

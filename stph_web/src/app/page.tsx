import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-full flex justify-center sticky">
        <div className="flex items-center justify-between p-4 max-w-[1440px] grow">
          <p>superteam</p>

          <div className="flex items-center gap-4">
            <p>Blog</p>
            <p>Events</p>
            <p>Hire</p>
            <p>About</p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center sticky">
        <div className="flex items-center justify-between p-4 max-w-[1440px] grow ">
          <div className=""></div>

          <div className="flex flex-col max-w-[485px]">
            <p>Join the Web3 Revolution </p>
            <p>
              At Superteam Philippines, we are dedicated to propelling the most
              promising projects within the Solana ecosystem to new heights. As
              the official Solana Superteam in the Philippines, we are uniquely
              positioned to support and foster innovation in this rapidly
              evolving space.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center sticky">
        <div className="flex items-center justify-evenly p-4 max-w-[1440px] grow bg-slate-400">
          <div className="flex flex-col gap-4 max-w-[490px]">
            <p>Winners Announced! Whackathon: Road to Bonkathon</p>
            <p>
              The results of this @SuperteamEarn listing are out. Congrats to
              the winners! These teams showcased their talent in blockchain &
              decentralized tech.
            </p>

            <Button variant="outline">Read More</Button>
          </div>

          <div className="w-[444px] h-[300px] bg-slate-100"></div>
        </div>
      </div>

      <div className="w-full flex justify-center sticky">
        <div className="w-full grid grid-cols-4 grid-rows-4 gap-4 max-w-[1440px]">
          <div className="h-[176px] bg-slate-100"></div>
          <div className="h-[176px] bg-slate-100"></div>
          <div className="h-[176px] bg-slate-100"></div>
          <div className="h-[176px] bg-slate-100"></div>

          <div className="h-[176px] bg-slate-100"></div>
          <div className="h-[176px] bg-slate-100"></div>
          <div className="h-[176px] bg-slate-100"></div>
          <div className=""></div>

          <div className=""></div>
          <div className="h-[176px] bg-slate-100"></div>
          <div className="h-[176px] bg-slate-100"></div>
          <div className="h-[176px] bg-slate-100"></div>

          <div className=""></div>
          <div className=""></div>
          <div className=" bg-slate-100 col-span-1 row-span-2"></div>
          <div className="h-[176px] bg-slate-100"></div>
          <div className="h-[176px] bg-slate-100"></div>
          <div className="h-[176px] bg-slate-100"></div>
          <div className="h-[176px] bg-slate-100"></div>

          <div className="h-[176px] bg-slate-100"></div>
          <div className="h-[176px] bg-slate-100"></div>
          <div className="h-[176px] bg-slate-100 col-span-2"></div>
          {/* <div className="h-[176px] bg-slate-100"></div> */}
        </div>
      </div>
    </>
  );
}

{
  /* <div className="flex items-center justify-between p-4 max-w-[1440px] grow">
        <p>superteam</p>

        <div className="flex items-center gap-4">
          <p>Blog</p>
          <p>Events</p>
          <p>Hire</p>
          <p>About</p>
        </div>
      </div> */
}

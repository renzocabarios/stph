import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function Mission() {
  return (
    <>
      <div className="w-full flex items-center justify-center">
        <div className="hidden w-full max-w-[1040px] p-8 md:grid grid-cols-4 grid-rows-4 gap-4">
          <div className=" row-span-2 col-span-2 flex flex-col gap-8 ">
            <div className="flex flex-col gap-4 text-white">
              <p className="text-2xl md:text-4xl font-bold">Our Mission</p>
              <p className=" text-sm font-medium">
                We help the most promising projects in the Solana ecosystem in
                the Philippines launch and grow. We are organized as a
                co-operative of creatives, developers, and operators who are
                experienced in launching and growing technology businesses.
              </p>
            </div>

            <Button
              className="w-fit p-4 border border-sky-400 rounded-2xl text-sky-400"
              size={"lg"}
            >
              <p className="text-lg"> Join Us Now</p>

              <ChevronRight size={24} />
            </Button>
          </div>
          <div className=""></div>
          <div className="relative w-full h-[176px] flex items-center justify-center bg-black">
            <Image
              src="/mission/img_1.png"
              alt="Logo"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-[376px] bg-black flex items-center justify-center row-span-2">
            <Image
              src="/mission/img_4.png"
              alt="Logo"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-[176px] bg-black flex items-center justify-center ">
            <Image
              src="/mission/img_3.png"
              alt="Logo"
              fill
              className="object-cover"
            />
          </div>

          <div className=""></div>
          <div className="relative w-full h-[176px] bg-black flex items-center justify-center ">
            <Image
              src="/mission/img_2.png"
              alt="Logo"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-[176px] bg-black flex items-center justify-center ">
            <Image
              src="/mission/img_5.png"
              alt="Logo"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-[176px] bg-black flex items-center justify-center ">
            <Image
              src="/mission/img_6.png"
              alt="Logo"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative w-full h-[176px] bg-black flex items-center justify-center ">
            {" "}
            <Image
              src="/mission/img_7.png"
              alt="Logo"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full min-w-[515px] h-[176px] bg-black flex items-center justify-center col-span-2 ">
            <Image
              src="/mission/img_8.png"
              alt="Logo"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="w-full p-8 flex flex-col gap-4 md:hidden">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 text-white">
            <p className="text-2xl md:text-6xl font-bold">Our Mission</p>
            <p className=" text-sm font-medium">
              We help the most promising projects in the Solana ecosystem in the
              Philippines launch and grow. We are organized as a co-operative of
              creatives, developers, and operators who are experienced in
              launching and growing technology businesses.
            </p>
          </div>
          <Button
            className="w-fit p-4 border border-sky-400 rounded-2xl text-sky-400"
            size={"lg"}
          >
            <p className="text-lg"> Join Us Now</p>

            <ChevronRight size={24} />
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-2 text-white min-w-[580px]">
          <div className="flex items-center justify-center">
            <div className="relative w-full  h-[176px] bg-black flex items-center justify-center">
              <Image
                src="/mission/img_1.png"
                alt="Logo"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full  h-[176px] bg-black flex items-center justify-center">
              <Image
                src="/mission/img_2.png"
                alt="Logo"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full  h-[176px] bg-black flex items-center justify-center">
              <Image
                src="/mission/img_3.png"
                alt="Logo"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex items-center justify-center row-span-2">
            <div className="relative w-full  h-[376px] bg-black flex items-center justify-center">
              <Image
                src="/mission/img_4.png"
                alt="Logo"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative w-full  h-[176px] bg-black flex items-center justify-center">
              <Image
                src="/mission/img_5.png"
                alt="Logo"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full  h-[176px] bg-black flex items-center justify-center">
              <Image
                src="/mission/img_6.png"
                alt="Logo"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full  h-[176px] bg-black flex items-center justify-center">
              <Image
                src="/mission/img_7.png"
                alt="Logo"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex items-center justify-center col-span-2">
            <div className="relative w-full min-w-[560px] h-[176px] bg-black flex items-center justify-center">
              <Image
                src="/mission/img_8.png"
                alt="Logo"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
{
  /* <div className="w-full p-8 grid grid-cols-4 grid-rows-4 gap-2">
      <div className=" row-span-2 col-span-2 ">
        <div className="flex flex-col gap-4 text-white">
          <p className="text-2xl md:text-6xl font-bold">Our Mission</p>
          <p className=" text-sm font-medium">
            We help the most promising projects in the Solana ecosystem in the
            Philippines launch and grow. We are organized as a co-operative of
            creatives, developers, and operators who are experienced in
            launching and growing technology businesses.
          </p>
        </div>
      </div>
      <div className=""></div>
      <div className="flex items-center justify-center bg-black">
        <p>Add Image</p>
      </div>
      <div className="bg-black flex items-center justify-center row-span-2">
        Image
      </div>
      <div className="bg-black flex items-center justify-center ">Image</div>

      <div className=""></div>
      <div className="bg-black flex items-center justify-center ">Image</div>
      <div className="bg-black flex items-center justify-center ">Image</div>
      <div className="bg-black flex items-center justify-center ">Image</div>

      <div className="bg-black flex items-center justify-center ">Image</div>
      <div className="bg-black flex items-center justify-center col-span-2 ">
        Image
      </div>
    </div> */
}

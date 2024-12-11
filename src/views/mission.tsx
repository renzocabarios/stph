import { Button } from "@/components/ui/button";

export default function Mission() {
  return (
    <div className="w-full p-8 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-4 text-white">
          <p className="text-2xl md:text-6xl font-bold">Our Mission</p>
          <p className=" text-sm font-medium">
            We help the most promising projects in the Solana ecosystem in the
            Philippines launch and grow. We are organized as a co-operative of
            creatives, developers, and operators who are experienced in
            launching and growing technology businesses.
          </p>
        </div>
        <Button className="w-fit">Join Us Now</Button>
      </div>

      <div className="grid grid-cols-2 gap-2 text-white">
        <div className="flex items-center justify-center">
          <div className="w-[270px] h-[176px] bg-black flex items-center justify-center">
            <p>Image</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-[270px] h-[176px] bg-black flex items-center justify-center">
            <p>Image</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-[270px] h-[176px] bg-black flex items-center justify-center">
            <p>Image</p>
          </div>
        </div>

        <div className="flex items-center justify-center row-span-2">
          <div className="w-[270px] h-[376px] bg-black flex items-center justify-center">
            <p>Image</p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-[270px] h-[176px] bg-black flex items-center justify-center">
            <p>Image</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-[270px] h-[176px] bg-black flex items-center justify-center">
            <p>Image</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-[270px] h-[176px] bg-black flex items-center justify-center">
            <p>Image</p>
          </div>
        </div>

        <div className="flex items-center justify-center col-span-2">
          <div className="w-[560px] h-[176px] bg-black flex items-center justify-center">
            <p>Image</p>
          </div>
        </div>
      </div>
    </div>
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

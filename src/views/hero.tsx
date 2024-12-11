export default function Hero() {
  return (
    <div className="w-full p-8">
      {/* <div className="flex flex-col space-y-8 mr-12 mt-[100px] py-[35px]">
          <div className="flex justify-center items-center border-[2px] border-[#2D2E48] rounded-[20px] w-[60px] h-[60px] bg-[rgba(109,103,103,0.23)]">
            <Button
              variant="ghost"
              className="bg-transparent hover:bg-transparent p-0"
            >
              <Image src="/learn.svg" alt="Icon 1" width={100} height={100} />
            </Button>
          </div>

          <div className="flex justify-center items-center border-[2px] border-[#2D2E48] rounded-[20px] w-[60px] h-[60px] bg-[rgba(109,103,103,0.23)]">
            <Button
              variant="ghost"
              className="bg-transparent hover:bg-transparent p-0"
            >
              <Image src="/earn.svg" alt="Icon 2" width={100} height={100} />
            </Button>
          </div>

          <div className="flex justify-center items-center border-[2px] border-[#2D2E48] rounded-[20px] w-[60px] h-[60px] bg-[rgba(109,103,103,0.23)]">
            <Button
              variant="ghost"
              className="bg-transparent hover:bg-transparent p-0"
            >
              <Image src="/build.svg" alt="Icon 3" width={30} height={30} />
            </Button>
          </div>

          <div className="flex justify-center items-center border-[2px] border-[#2D2E48] rounded-[20px] w-[60px] h-[60px] bg-[rgba(109,103,103,0.23)]">
            <Button
              variant="ghost"
              className="bg-transparent hover:bg-transparent p-0"
            >
              <Image src="/chill.svg" alt="Icon 4" width={100} height={100} />
            </Button>
          </div>
        </div> */}

      <div className="flex flex-col gap-4 text-white">
        <p className="text-2xl md:text-6xl font-bold">
          Join the
          <br />
          Web3 Revolution
        </p>
        <p className=" text-sm font-medium">
          At Superteam Philippines, we are dedicated to propelling the most
          promising projects within the Solana ecosystem to new heights. As the
          official Solana Superteam in the Philippines, we are uniquely
          positioned to support and foster innovation in this rapidly evolving
          space.
        </p>
      </div>
    </div>
  );
}

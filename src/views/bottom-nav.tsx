import { Separator } from "@/components/ui/separator";
import Image from "next/image";
export default function BottomNav() {
  return (
    <>
      <div className="hidden md:flex w-full items-center justify-center">
        <div className="w-full max-w-[1040px] flex flex-col gap-8 p-4">
          <div className="w-full flex items-center justify-between">
            <div className="relative min-w-[240px] min-h-[40px] flex items-center justify-center">
              <Image src="/stph.png" alt="Logo" fill className="object-cover" />
            </div>

            <div className="flex items-center gap-8">
              <p className="text-sm">LEARN</p>
              <p className="text-sm">EARN</p>
              <p className="text-sm">BUILD</p>
              <p className="text-sm">CHILL</p>
            </div>
          </div>

          <div className="w-full h-[0.5px] bg-gray-500"></div>

          <div className="w-full flex items-center justify-between">
            <p className="text-sm">© Superteam PHL 2024. All rights reserved</p>

            {/* <div className="flex items-center gap-8">
              <p className="text-sm">LEARN</p>
              <p className="text-sm">EARN</p>
              <p className="text-sm">BUILD</p>
              <p className="text-sm">CHILL</p>
            </div> */}
          </div>
        </div>
      </div>

      <div className="md:hidden w-full flex flex-col items-center gap-8 p-4">
        <div className="relative min-w-[240px] min-h-[40px] flex items-center justify-center">
          <Image src="/stph.png" alt="Logo" fill className="object-cover" />
        </div>
        <div className="flex items-center gap-2 w-full justify-between">
          <p className="text-sm">LEARN</p>
          <p className="text-sm">EARN</p>
          <p className="text-sm">BUILD</p>
          <p className="text-sm">CHILL</p>
        </div>

        <p className="text-sm">© Superteam PHL 2024. All rights reserved</p>
        {/* <div className="flex items-center gap-2">
        <p>SOC</p>
        <p>SOC</p>
        <p>SOC</p>
        <p>SOC</p>
      </div> */}
      </div>
    </>
  );
}

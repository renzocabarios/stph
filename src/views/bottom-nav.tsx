import { Separator } from "@/components/ui/separator";
import Image from "next/image";
export default function BottomNav() {
  return (
    <div className="w-full flex flex-col items-center gap-4">
      <div className="logo">
        <Image src="/stph.png" alt="Logo" className="h-11"></Image>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-sm">LEARN</p>
        <p className="text-sm">EARN</p>
        <p className="text-sm">BUILD</p>
        <p className="text-sm">CHILL</p>
      </div>

      <Separator />

      <p className="text-sm">© Superteam PHL 2024. All rights reserved</p>
      <div className="flex items-center gap-2">
        <p>SOC</p>
        <p>SOC</p>
        <p>SOC</p>
        <p>SOC</p>
      </div>
    </div>
  );
}

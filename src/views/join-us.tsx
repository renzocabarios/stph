import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function JoinUs() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full flex flex-col gap-8  p-8 max-w-[1040px] md:flex-row">
        <div className="flex flex-col gap-4 md:gap-8">
          <p className="text-2xl md:text-6xl font-bold">
            Unleash the future.
            <br />
            Join our community.
          </p>

          <Button
            className="w-fit p-4 border border-sky-400 rounded-2xl text-sky-400"
            size={"lg"}
          >
            <p className="text-lg"> Join Us Now</p>

            <ChevronRight size={24} />
          </Button>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-4xl md:text-8xl font-bold text-sky-400">5K+</p>
            <p className="text-sm md:text-lg font-light">
              Active SOLANA accounts
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-4xl md:text-8xl font-bold text-sky-400">10K+</p>
            <p className="text-sm md:text-lg font-light">Active members</p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-4xl md:text-8xl font-bold text-sky-400">$2.5K</p>
            <p className="text-sm md:text-lg font-light">Average earnings</p>
          </div>
        </div>
      </div>
    </div>
  );
}

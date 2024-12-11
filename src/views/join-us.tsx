import { Button } from "@/components/ui/button";

export default function JoinUs() {
  return (
    <div className="w-full flex flex-col gap-8  p-8">
      <div className="flex flex-col gap-4">
        <p className="text-2xl md:text-6xl font-bold">
          Unleash the future.
          <br />
          Join our community.
        </p>

        <Button className="w-fit">Join us here</Button>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-4xl md:text-6xl font-bold">5K+</p>
          <p>Active SOLANA accounts</p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-4xl md:text-6xl font-bold">10K+</p>
          <p>Active members</p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-4xl md:text-6xl font-bold">$2.5K</p>
          <p>Average earnings</p>
        </div>
      </div>
    </div>
  );
}

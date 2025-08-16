import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Server, Zap, MessageCircle } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative py-20 px-4 text-center overflow-hidden">
      <div className="relative max-w-4xl mx-auto space-y-12">
        <div className="space-y-6">
          <div className="flex flex-col gap-4 text-sm">
            <div className="flex items-center justify-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">Active Players</span>
              <span className="font-bold text-primary">1,247</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Server className="w-5 h-5 text-accent" />
              <span className="text-muted-foreground">Live Servers</span>
              <span className="font-bold text-accent">12</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Zap className="w-5 h-5 text-gaming-green" />
              <span className="text-muted-foreground">99.9% Uptime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
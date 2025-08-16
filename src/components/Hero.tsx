import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Server, Zap, MessageCircle } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative py-20 px-4 text-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
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
        
        <div className="flex flex-col gap-4 justify-center max-w-sm mx-auto">
          <Button size="lg" variant="secondary" className="font-semibold flex items-center gap-2">
            <MessageCircle className="w-5 h-5" />
            Join Discord
          </Button>
        </div>
      </div>
    </section>
  );
};
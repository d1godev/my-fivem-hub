import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Users, MapPin, Clock, Zap, Shield } from "lucide-react";
import serverLogo from "@/assets/server-logo.png";
import serverBg from "@/assets/server-bg.png";

interface ServerCardProps {
  name: string;
  description: string;
  players: { current: number; max: number };
  location: string;
  ping: number;
  gameMode: string;
  tags: string[];
  isOnline: boolean;
  featured?: boolean;
}

export const ServerCard = ({
  name,
  description,
  players,
  location,
  ping,
  gameMode,
  tags,
  isOnline,
  featured = false
}: ServerCardProps) => {
  const playerPercentage = (players.current / players.max) * 100;
  
  return (
    <Card className={`group relative overflow-hidden hover:shadow-neon transition-all duration-500 hover:scale-[1.02] bg-gradient-card border-border/50 ${featured ? 'neon-border' : ''}`}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center transition-opacity duration-500 group-hover:opacity-30"
        style={{ backgroundImage: `url(${serverBg})` }}
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-60" />
      
      <CardHeader className="relative pb-3 z-10">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              {/* Server Logo */}
              <div className="relative">
                <img 
                  src={serverLogo} 
                  alt="Server Logo" 
                  className="w-8 h-8 rounded-lg shadow-lg ring-2 ring-primary/30 transition-transform duration-300 group-hover:scale-110"
                />
                <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${isOnline ? 'bg-gaming-green' : 'bg-destructive'} animate-pulse shadow-lg`} />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className={`font-bold text-lg transition-all duration-300 ${featured ? 'glow-text text-xl' : 'group-hover:text-primary'}`}>
                    {name}
                  </h3>
                  {featured && <Zap className="w-5 h-5 text-primary animate-pulse drop-shadow-glow" />}
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{description}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Game Mode Badge Only */}
        <div className="flex justify-start mt-3">
          <Badge variant="secondary" className="text-xs font-medium bg-secondary/80 backdrop-blur-sm">
            {gameMode}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="relative space-y-4 z-10">
        {/* Enhanced Player Progress */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="p-1 rounded bg-primary/20">
                <Users className="w-4 h-4 text-primary" />
              </div>
              <span className="font-medium">Players Online</span>
            </div>
            <span className="font-bold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {players.current}/{players.max}
            </span>
          </div>
          <Progress 
            value={playerPercentage} 
            className="h-3 bg-secondary/50 border border-primary/20"
          />
        </div>
        
        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2 text-sm p-2 rounded-lg bg-background/50 backdrop-blur-sm border border-primary/10">
            <div className="p-1 rounded bg-accent/20">
              <MapPin className="w-4 h-4 text-accent" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Location</div>
              <div className="font-medium">{location}</div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm p-2 rounded-lg bg-background/50 backdrop-blur-sm border border-primary/10">
            <div className="p-1 rounded bg-gaming-green/20">
              <Clock className="w-4 h-4 text-gaming-green" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Ping</div>
              <div className="font-medium">{ping}ms</div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Join Button */}
        <Button 
          className="w-full font-bold text-base py-3 transition-all duration-500 hover:shadow-neon bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 border border-primary/30" 
          disabled={!isOnline}
        >
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            {isOnline ? "Connect to Server" : "Server Offline"}
          </div>
        </Button>
      </CardContent>
    </Card>
  );
};
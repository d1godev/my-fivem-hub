import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Users, MapPin, Clock, Zap, Shield, MessageCircle, Wrench } from "lucide-react";
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
  underDevelopment?: boolean;
  discordLink?: string;
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
  featured = false,
  underDevelopment = false,
  discordLink
}: ServerCardProps) => {
  const playerPercentage = (players.current / players.max) * 100;
  
  return (
    <Card className={`group relative overflow-hidden hover:shadow-neon transition-all duration-500 hover:scale-[1.02] bg-gradient-card border-border/50 ${featured ? 'neon-border' : ''}`}>
      {/* Subtle Background Image */}
      <div 
        className="absolute inset-0 opacity-5 bg-cover bg-center transition-opacity duration-500 group-hover:opacity-10"
        style={{ backgroundImage: `url(${serverBg})` }}
      />
      
      {/* Subtle Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <CardHeader className="relative pb-3 z-10 bg-background/20 backdrop-blur-sm border-b border-primary/10">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              {/* Server Logo */}
              <div className="relative p-1 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30">
                <img 
                  src={serverLogo} 
                  alt="Server Logo" 
                  className="w-8 h-8 rounded-md shadow-lg transition-transform duration-300 group-hover:scale-110"
                />
                <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${isOnline ? 'bg-gaming-green' : 'bg-destructive'} animate-pulse shadow-lg ring-2 ring-background/50`} />
              </div>
              
              <div className="flex-1 bg-background/30 backdrop-blur-sm rounded-lg p-2 border border-primary/10">
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
        
        {/* Game Mode Badge and Status */}
        <div className="flex items-center justify-between mt-3">
          <Badge variant="secondary" className="text-xs font-medium bg-gradient-to-r from-secondary to-secondary/80 backdrop-blur-sm border border-primary/20">
            {gameMode}
          </Badge>
          {underDevelopment && (
            <Badge variant="outline" className="text-xs font-medium bg-gradient-to-r from-orange-500/20 to-orange-400/20 border-orange-400/30 text-orange-300">
              <Wrench className="w-3 h-3 mr-1" />
              Under Development
            </Badge>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="relative space-y-4 z-10 bg-background/10 backdrop-blur-sm">
        {/* Enhanced Player Progress */}
        <div className="space-y-3 bg-background/20 backdrop-blur-sm rounded-lg p-3 border border-primary/10">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="p-2 rounded-lg bg-gradient-to-br from-primary/30 to-primary/20 border border-primary/30">
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
        
        {/* Action Buttons */}
        <div className="space-y-2">
          {/* Enhanced Join Button */}
          <Button 
            className="w-full font-bold text-base py-3 transition-all duration-500 hover:shadow-neon bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 border border-primary/30" 
            disabled={!isOnline || underDevelopment}
          >
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              {underDevelopment ? "Coming Soon" : isOnline ? "Connect to Server" : "Server Offline"}
            </div>
          </Button>
          
          {/* Discord Button */}
          {discordLink && (
            <Button 
              variant="outline" 
              className="w-full transition-all duration-300 hover:bg-[#5865F2]/20 hover:border-[#5865F2]/50 hover:text-[#5865F2]"
              onClick={() => window.open(discordLink, '_blank')}
            >
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Join Discord
              </div>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
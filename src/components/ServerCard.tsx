import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Users, MapPin, Clock, Zap } from "lucide-react";

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
    <Card className={`group hover:shadow-neon transition-all duration-300 hover:scale-[1.02] bg-gradient-card border-border/50 ${featured ? 'neon-border' : ''}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className={`font-bold text-lg ${featured ? 'glow-text' : ''}`}>{name}</h3>
              {featured && <Zap className="w-4 h-4 text-primary animate-pulse" />}
              <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-gaming-green' : 'bg-destructive'} animate-pulse`} />
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mt-2">
          <Badge variant="secondary" className="text-xs">
            {gameMode}
          </Badge>
          {tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
          {tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{tags.length - 3}
            </Badge>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1 text-muted-foreground">
              <Users className="w-4 h-4" />
              <span>Players</span>
            </div>
            <span className="font-medium">
              {players.current}/{players.max}
            </span>
          </div>
          <Progress 
            value={playerPercentage} 
            className="h-2"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-1 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{ping}ms</span>
          </div>
        </div>
        
        <Button 
          className="w-full font-medium transition-all duration-300 hover:shadow-neon" 
          variant={featured ? "default" : "secondary"}
          disabled={!isOnline}
        >
          {isOnline ? "Join Server" : "Offline"}
        </Button>
      </CardContent>
    </Card>
  );
};
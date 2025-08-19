import { ServerCard } from "./ServerCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, SortDesc } from "lucide-react";

const mockServers = [
  {
    name: "NoPixel Public",
    description: "The most popular GTA RP server with custom jobs, businesses, and an amazing community.",
    players: { current: 247, max: 250 },
    location: "US West",
    ping: 23,
    gameMode: "Roleplay",
    tags: ["Serious RP", "Whitelisted", "Custom Jobs", "Economy"],
    isOnline: true,
    featured: true,
    discordLink: "https://discord.gg/nopixel"
  },
  {
    name: "Eclipse RP",
    description: "Heavy roleplay server with realistic economy and immersive storylines.",
    players: { current: 198, max: 200 },
    location: "US East",
    ping: 45,
    gameMode: "Heavy RP",
    tags: ["Heavy RP", "Text Based", "Realistic", "Adult"],
    isOnline: true,
    featured: true,
    discordLink: "https://discord.gg/eclipserp"
  },
  {
    name: "GTA World",
    description: "Text-based heavy roleplay with a focus on realism and character development.",
    players: { current: 156, max: 180 },
    location: "Europe",
    ping: 67,
    gameMode: "Text RP",
    tags: ["Text RP", "Heavy RP", "Realistic", "English"],
    isOnline: true,
    discordLink: "https://discord.gg/gtaworld"
  },
  {
    name: "NewDay RP",
    description: "Balanced roleplay server with custom scripts and active staff team.",
    players: { current: 89, max: 120 },
    location: "US Central",
    ping: 34,
    gameMode: "Medium RP",
    tags: ["Medium RP", "Custom Scripts", "Active Staff"],
    isOnline: true,
    underDevelopment: true,
    discordLink: "https://discord.gg/newdayrp"
  },
  {
    name: "HighLife RP",
    description: "Casual roleplay server perfect for beginners and experienced players alike.",
    players: { current: 67, max: 100 },
    location: "Canada",
    ping: 56,
    gameMode: "Light RP",
    tags: ["Light RP", "Beginner Friendly", "Custom Cars"],
    isOnline: true,
    discordLink: "https://discord.gg/highliferp"
  },
  {
    name: "Underground RP",
    description: "Serious roleplay server with unique criminal organizations and businesses.",
    players: { current: 0, max: 64 },
    location: "US West",
    ping: 28,
    gameMode: "Serious RP",
    tags: ["Serious RP", "Criminal RP", "Organizations"],
    isOnline: false,
    underDevelopment: true,
    discordLink: "https://discord.gg/undergroundrp"
  }
];

export const ServerList = () => {
  const onlineServers = mockServers.filter(server => server.isOnline);
  const totalPlayers = onlineServers.reduce((sum, server) => sum + server.players.current, 0);

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Active Servers</h2>
          <p className="text-muted-foreground text-lg mb-6">
            {onlineServers.length} servers online • {totalPlayers} total players
          </p>
          
          {/* Search and Filter Controls */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Search servers..." 
                className="pl-10 bg-secondary/50 border-border/50"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <SortDesc className="w-4 h-4" />
              Sort
            </Button>
          </div>
          
          {/* Popular Tags */}
          <div className="flex flex-wrap justify-center gap-2">
            {["Roleplay", "Serious RP", "Heavy RP", "Custom Jobs", "Whitelisted"].map((tag) => (
              <Badge key={tag} variant="secondary" className="cursor-pointer hover:bg-primary/20 transition-colors">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockServers.map((server, index) => (
            <ServerCard key={index} {...server} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Servers
          </Button>
        </div>
      </div>
    </section>
  );
};
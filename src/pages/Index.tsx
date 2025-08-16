import { Hero } from "@/components/Hero";
import { ServerList } from "@/components/ServerList";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ServerList />
    </div>
  );
};

export default Index;

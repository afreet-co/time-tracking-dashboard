import { ProfileCard } from "../components/ProfileCard";
import { TimeCard } from "../components/TimeCard";
import { timeData } from "../data";

const Index = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-v-dark-blue">
      <div className="m-auto grid grid-cols-4 gap-6">
        <ProfileCard />
        {timeData.map((td) => (
          <TimeCard key={td.title} {...td} />
        ))}
      </div>
    </div>
  );
};
export default Index;

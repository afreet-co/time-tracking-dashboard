import { ProfileCard } from "../components/ProfileCard";
import { TimeCard } from "../components/TimeCard";
import { timeData } from "../data";

const Index = () => {
  return (
    <div className="flex sm:items-center sm:justify-center sm:h-screen w-screen bg-v-dark-blue">
      <div className="sm:m-auto grid grid-cols-1 sm:grid-cols-4 gap-6 w-full sm:w-auto p-6 my-20 sm:my-0">
        <ProfileCard />
        {timeData.map((td) => (
          <TimeCard key={td.title} {...td} />
        ))}
      </div>
    </div>
  );
};
export default Index;

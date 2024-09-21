import CardSummary from "./components/CardSummary/CardSummary";
import { BookOpenCheck, UsersRound, Waypoints } from "lucide-react";

export const dataCardsSumary = [
  {
    icon: UsersRound,
    total: "10.45%",
    average: 15,
    title: "Companies created",
    tooltipText: "See all of the companies created"
  },
  {
    icon: Waypoints,
    total: "96.5%",
    average: 80,
    title: "Total Revenue",
    tooltipText: "See all of the sumary"
  },
  {
    icon: BookOpenCheck,
    total: "363,95",
    average: 30,
    title: "Total Revenue",
    tooltipText: "See all of the sumary"
  },
]

export default function Home() {
  return (
    <div className="">
      <h2 className="text-2xl mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-20">
        {
          dataCardsSumary.map((data, key) => (
          <CardSummary
              key={key}
              icon={data.icon}
              total={data.total}
              average={data.average}
              title={data.title}
              tooltipText={data.tooltipText}
            />
          ))
        }
        
        
      </div>
    </div>
  );
}

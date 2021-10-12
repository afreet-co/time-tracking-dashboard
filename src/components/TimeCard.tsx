import React, { FC } from "react";
import { useAppContext } from "../context/AppContext";
import { TimeData } from "../data";
import { Ellipsis } from "./icons/ellipsis";

export const TimeCard: FC<TimeData> = (data) => {
  if (!data) return null;
  const { filter } = useAppContext();
  const timestamp = data[filter];
  const Icon = data["Icon"];
  return (
    <div
      className={`h-40 w-full sm:w-40 rounded-t-2xl rounded-b-3xl flex flex-col items-end ${data.bgClass}`}
    >
      <div className="overflow-hidden">
        <Icon />
      </div>
      <div className="h-32 w-full rounded-2xl bg-dark-blue block hover:bg-blue p-5 text-pale-blue space-y-4 cursor-pointer transition-all duration-150">
        <div className="flex justify-between items-center">
          <h3 className="text-sm">{data.title}</h3>
          <button className="p-2 hover:text-pale-blue">
            <Ellipsis />
          </button>
        </div>
        <div className="flex flex-row sm:flex-col justify-between items-center sm:items-start sm:space-y-1">
          <div className="text-2xl">{timestamp?.current}</div>
          <div className="text-xs text-pale-blue">
            {filter === "daily"
              ? "Yesterday"
              : filter === "monthly"
              ? "Last Month"
              : "Last Week"}{" "}
            - {timestamp?.previous}
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { FC } from "react";
import { TimeData } from "../data";
import { Ellipsis } from "./icons/ellipsis";

export const TimeCard: FC<TimeData> = (data) => {
  if (!data) return null;
  const timestamp = data["daily"];
  const Icon = data["Icon"];
  return (
    <div
      className={`h-40 w-40 rounded-t-2xl rounded-b-3xl flex flex-col items-end ${data.bgClass}`}
    >
      <div className="overflow-hidden">
        <Icon />
      </div>
      <div className="h-32 w-40 rounded-2xl bg-dark-blue block hover:bg-blue p-5 text-pale-blue space-y-4 cursor-pointer transition-all duration-150">
        <div className="flex justify-between items-center">
          <h3 className="text-sm">{data.title}</h3>
          <div>
            <Ellipsis />
          </div>
        </div>
        <div className="flex-col flex space-y-1">
          <div className="text-2xl">{timestamp?.current}</div>
          <div className="text-xs pale-blue">
            Last day - {timestamp?.previous}
          </div>
        </div>
      </div>
    </div>
  );
};

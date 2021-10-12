import React, { FC } from "react";
import { FilterType, useAppContext } from "../context/AppContext";

export const ProfileCard: FC = () => {
  const { changeFilter } = useAppContext();
  return (
    <div
      className={`h-88 w-full sm:w-40 rounded-2xl flex flex-col items-start bg-dark-blue row-span-2`}
    >
      <div className="sm:h-60 w-full rounded-2xl bg-blue flex flex-row sm:flex-col justify-start items-center sm:items-start space-x-4 sm:space-x-0 sm:space-y-8 p-8 sm:p-4">
        <img
          src="/profile-pic.png"
          alt="Jeremy Robson"
          className="w-16 h-16 border-2 border-solid border-white rounded-full"
        />
        <div className="text-pale-blue">
          <div className="text-sm sm:text-xs pale-blue">Report for</div>
          <div className="text-2xl">Jeremy Robson</div>
        </div>
      </div>
      <div className="flex flex-row sm:flex-col justify-around sm:justify-between p-6 sm:p-4 w-full sm:space-y-1">
        <ProfileCardButton onClick={() => changeFilter("daily")} value="daily">
          Daily
        </ProfileCardButton>
        <ProfileCardButton
          onClick={() => changeFilter("weekly")}
          value="weekly"
        >
          Weekly
        </ProfileCardButton>
        <ProfileCardButton
          onClick={() => changeFilter("monthly")}
          value="monthly"
        >
          Monthly
        </ProfileCardButton>
      </div>
    </div>
  );
};

interface ProfileCardButtonProps {
  onClick?: () => void;
  value: FilterType;
}

export const ProfileCardButton: FC<ProfileCardButtonProps> = ({
  children,
  onClick,
  value,
}) => {
  const { filter } = useAppContext();
  const isActive = filter === value;
  return (
    <button
      onClick={onClick}
      className={` text-left text-sm ${
        isActive
          ? "text-pale-blue cursor-default"
          : "hover:text-pale-blue text-de-saturated-blue cursor-pointer"
      }`}
    >
      {children}
    </button>
  );
};

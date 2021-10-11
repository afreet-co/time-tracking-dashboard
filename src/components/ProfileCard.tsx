import React, { FC } from "react";

export const ProfileCard: FC = () => {
  return (
    <div
      className={`h-88 w-40 rounded-2xl flex flex-col items-start bg-dark-blue row-span-2`}
    >
      <div className="h-60 w-40 rounded-2xl bg-blue p-4 flex flex-col justify-start items-start space-y-8">
        <img
          src="/profile-pic.png"
          alt="Jeremy Robson"
          className="w-16 h-16 border-2 border-solid border-white rounded-full"
        />
        <div className="text-pale-blue">
          <div className="text-xs pale-blue">Report for</div>
          <div className="text-2xl">Jeremy Robson</div>
        </div>
      </div>
      <div className="flex flex-col justify-between p-4 w-full space-y-1">
        <ProfileCardButton>Daily</ProfileCardButton>
        <ProfileCardButton>Weekly</ProfileCardButton>
        <ProfileCardButton>Monthly</ProfileCardButton>
      </div>
    </div>
  );
};

interface ProfileCardButtonProps {
  onClick?: () => void;
}

export const ProfileCardButton: FC<ProfileCardButtonProps> = ({
  children,
  onClick,
}) => {
  const isActive = children === "Weekly";
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

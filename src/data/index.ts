import React, { ReactNode } from "react";
import * as icons from "../components/icons";
export type TimeData = {
  title: string;
  Icon: () => JSX.Element;
  bgClass: string;
  daily: {
    current: string;
    previous: string;
  };
  weekly: {
    current: string;
    previous: string;
  };
  monthly: {
    current: string;
    previous: string;
  };
};

export const timeData: TimeData[] = [
  {
    title: "Work",
    Icon: icons.Work,
    bgClass: "bg-work",
    daily: {
      current: "5hrs",
      previous: "7hrs",
    },
    weekly: {
      current: "32hrs",
      previous: "36hrs",
    },
    monthly: {
      current: "103hrs",
      previous: "128hrs",
    },
  },
  {
    title: "Play",
    Icon: icons.Play,
    bgClass: "bg-play",
    daily: {
      current: "1hr",
      previous: "2hrs",
    },
    weekly: {
      current: "10hrs",
      previous: "8hrs",
    },
    monthly: {
      current: "23hrs",
      previous: "29hrs",
    },
  },
  {
    title: "Study",
    Icon: icons.Study,
    bgClass: "bg-study",
    daily: {
      current: "0hrs",
      previous: "1hr",
    },
    weekly: {
      current: "4hrs",
      previous: "7hrs",
    },
    monthly: {
      current: "13hrs",
      previous: "19hrs",
    },
  },
  {
    title: "Exercise",
    Icon: icons.Exercise,
    bgClass: "bg-exercise",
    daily: {
      current: "1hr",
      previous: "1hr",
    },
    weekly: {
      current: "4hrs",
      previous: "5hrs",
    },
    monthly: {
      current: "11hrs",
      previous: "18hrs",
    },
  },
  {
    title: "Social",
    Icon: icons.Social,
    bgClass: "bg-social",
    daily: {
      current: "1hr",
      previous: "3hrs",
    },
    weekly: {
      current: "5hrs",
      previous: "10hrs",
    },
    monthly: {
      current: "21hrs",
      previous: "23hrs",
    },
  },
  {
    title: "Self Care",
    Icon: icons.SelfCare,
    bgClass: "bg-self-care",
    daily: {
      current: "0hrs",
      previous: "1hr",
    },
    weekly: {
      current: "2hrs",
      previous: "2hrs",
    },
    monthly: {
      current: "7hrs",
      previous: "11hrs",
    },
  },
];

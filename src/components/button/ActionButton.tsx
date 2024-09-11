"use client";

import { setCookie } from "@/utils/setCookie/setCookie";

interface ActionButtonProps {
  text: string;
  action?: () => void;
}

const ActionButton = ({ text, action }: ActionButtonProps) => {
  return <button onClick={() => setCookie("language", "en")}>{text}</button>;
};

export default ActionButton;

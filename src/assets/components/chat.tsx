import { FunctionComponent, ReactNode } from "react";
import { cn } from "../lib/utils";
import { Avatar } from "./avatar";
import { motion } from "framer-motion";
import { VARIANTS } from "../lib/variants";
import { useChat } from "../../store";
export const Chat: FunctionComponent<{
  image: string;
  status?: boolean;
  name: string;
  message: ReactNode;
  date: string | Date;
  selected?: boolean;
  pin?: ReactNode;
}> = ({
  image,
  status = false,
  date,
  message,
  name,
  selected = false,
  pin,
}) => {
  return (
    <motion.div
      variants={VARIANTS}
      className={cn(
        "hover:bg-app-hovered-2 transition-colors cursor-pointer p-3 rounded-2xl flex gap-3 items-center justify-between",
        selected && "bg-app-hovered"
      )}
      onClick={() =>
        useChat.setState({
          user: { image, selected: true, status, date, message, name, pin },
        })
      }
    >
      <div className="flex gap-3 items-center">
        <Avatar status={status} image={image} />
        <div className="flex flex-col h-[43px] justify-between">
          <h3 className=" font-medium">{name}</h3>
          <span className="text-xs text-app-text-secondary flex items-center gap-1">
            {message}
          </span>
        </div>
      </div>
      <div className="flex flex-col text-right h-[43px] justify-between items-end mix-blend-color-dodge">
        <span className="text-xs text-app-text-secondary">
          {typeof date === "string" ? date : date.toString()}
        </span>
        <div>{pin && pin}</div>
      </div>
    </motion.div>
  );
};

export const Notification: FunctionComponent<{ nbr: number }> = ({ nbr }) => (
  <div className="w-6 h-6 bg-app-primary rounded-full font-semibold flex items-center justify-center text-[15px]">
    {nbr}
  </div>
);

export const MsgSend: FunctionComponent<{
  time: string;
  content: ReactNode;
}> = ({ content, time }) => (
  <motion.div
    variants={{
      hidden: {
        opacity: 0,
        x: 24,
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
        },
      },
    }}
    className="flex justify-end"
  >
    <div className="text-left space-y-1 msg glass-green rounded-xl p-3 rounded-tr-none backdrop-blur-xl">
      <div className="flex flex-row gap-3 items-center">{content}</div>
      <div className="text-right text-xs text-app-text-secondary">{time}</div>
    </div>
  </motion.div>
);

export const MsgReceve: FunctionComponent<{
  time: string;
  content: ReactNode;
}> = ({ content, time }) => (
  <motion.div
    variants={{
      hidden: {
        opacity: 0,
        x: -24,
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
        },
      },
    }}
    className="flex justify-start"
  >
    <div className="text-left space-y-1 msg-r glass rounded-xl p-3 rounded-tl-none backdrop-blur-xl">
      <div className="flex flex-row-reverse gap-3 items-center">{content}</div>
      <div className="text-xs text-app-text-secondary">{time}</div>
    </div>
  </motion.div>
);

export const Vocal: FunctionComponent<{
  image?: string;
}> = ({ image }) => {
  const { user } = useChat();
  return (
    <>
      <Avatar image={image ? image : user.image} />
      <div className="w-[250px] h-1 rounded bg-white/70"></div>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        className="fill-white/70"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.3418 21.3711C9.71094 21.3711 10.0361 21.2393 10.4404 21.002L20.8203 14.999C21.5762 14.5596 21.8926 14.2168 21.8926 13.6631C21.8926 13.1094 21.5762 12.7754 20.8203 12.3271L10.4404 6.32422C10.0361 6.08691 9.71094 5.95508 9.3418 5.95508C8.62109 5.95508 8.11133 6.50879 8.11133 7.37891V19.9473C8.11133 20.8262 8.62109 21.3711 9.3418 21.3711Z"
          fill-opacity="0.23"
        />
        <path d="M9.3418 21.3711C9.71094 21.3711 10.0361 21.2393 10.4404 21.002L20.8203 14.999C21.5762 14.5596 21.8926 14.2168 21.8926 13.6631C21.8926 13.1094 21.5762 12.7754 20.8203 12.3271L10.4404 6.32422C10.0361 6.08691 9.71094 5.95508 9.3418 5.95508C8.62109 5.95508 8.11133 6.50879 8.11133 7.37891V19.9473C8.11133 20.8262 8.62109 21.3711 9.3418 21.3711Z" />
      </svg>
    </>
  );
};

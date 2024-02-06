import { FunctionComponent } from "react";
import { cn } from "../lib/utils";

export const Avatar: FunctionComponent<{ image: string; status?: boolean }> = ({
  image,
  status = false,
}) => {
  return (
    <div
      className={cn(
        "avatar w-14 h-14 rounded-full p-[3px] flex items-center justify-center overflow-hidden",
        status && "border-app-primary border-[3px]"
      )}
    >
      <img src={image} alt="" className="w-full" />
    </div>
  );
};

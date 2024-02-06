import { FunctionComponent } from "react";
import { CHATS } from "../helpers/chats";
import { Avatar } from "./avatar";
import { Chat } from "./chat";

export const Sidebar: FunctionComponent = () => {
  return (
    <nav className="sidebar w-[30%] bg-app-sidebar h-full overflow-y-auto overflow-x-hidden relative">
      <header className="px-6 py-4 flex items-center gap-6 text-3xl font-bold">
        <Avatar
          status
          image="https://jeansamist.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fme.6de5049e.png&w=640&q=75"
        />
        <h1>Chats</h1>
      </header>
      <div className="px-6 relative">
        <input
          className="search py-2 w-full px-4 font-medium outline-none text-app-foreground h-11 rounded-full placeholder:text-app-text-secondary"
          placeholder="Search or start new chat"
        />
        <div className="search-btn inline-flex absolute right-6 top-1/2 w-[30px] h-[30px] justify-center items-center rounded-full cursor-pointer bg-app-sidebar backdrop-blur-xl">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-app-text-secondary"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.742 16.3142C11.9398 16.3142 13.0623 15.9526 13.9964 15.3349L17.2961 18.6421C17.5146 18.853 17.7933 18.9585 18.0946 18.9585C18.7199 18.9585 19.1795 18.4688 19.1795 17.8511C19.1795 17.5648 19.0815 17.2861 18.8706 17.0751L15.5935 13.783C16.2715 12.8187 16.6708 11.651 16.6708 10.3854C16.6708 7.1234 14.004 4.45654 10.742 4.45654C7.4875 4.45654 4.81311 7.1234 4.81311 10.3854C4.81311 13.6474 7.47996 16.3142 10.742 16.3142ZM10.742 14.7322C8.35385 14.7322 6.39514 12.7735 6.39514 10.3854C6.39514 7.99728 8.35385 6.03857 10.742 6.03857C13.1301 6.03857 15.0888 7.99728 15.0888 10.3854C15.0888 12.7735 13.1301 14.7322 10.742 14.7322Z"
              fill-opacity="0.23"
            />
            <path d="M10.742 16.3142C11.9398 16.3142 13.0623 15.9526 13.9964 15.3349L17.2961 18.6421C17.5146 18.853 17.7933 18.9585 18.0946 18.9585C18.7199 18.9585 19.1795 18.4688 19.1795 17.8511C19.1795 17.5648 19.0815 17.2861 18.8706 17.0751L15.5935 13.783C16.2715 12.8187 16.6708 11.651 16.6708 10.3854C16.6708 7.1234 14.004 4.45654 10.742 4.45654C7.4875 4.45654 4.81311 7.1234 4.81311 10.3854C4.81311 13.6474 7.47996 16.3142 10.742 16.3142ZM10.742 14.7322C8.35385 14.7322 6.39514 12.7735 6.39514 10.3854C6.39514 7.99728 8.35385 6.03857 10.742 6.03857C13.1301 6.03857 15.0888 7.99728 15.0888 10.3854C15.0888 12.7735 13.1301 14.7322 10.742 14.7322Z" />
          </svg>
        </div>
      </div>
      <div className="px-3 py-4 space-y-3">
        {CHATS.map((props, key) => (
          <Chat {...props} key={key} />
        ))}
      </div>
      <div className="chats"></div>
    </nav>
  );
};

import { ReactNode } from "react";
import avatar1 from "./../images/avatars/avatar1.png";
import avatar2 from "./../images/avatars/avatar2.png";
import avatar3 from "./../images/avatars/avatar3.png";
import avatar4 from "./../images/avatars/avatar4.png";
import avatar5 from "./../images/avatars/avatar5.png";
import avatar6 from "./../images/avatars/avatar6.png";
import avatar7 from "./../images/avatars/avatar7.png";
import avatar8 from "./../images/avatars/avatar8.png";
import { Notification } from "../components/chat";

export const CHATS: {
  image: string;
  status?: boolean;
  name: string;
  message: ReactNode;
  date: string | Date;
  selected?: boolean;
  pin?: ReactNode;
}[] = [
  {
    image: avatar2,
    status: true,
    date: "13:52",
    name: "Stella",
    selected: true,
    pin: (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.923118 5.145C0.599948 5.46817 0.607051 5.90143 0.944426 6.2388L2.84083 8.13521L1.15751 9.81853C0.663872 10.3122 0.411729 11.0757 0.511166 11.1751C0.607052 11.271 1.37058 11.0189 1.86422 10.5252L3.54754 8.84192L5.4475 10.7419C5.78487 11.0792 6.21458 11.0828 6.53775 10.7596C7.30484 9.99255 7.4824 8.60043 6.84672 7.22607L8.38799 5.45751C9.21544 5.68835 9.96477 5.77713 10.3838 5.72031C10.6076 5.69545 10.7851 5.61022 10.8988 5.49658C11.1332 5.26219 11.1296 4.91061 10.8597 4.64071L7.04204 0.823044C6.77569 0.556695 6.42056 0.549592 6.18617 0.783979C6.07253 0.897622 5.9873 1.07519 5.96244 1.29892C5.90562 1.71798 5.9944 2.4673 6.22524 3.29476L4.45668 4.83603C3.08232 4.20035 1.6902 4.37791 0.923118 5.145Z"
          fill="white"
          fill-opacity="0.23"
        />
        <path
          d="M0.923118 5.145C0.599948 5.46817 0.607051 5.90143 0.944426 6.2388L2.84083 8.13521L1.15751 9.81853C0.663872 10.3122 0.411729 11.0757 0.511166 11.1751C0.607052 11.271 1.37058 11.0189 1.86422 10.5252L3.54754 8.84192L5.4475 10.7419C5.78487 11.0792 6.21458 11.0828 6.53775 10.7596C7.30484 9.99255 7.4824 8.60043 6.84672 7.22607L8.38799 5.45751C9.21544 5.68835 9.96477 5.77713 10.3838 5.72031C10.6076 5.69545 10.7851 5.61022 10.8988 5.49658C11.1332 5.26219 11.1296 4.91061 10.8597 4.64071L7.04204 0.823044C6.77569 0.556695 6.42056 0.549592 6.18617 0.783979C6.07253 0.897622 5.9873 1.07519 5.96244 1.29892C5.90562 1.71798 5.9944 2.4673 6.22524 3.29476L4.45668 4.83603C3.08232 4.20035 1.6902 4.37791 0.923118 5.145Z"
          fill="#545454"
        />
      </svg>
    ),
    message: "Hey Ephraim !",
  },
  {
    image: avatar1,
    // status: true,
    date: "12:53",
    name: "Eva",
    message: "How are you ?",
    pin: <Notification nbr={8} />,
  },
  {
    image: avatar3,
    // status: true,
    date: "11:53",
    name: "Thomas",
    message: (
      <>
        <svg
          width="13"
          height="14"
          viewBox="0 0 13 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.68754 11.5C4.06826 11.5 4.40547 11.305 4.62302 10.9378L8.89796 3.70954C9.01761 3.50302 9.14815 3.23913 9.14815 2.96377C9.14815 2.41304 8.69128 2 8.1474 2C7.81019 2 7.49474 2.19505 7.28806 2.57367L3.64403 8.94142L1.79482 6.45169C1.58814 6.15338 1.30532 5.99275 0.968115 5.99275C0.435108 5.99275 0 6.44022 0 7.01389C0 7.27778 0.0870216 7.53019 0.271943 7.77114L2.70855 10.9493C2.98049 11.3279 3.29594 11.5 3.68754 11.5Z"
            fill="#5AC8F5"
          />
          <path
            d="M8.39014 10.9674C8.16851 11.3152 7.82499 11.5 7.43713 11.5C7.0382 11.5 6.71684 11.337 6.4398 10.9783L5.77783 10.1753L6.83258 8.37464L7.39281 9.07609L11.1051 3.04348C11.3157 2.68478 11.637 2.5 11.9806 2.5C12.5346 2.5 13.0001 2.8913 13.0001 3.41304C13.0001 3.67391 12.8671 3.92391 12.7452 4.11957L8.39014 10.9674Z"
            fill="#5AC8F5"
          />
        </svg>
        <span>See you late !</span>
      </>
    ),
  },
  {
    image: avatar4,
    status: true,
    date: "10:43",
    name: "Henry",
    message: "Call you doctor",
    pin: <Notification nbr={1} />,
  },
  {
    image: avatar5,
    status: true,
    date: "01:03",
    name: "Junior",
    message: "We are going on live soon",
    pin: <Notification nbr={1} />,
  },
  {
    image: avatar6,
    // status: true,
    date: "Yesterday",
    name: "Mom",
    message: (
      <>
        <svg
          width="13"
          height="14"
          viewBox="0 0 13 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.68754 11.5C4.06826 11.5 4.40547 11.305 4.62302 10.9378L8.89796 3.70954C9.01761 3.50302 9.14815 3.23913 9.14815 2.96377C9.14815 2.41304 8.69128 2 8.1474 2C7.81019 2 7.49474 2.19505 7.28806 2.57367L3.64403 8.94142L1.79482 6.45169C1.58814 6.15338 1.30532 5.99275 0.968115 5.99275C0.435108 5.99275 0 6.44022 0 7.01389C0 7.27778 0.0870216 7.53019 0.271943 7.77114L2.70855 10.9493C2.98049 11.3279 3.29594 11.5 3.68754 11.5Z"
            fill="#5AC8F5"
          />
          <path
            d="M8.39014 10.9674C8.16851 11.3152 7.82499 11.5 7.43713 11.5C7.0382 11.5 6.71684 11.337 6.4398 10.9783L5.77783 10.1753L6.83258 8.37464L7.39281 9.07609L11.1051 3.04348C11.3157 2.68478 11.637 2.5 11.9806 2.5C12.5346 2.5 13.0001 2.8913 13.0001 3.41304C13.0001 3.67391 12.8671 3.92391 12.7452 4.11957L8.39014 10.9674Z"
            fill="#5AC8F5"
          />
        </svg>
        <span>See you late !</span>
      </>
    ),
  },
  {
    image: avatar7,
    status: true,
    date: "Yesterday",
    name: "AI assistant",
    message: (
      <>
        <svg
          width="13"
          height="14"
          viewBox="0 0 13 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.68754 11.5C4.06826 11.5 4.40547 11.305 4.62302 10.9378L8.89796 3.70954C9.01761 3.50302 9.14815 3.23913 9.14815 2.96377C9.14815 2.41304 8.69128 2 8.1474 2C7.81019 2 7.49474 2.19505 7.28806 2.57367L3.64403 8.94142L1.79482 6.45169C1.58814 6.15338 1.30532 5.99275 0.968115 5.99275C0.435108 5.99275 0 6.44022 0 7.01389C0 7.27778 0.0870216 7.53019 0.271943 7.77114L2.70855 10.9493C2.98049 11.3279 3.29594 11.5 3.68754 11.5Z"
            fill="#5AC8F5"
          />
          <path
            d="M8.39014 10.9674C8.16851 11.3152 7.82499 11.5 7.43713 11.5C7.0382 11.5 6.71684 11.337 6.4398 10.9783L5.77783 10.1753L6.83258 8.37464L7.39281 9.07609L11.1051 3.04348C11.3157 2.68478 11.637 2.5 11.9806 2.5C12.5346 2.5 13.0001 2.8913 13.0001 3.41304C13.0001 3.67391 12.8671 3.92391 12.7452 4.11957L8.39014 10.9674Z"
            fill="#5AC8F5"
          />
        </svg>
        <span>Thank you AI</span>
      </>
    ),
  },
  {
    image: avatar8,
    // status: true,
    date: "Yesterday",
    name: "Daniella",
    message: (
      <>
        <svg
          width="13"
          height="14"
          viewBox="0 0 13 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.68754 11.5C4.06826 11.5 4.40547 11.305 4.62302 10.9378L8.89796 3.70954C9.01761 3.50302 9.14815 3.23913 9.14815 2.96377C9.14815 2.41304 8.69128 2 8.1474 2C7.81019 2 7.49474 2.19505 7.28806 2.57367L3.64403 8.94142L1.79482 6.45169C1.58814 6.15338 1.30532 5.99275 0.968115 5.99275C0.435108 5.99275 0 6.44022 0 7.01389C0 7.27778 0.0870216 7.53019 0.271943 7.77114L2.70855 10.9493C2.98049 11.3279 3.29594 11.5 3.68754 11.5Z"
            fill="#5AC8F5"
          />
          <path
            d="M8.39014 10.9674C8.16851 11.3152 7.82499 11.5 7.43713 11.5C7.0382 11.5 6.71684 11.337 6.4398 10.9783L5.77783 10.1753L6.83258 8.37464L7.39281 9.07609L11.1051 3.04348C11.3157 2.68478 11.637 2.5 11.9806 2.5C12.5346 2.5 13.0001 2.8913 13.0001 3.41304C13.0001 3.67391 12.8671 3.92391 12.7452 4.11957L8.39014 10.9674Z"
            fill="#5AC8F5"
          />
        </svg>
        <span>See you late !</span>
      </>
    ),
  },
];

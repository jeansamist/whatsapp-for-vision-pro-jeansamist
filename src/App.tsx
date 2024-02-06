import { Avatar } from "./assets/components/avatar";
import { MsgReceve, MsgSend, Vocal } from "./assets/components/chat";
import { Sidebar } from "./assets/components/sidebar";
import { CHATS } from "./assets/helpers/chats";
import wa from "./assets/images/wa.png";

function App() {
  return (
    <main className="flex items-center justify-center w-full min-h-screen">
      <div className="window w-[1100px] bg-app-window rounded-[46px] backdrop-blur-xl relative flex -translate-y-4">
        <div className="bg-app-window glass  rounded-full p-3 space-y-3 absolute top-1/2 -left-6 -translate-x-full -translate-y-1/2 z-40 backdrop-blur-2xl">
          <div className="rounded-full min-w-11 h-11 flex items-center justify-center cursor-pointer transition-colors bg-app-window hover:bg-app-window">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.52637 23.5156C9.89551 23.5156 10.168 23.3398 10.6074 22.9443L13.8506 20.0176L19.5986 20.0264C22.2441 20.0264 23.7295 18.4971 23.7295 15.8867V9.05762C23.7295 6.44727 22.2441 4.91797 19.5986 4.91797H8.39258C5.75586 4.91797 4.26172 6.44727 4.26172 9.05762V15.8867C4.26172 18.5059 5.7998 20.0176 8.33105 20.0176H8.68262V22.5664C8.68262 23.1465 8.99023 23.5156 9.52637 23.5156ZM9.35059 10.0771C9.04297 10.0771 8.78809 9.82227 8.78809 9.49707C8.78809 9.18945 9.04297 8.93457 9.35059 8.93457H18.5527C18.8691 8.93457 19.124 9.18945 19.124 9.49707C19.124 9.82227 18.8691 10.0771 18.5527 10.0771H9.35059ZM9.35059 12.9863C9.04297 12.9863 8.78809 12.7227 8.78809 12.3975C8.78809 12.0986 9.04297 11.835 9.35059 11.835H18.5527C18.8691 11.835 19.124 12.0898 19.124 12.3975C19.124 12.7227 18.8691 12.9863 18.5527 12.9863H9.35059ZM9.35059 15.8867C9.04297 15.8867 8.78809 15.623 8.78809 15.3154C8.78809 14.9902 9.04297 14.7354 9.35059 14.7354H15.3535C15.6699 14.7354 15.9248 14.9902 15.9248 15.3154C15.9248 15.623 15.6699 15.8867 15.3535 15.8867H9.35059Z"
                fill="#fff"
              />
              <path
                d="M23.275 8.2251C25.208 8.2251 26.775 6.65809 26.775 4.7251C26.775 2.7921 25.208 1.2251 23.275 1.2251C21.342 1.2251 19.775 2.7921 19.775 4.7251C19.775 6.65809 21.342 8.2251 23.275 8.2251Z"
                fill="#25D366"
              />
            </svg>
          </div>
          <div className="rounded-full min-w-11 h-11 flex items-center justify-center cursor-pointer transition-colors hover:bg-app-window text-app-text-secondary">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              className="fill-app-text-secondary"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 13.4896C15.7591 13.4896 17.1838 12.0175 17.1838 10.2068C17.1838 8.42371 15.7664 7 14 7C12.2555 7 10.8162 8.44444 10.8162 10.2206C10.8235 12.0245 12.2409 13.4896 14 13.4896ZM5.56802 13.6486C7.10177 13.6486 8.33749 12.3562 8.33749 10.7597C8.33749 9.20468 7.10177 7.94684 5.56802 7.94684C4.04881 7.94684 2.79128 9.22541 2.79855 10.7666C2.79855 12.3631 4.04154 13.6486 5.56802 13.6486ZM22.432 13.6486C23.9512 13.6486 25.1942 12.3631 25.2015 10.7666C25.2087 9.22541 23.9512 7.94684 22.432 7.94684C20.8982 7.94684 19.6552 9.20468 19.6552 10.7597C19.6552 12.3562 20.8982 13.6486 22.432 13.6486ZM14 12.2802C12.9969 12.2802 12.1464 11.3817 12.1464 10.2137C12.1464 9.08719 12.9896 8.20946 14 8.20946C15.0177 8.20946 15.8536 9.07337 15.8536 10.2068C15.8536 11.3679 15.0104 12.2802 14 12.2802ZM5.56802 12.453C4.74663 12.453 4.04881 11.7065 4.04881 10.7666C4.04881 9.86816 4.73936 9.13557 5.56802 9.13557C6.41122 9.13557 7.0945 9.85433 7.0945 10.7597C7.0945 11.7065 6.39668 12.453 5.56802 12.453ZM22.432 12.453C21.5961 12.453 20.9055 11.7065 20.9055 10.7597C20.9055 9.85433 21.5888 9.13557 22.432 9.13557C23.2534 9.13557 23.9512 9.86816 23.9512 10.7666C23.9512 11.7065 23.2534 12.453 22.432 12.453ZM1.57009 20H7.21807C6.81828 19.7788 6.54933 19.2743 6.60021 18.8182H1.50467C1.36656 18.8182 1.30841 18.756 1.30841 18.6385C1.30841 17.0558 3.25649 15.5492 5.56075 15.5492C6.37487 15.5492 7.18899 15.7427 7.81412 16.0744C8.06127 15.7358 8.36656 15.4455 8.76636 15.1967C7.8432 14.6576 6.6947 14.3674 5.56075 14.3674C2.48598 14.3674 0 16.4545 0 18.7491C0 19.5784 0.523364 20 1.57009 20ZM26.4299 20C27.4766 20 28 19.5784 28 18.7491C28 16.4545 25.5068 14.3674 22.432 14.3674C21.3053 14.3674 20.1495 14.6576 19.2336 15.1967C19.6334 15.4455 19.9387 15.7358 20.1786 16.0744C20.8037 15.7427 21.6251 15.5492 22.432 15.5492C24.7362 15.5492 26.6916 17.0558 26.6916 18.6385C26.6916 18.756 26.6334 18.8182 26.4953 18.8182H21.3925C21.4434 19.2743 21.1817 19.7788 20.7819 20H26.4299ZM9.47144 20H18.5286C19.7861 20 20.3894 19.6199 20.3894 18.8044C20.3894 16.9038 17.8962 14.3743 14 14.3743C10.1038 14.3743 7.60332 16.9038 7.60332 18.8044C7.60332 19.6199 8.21391 20 9.47144 20ZM9.23884 18.7905C9.07165 18.7905 9.00623 18.7352 9.00623 18.6108C9.00623 17.5534 10.8017 15.5837 14 15.5837C17.1983 15.5837 18.9938 17.5534 18.9938 18.6108C18.9938 18.7352 18.9284 18.7905 18.7539 18.7905H9.23884Z"
                fill-opacity="0.23"
              />
              <path d="M14 13.4896C15.7591 13.4896 17.1838 12.0175 17.1838 10.2068C17.1838 8.42371 15.7664 7 14 7C12.2555 7 10.8162 8.44444 10.8162 10.2206C10.8235 12.0245 12.2409 13.4896 14 13.4896ZM5.56802 13.6486C7.10177 13.6486 8.33749 12.3562 8.33749 10.7597C8.33749 9.20468 7.10177 7.94684 5.56802 7.94684C4.04881 7.94684 2.79128 9.22541 2.79855 10.7666C2.79855 12.3631 4.04154 13.6486 5.56802 13.6486ZM22.432 13.6486C23.9512 13.6486 25.1942 12.3631 25.2015 10.7666C25.2087 9.22541 23.9512 7.94684 22.432 7.94684C20.8982 7.94684 19.6552 9.20468 19.6552 10.7597C19.6552 12.3562 20.8982 13.6486 22.432 13.6486ZM14 12.2802C12.9969 12.2802 12.1464 11.3817 12.1464 10.2137C12.1464 9.08719 12.9896 8.20946 14 8.20946C15.0177 8.20946 15.8536 9.07337 15.8536 10.2068C15.8536 11.3679 15.0104 12.2802 14 12.2802ZM5.56802 12.453C4.74663 12.453 4.04881 11.7065 4.04881 10.7666C4.04881 9.86816 4.73936 9.13557 5.56802 9.13557C6.41122 9.13557 7.0945 9.85433 7.0945 10.7597C7.0945 11.7065 6.39668 12.453 5.56802 12.453ZM22.432 12.453C21.5961 12.453 20.9055 11.7065 20.9055 10.7597C20.9055 9.85433 21.5888 9.13557 22.432 9.13557C23.2534 9.13557 23.9512 9.86816 23.9512 10.7666C23.9512 11.7065 23.2534 12.453 22.432 12.453ZM1.57009 20H7.21807C6.81828 19.7788 6.54933 19.2743 6.60021 18.8182H1.50467C1.36656 18.8182 1.30841 18.756 1.30841 18.6385C1.30841 17.0558 3.25649 15.5492 5.56075 15.5492C6.37487 15.5492 7.18899 15.7427 7.81412 16.0744C8.06127 15.7358 8.36656 15.4455 8.76636 15.1967C7.8432 14.6576 6.6947 14.3674 5.56075 14.3674C2.48598 14.3674 0 16.4545 0 18.7491C0 19.5784 0.523364 20 1.57009 20ZM26.4299 20C27.4766 20 28 19.5784 28 18.7491C28 16.4545 25.5068 14.3674 22.432 14.3674C21.3053 14.3674 20.1495 14.6576 19.2336 15.1967C19.6334 15.4455 19.9387 15.7358 20.1786 16.0744C20.8037 15.7427 21.6251 15.5492 22.432 15.5492C24.7362 15.5492 26.6916 17.0558 26.6916 18.6385C26.6916 18.756 26.6334 18.8182 26.4953 18.8182H21.3925C21.4434 19.2743 21.1817 19.7788 20.7819 20H26.4299ZM9.47144 20H18.5286C19.7861 20 20.3894 19.6199 20.3894 18.8044C20.3894 16.9038 17.8962 14.3743 14 14.3743C10.1038 14.3743 7.60332 16.9038 7.60332 18.8044C7.60332 19.6199 8.21391 20 9.47144 20ZM9.23884 18.7905C9.07165 18.7905 9.00623 18.7352 9.00623 18.6108C9.00623 17.5534 10.8017 15.5837 14 15.5837C17.1983 15.5837 18.9938 17.5534 18.9938 18.6108C18.9938 18.7352 18.9284 18.7905 18.7539 18.7905H9.23884Z" />
            </svg>
          </div>
          <div className="rounded-full min-w-11 h-11 flex items-center justify-center cursor-pointer transition-colors hover:bg-app-window text-app-text-secondary">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.33623 9.73131C3.7792 9.40748 3.59015 8.69338 3.91398 8.13633C5.05926 6.16631 6.75639 4.57482 8.79585 3.55832C10.8353 2.54183 13.1279 2.14485 15.3903 2.41639C16.0301 2.49317 16.4865 3.07402 16.4097 3.71376C16.3328 4.3535 15.752 4.80988 15.1122 4.7331C13.3023 4.51586 11.4683 4.83345 9.83671 5.64664C8.20513 6.45985 6.84743 7.73304 5.93121 9.30906C5.60736 9.86609 4.89328 10.0551 4.33623 9.73131Z"
                fill="white"
                fill-opacity="0.23"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.33623 9.73131C3.7792 9.40748 3.59015 8.69338 3.91398 8.13633C5.05926 6.16631 6.75639 4.57482 8.79585 3.55832C10.8353 2.54183 13.1279 2.14485 15.3903 2.41639C16.0301 2.49317 16.4865 3.07402 16.4097 3.71376C16.3328 4.3535 15.752 4.80988 15.1122 4.7331C13.3023 4.51586 11.4683 4.83345 9.83671 5.64664C8.20513 6.45985 6.84743 7.73304 5.93121 9.30906C5.60736 9.86609 4.89328 10.0551 4.33623 9.73131Z"
                className="fill-app-text-secondary"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24.3331 11.8007C24.9743 11.737 25.5457 12.2051 25.6094 12.8463C25.8347 15.1138 25.3912 17.3978 24.3332 19.416C23.2754 21.4344 21.6495 23.0987 19.6566 24.2036C19.0931 24.516 18.383 24.3124 18.0706 23.7489C17.7582 23.1853 17.9617 22.4753 18.5253 22.1628C20.1197 21.279 21.4203 19.9474 22.2666 18.3329C23.1129 16.7182 23.4678 14.8911 23.2875 13.0771C23.2238 12.4359 23.6919 11.8644 24.3331 11.8007Z"
                fill="white"
                fill-opacity="0.23"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24.3331 11.8007C24.9743 11.737 25.5457 12.2051 25.6094 12.8463C25.8347 15.1138 25.3912 17.3978 24.3332 19.416C23.2754 21.4344 21.6495 23.0987 19.6566 24.2036C19.0931 24.516 18.383 24.3124 18.0706 23.7489C17.7582 23.1853 17.9617 22.4753 18.5253 22.1628C20.1197 21.279 21.4203 19.9474 22.2666 18.3329C23.1129 16.7182 23.4678 14.8911 23.2875 13.0771C23.2238 12.4359 23.6919 11.8644 24.3331 11.8007Z"
                className="fill-app-text-secondary"
              />
              <path
                d="M7.40038 20.5997C9.21644 22.4158 11.5947 23.327 13.975 23.3334C14.575 23.3349 15.1263 23.7191 15.259 24.3043C15.4123 24.9811 14.9505 25.6488 14.2567 25.6639C11.186 25.7311 8.0938 24.5929 5.75046 22.2497C3.38484 19.884 2.24749 16.7553 2.33842 13.6558C2.35877 12.9622 3.02992 12.5053 3.70551 12.6638C4.28966 12.8009 4.66969 13.355 4.66681 13.955C4.65528 16.3586 5.56647 18.7658 7.40038 20.5997Z"
                fill="white"
                fill-opacity="0.23"
              />
              <path
                d="M7.40038 20.5997C9.21644 22.4158 11.5947 23.327 13.975 23.3334C14.575 23.3349 15.1263 23.7191 15.259 24.3043C15.4123 24.9811 14.9505 25.6488 14.2567 25.6639C11.186 25.7311 8.0938 24.5929 5.75046 22.2497C3.38484 19.884 2.24749 16.7553 2.33842 13.6558C2.35877 12.9622 3.02992 12.5053 3.70551 12.6638C4.28966 12.8009 4.66969 13.355 4.66681 13.955C4.65528 16.3586 5.56647 18.7658 7.40038 20.5997Z"
                className="fill-app-text-secondary"
              />
              <path
                d="M23.275 8.2251C25.208 8.2251 26.775 6.65809 26.775 4.7251C26.775 2.7921 25.208 1.2251 23.275 1.2251C21.342 1.2251 19.775 2.7921 19.775 4.7251C19.775 6.65809 21.342 8.2251 23.275 8.2251Z"
                fill="#25D366"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14 18.6667C16.5773 18.6667 18.6667 16.5773 18.6667 14C18.6667 11.4227 16.5773 9.33333 14 9.33333C11.4227 9.33333 9.33333 11.4227 9.33333 14C9.33333 16.5773 11.4227 18.6667 14 18.6667ZM14 21C17.866 21 21 17.866 21 14C21 10.134 17.866 7 14 7C10.134 7 7 10.134 7 14C7 17.866 10.134 21 14 21Z"
                fill="white"
                fill-opacity="0.23"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14 18.6667C16.5773 18.6667 18.6667 16.5773 18.6667 14C18.6667 11.4227 16.5773 9.33333 14 9.33333C11.4227 9.33333 9.33333 11.4227 9.33333 14C9.33333 16.5773 11.4227 18.6667 14 18.6667ZM14 21C17.866 21 21 17.866 21 14C21 10.134 17.866 7 14 7C10.134 7 7 10.134 7 14C7 17.866 10.134 21 14 21Z"
                className="fill-app-text-secondary"
              />
            </svg>
          </div>
          <div className="rounded-full min-w-11 h-11 flex items-center justify-center cursor-pointer transition-colors hover:bg-app-window text-app-text-secondary">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.2559 17.6885C12.8486 20.29 16.0039 22.2939 18.5791 22.2939C19.7305 22.2939 20.7412 21.8896 21.5498 20.9932C22.0244 20.4658 22.3145 19.8594 22.3145 19.2529C22.3145 18.7871 22.1299 18.3301 21.6816 18.0137L18.9834 16.0977C18.5527 15.7988 18.2012 15.6582 17.8848 15.6582C17.4717 15.6582 17.1025 15.8867 16.6982 16.291L16.0654 16.9238C15.96 17.0205 15.8369 17.0645 15.7227 17.0645C15.582 17.0645 15.4502 17.0117 15.3623 16.959C14.8086 16.6602 13.8594 15.8516 12.9805 14.9727C12.1016 14.0938 11.2842 13.1533 10.9941 12.5908C10.9414 12.4941 10.8975 12.3711 10.8975 12.2305C10.8975 12.125 10.9326 12.002 11.0293 11.8965L11.6621 11.2549C12.0576 10.8418 12.2949 10.4814 12.2949 10.0684C12.2949 9.74316 12.1543 9.3916 11.8555 8.96973L9.94824 6.29785C9.62305 5.84082 9.16602 5.64746 8.66504 5.64746C8.06738 5.64746 7.46973 5.91113 6.95117 6.41211C6.07227 7.23828 5.68555 8.2666 5.68555 9.40039C5.68555 11.9756 7.66309 15.0957 10.2559 17.6885Z"
                fill="white"
                fill-opacity="0.23"
              />
              <path
                d="M10.2559 17.6885C12.8486 20.29 16.0039 22.2939 18.5791 22.2939C19.7305 22.2939 20.7412 21.8896 21.5498 20.9932C22.0244 20.4658 22.3145 19.8594 22.3145 19.2529C22.3145 18.7871 22.1299 18.3301 21.6816 18.0137L18.9834 16.0977C18.5527 15.7988 18.2012 15.6582 17.8848 15.6582C17.4717 15.6582 17.1025 15.8867 16.6982 16.291L16.0654 16.9238C15.96 17.0205 15.8369 17.0645 15.7227 17.0645C15.582 17.0645 15.4502 17.0117 15.3623 16.959C14.8086 16.6602 13.8594 15.8516 12.9805 14.9727C12.1016 14.0938 11.2842 13.1533 10.9941 12.5908C10.9414 12.4941 10.8975 12.3711 10.8975 12.2305C10.8975 12.125 10.9326 12.002 11.0293 11.8965L11.6621 11.2549C12.0576 10.8418 12.2949 10.4814 12.2949 10.0684C12.2949 9.74316 12.1543 9.3916 11.8555 8.96973L9.94824 6.29785C9.62305 5.84082 9.16602 5.64746 8.66504 5.64746C8.06738 5.64746 7.46973 5.91113 6.95117 6.41211C6.07227 7.23828 5.68555 8.2666 5.68555 9.40039C5.68555 11.9756 7.66309 15.0957 10.2559 17.6885Z"
                className="fill-app-text-secondary"
              />
            </svg>
          </div>
        </div>
        <div className="bg-app-window glass  rounded-full p-3 flex gap-3 absolute -bottom-6 left-1/2 translate-y-full -translate-x-1/2 z-40 backdrop-blur-2xl w-2/5 justify-between">
          <div className="flex gap-3 items-center">
            <Avatar image={CHATS[2].image} />
            <div className="flex flex-col h-[43px] justify-between">
              <h3 className=" font-medium">{CHATS[2].name}</h3>
              <span className="text-xs text-app-text-secondary flex items-center gap-1">
                Video call
              </span>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="rounded-full w-11 h-11 flex items-center justify-center cursor-pointer bg-[#FF453A]">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.8975 22.7949C20.1699 23.0674 20.6182 23.0674 20.8906 22.7949C21.1543 22.5225 21.1631 22.083 20.8906 21.8018L3.62012 4.54883C3.35645 4.27637 2.89941 4.27637 2.62695 4.54883C2.36328 4.82129 2.36328 5.27832 2.62695 5.54199L19.8975 22.7949ZM16.0127 6.40332H7.03027L18.8516 18.2246C18.9043 17.9697 18.9307 17.6357 18.9307 17.3281V9.33008C18.9307 7.4668 17.9111 6.40332 16.0127 6.40332ZM20.2227 16.4756L23.2197 19.0596C23.5889 19.376 23.9668 19.5781 24.3447 19.5781C25.0566 19.5781 25.54 19.0684 25.54 18.2949V9.04004C25.54 8.2666 25.0566 7.75684 24.3447 7.75684C23.9668 7.75684 23.5889 7.95898 23.2197 8.27539L20.2227 10.8594V16.4756ZM6.69629 20.8877H16.4258L3.86621 8.32812C3.76953 8.57422 3.7168 8.96973 3.7168 9.35645V18.0049C3.7168 19.8594 4.79785 20.8877 6.69629 20.8877Z"
                  fill="#FEFEFE"
                />
              </svg>
            </div>
            <div className="rounded-full w-11 h-11 flex items-center justify-center cursor-pointer bg-app-primary">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.69629 20.8877H15.9424C17.8408 20.8877 18.9307 19.8242 18.9307 17.9609V9.33008C18.9307 7.4668 17.9111 6.40332 16.0127 6.40332H6.69629C4.86816 6.40332 3.70801 7.4668 3.70801 9.33008V18.0225C3.70801 19.877 4.80664 20.8877 6.69629 20.8877ZM20.2227 16.4756L23.2285 19.0596C23.5889 19.376 23.9756 19.5781 24.3447 19.5781C25.0566 19.5781 25.54 19.0684 25.54 18.2949V9.04004C25.54 8.2666 25.0566 7.75684 24.3447 7.75684C23.9668 7.75684 23.5889 7.95898 23.2285 8.27539L20.2227 10.8594V16.4756Z"
                  fill="#FEFEFE"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-app-window glass rounded-full p-6 py-4 flex gap-3 absolute -top-6 left-1/2 -translate-y-full -translate-x-1/2 z-40 backdrop-blur-2xl items-center">
          <img src={wa} alt="whatsapp icon" />
          <div className="text-app-text-secondary">
            Coded and designed by{" "}
            <a
              href="https://jeansamist.vercel.app/"
              className="text-app-text font-bold"
            >
              @jeansamist
            </a>
          </div>
        </div>
        <Sidebar />
        <div className="chats w-[70%] h-full flex flex-col">
          <header className="px-6 py-5 border-b border-app-hovered-2 flex justify-between">
            <div className="flex gap-3 items-center">
              <Avatar status image={CHATS[0].image} />
              <div className="flex flex-col h-[50px] justify-between">
                <h3 className="text-3xl font-bold">{CHATS[0].name}</h3>
                <span className="text-xs text-app-text-secondary flex items-center gap-1">
                  Online
                </span>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <div className="rounded-full w-11 h-11 flex items-center justify-center cursor-pointer transition-colors hover:bg-app-hovered-2">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  className="fill-app-text-secondary"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.2559 17.6885C12.8486 20.29 16.0039 22.2939 18.5791 22.2939C19.7305 22.2939 20.7412 21.8896 21.5498 20.9932C22.0244 20.4658 22.3145 19.8594 22.3145 19.2529C22.3145 18.7871 22.1299 18.3301 21.6816 18.0137L18.9834 16.0977C18.5527 15.7988 18.2012 15.6582 17.8848 15.6582C17.4717 15.6582 17.1025 15.8867 16.6982 16.291L16.0654 16.9238C15.96 17.0205 15.8369 17.0645 15.7227 17.0645C15.582 17.0645 15.4502 17.0117 15.3623 16.959C14.8086 16.6602 13.8594 15.8516 12.9805 14.9727C12.1016 14.0938 11.2842 13.1533 10.9941 12.5908C10.9414 12.4941 10.8975 12.3711 10.8975 12.2305C10.8975 12.125 10.9326 12.002 11.0293 11.8965L11.6621 11.2549C12.0576 10.8418 12.2949 10.4814 12.2949 10.0684C12.2949 9.74316 12.1543 9.3916 11.8555 8.96973L9.94824 6.29785C9.62305 5.84082 9.16602 5.64746 8.66504 5.64746C8.06738 5.64746 7.46973 5.91113 6.95117 6.41211C6.07227 7.23828 5.68555 8.2666 5.68555 9.40039C5.68555 11.9756 7.66309 15.0957 10.2559 17.6885Z"
                    fill-opacity="0.23"
                  />
                  <path d="M10.2559 17.6885C12.8486 20.29 16.0039 22.2939 18.5791 22.2939C19.7305 22.2939 20.7412 21.8896 21.5498 20.9932C22.0244 20.4658 22.3145 19.8594 22.3145 19.2529C22.3145 18.7871 22.1299 18.3301 21.6816 18.0137L18.9834 16.0977C18.5527 15.7988 18.2012 15.6582 17.8848 15.6582C17.4717 15.6582 17.1025 15.8867 16.6982 16.291L16.0654 16.9238C15.96 17.0205 15.8369 17.0645 15.7227 17.0645C15.582 17.0645 15.4502 17.0117 15.3623 16.959C14.8086 16.6602 13.8594 15.8516 12.9805 14.9727C12.1016 14.0938 11.2842 13.1533 10.9941 12.5908C10.9414 12.4941 10.8975 12.3711 10.8975 12.2305C10.8975 12.125 10.9326 12.002 11.0293 11.8965L11.6621 11.2549C12.0576 10.8418 12.2949 10.4814 12.2949 10.0684C12.2949 9.74316 12.1543 9.3916 11.8555 8.96973L9.94824 6.29785C9.62305 5.84082 9.16602 5.64746 8.66504 5.64746C8.06738 5.64746 7.46973 5.91113 6.95117 6.41211C6.07227 7.23828 5.68555 8.2666 5.68555 9.40039C5.68555 11.9756 7.66309 15.0957 10.2559 17.6885Z" />
                </svg>
              </div>
              <div className="rounded-full w-11 h-11 flex items-center justify-center cursor-pointer bg-app-hovered transition-colors hover:bg-app-hovered-2">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.69629 20.8877H15.9424C17.8408 20.8877 18.9307 19.8242 18.9307 17.9609V9.33008C18.9307 7.4668 17.9111 6.40332 16.0127 6.40332H6.69629C4.86816 6.40332 3.70801 7.4668 3.70801 9.33008V18.0225C3.70801 19.877 4.80664 20.8877 6.69629 20.8877ZM20.2227 16.4756L23.2285 19.0596C23.5889 19.376 23.9756 19.5781 24.3447 19.5781C25.0566 19.5781 25.54 19.0684 25.54 18.2949V9.04004C25.54 8.2666 25.0566 7.75684 24.3447 7.75684C23.9668 7.75684 23.5889 7.95898 23.2285 8.27539L20.2227 10.8594V16.4756Z"
                    fill="#FEFEFE"
                  />
                </svg>
              </div>
            </div>
          </header>
          <div className="h-full overflow-y-auto overflow-x-hiddenp px-6 py-3">
            <div className=" flex flex-col justify-end space-y-6 min-h-full">
              <MsgSend
                time={"11:52"}
                content={<Vocal image={CHATS[0].image} />}
              />
              <MsgReceve
                time={"11:52"}
                content={<Vocal image={CHATS[0].image} />}
              />
              <MsgSend time={"11:52"} content={"Hello !"} />
              <MsgReceve time={"11:52"} content={"Hello !"} />
            </div>
          </div>
          <div className="px-6 pt-3 pb-6 ">
            <div className="bg-app-window rounded-full glass p-3 flex gap-3">
              <div className="flex gap-3 items-center">
                <div className="rounded-full w-11 h-11 flex items-center justify-center cursor-pointer bg-white/20 transition-colors hover:bg-app-hovered-2">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1506_3366)">
                      <path
                        d="M14 22.7334C18.9658 22.7334 23.0791 18.6289 23.0791 13.6543C23.0791 8.68848 18.9658 4.5752 13.9912 4.5752C9.02539 4.5752 4.9209 8.68848 4.9209 13.6543C4.9209 18.6289 9.03418 22.7334 14 22.7334ZM14 20.9492C9.95703 20.9492 6.71387 17.6973 6.71387 13.6543C6.71387 9.61133 9.94824 6.36816 13.9912 6.36816C18.0342 6.36816 21.2861 9.61133 21.2949 13.6543C21.2949 17.6973 18.043 20.9492 14 20.9492ZM11.3984 12.8633C11.9521 12.8633 12.4443 12.3623 12.4443 11.668C12.4443 10.9736 11.9609 10.4727 11.3984 10.4727C10.8535 10.4727 10.3789 10.9736 10.3789 11.668C10.3789 12.3623 10.8535 12.8633 11.3984 12.8633ZM16.584 12.8633C17.1377 12.8633 17.6299 12.3623 17.6299 11.668C17.6299 10.9736 17.1377 10.4727 16.584 10.4727C16.0303 10.4727 15.5645 10.9736 15.5645 11.668C15.5645 12.3623 16.0391 12.8633 16.584 12.8633ZM13.9912 17.9785C15.8369 17.9785 17.0762 16.7568 17.0762 16.168C17.0762 15.957 16.8652 15.8604 16.6631 15.9482C16.0215 16.2822 15.2744 16.6777 13.9912 16.6777C12.7168 16.6777 11.9609 16.2822 11.3193 15.9482C11.126 15.8516 10.915 15.957 10.915 16.168C10.915 16.7568 12.1543 17.9785 13.9912 17.9785Z"
                        fill="#FEFEFE"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1506_3366">
                        <rect width="28" height="28" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="rounded-full w-11 h-11 flex items-center justify-center cursor-pointer transition-colors hover:bg-app-hovered-2">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    className="fill-app-text-secondary"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.9063 14.1289L13.4111 20.6241C11.7676 22.2764 9.55274 22.1182 8.1377 20.6944C6.70508 19.2705 6.54688 17.0733 8.20801 15.4121L17.085 6.53519C18.0518 5.5684 19.4932 5.4014 20.4336 6.34183C21.374 7.29105 21.1982 8.72367 20.2314 9.68168L11.5215 18.4092C11.1348 18.8047 10.6777 18.6905 10.3965 18.4268C10.1416 18.1543 10.0361 17.6973 10.4229 17.3018L16.4961 11.2286C16.8037 10.9121 16.8213 10.4551 16.5225 10.1563C16.2236 9.87504 15.7666 9.88383 15.459 10.1914L9.35938 16.2911C8.41016 17.2403 8.44531 18.6905 9.28906 19.5342C10.2031 20.4483 11.583 20.4219 12.5322 19.4727L21.2861 10.71C22.9912 9.01371 22.9297 6.7725 21.4355 5.27836C19.9678 3.81937 17.6914 3.7139 15.9863 5.41898L7.05664 14.3575C4.83301 16.5899 4.98242 19.7891 7.0127 21.8194C9.03418 23.8321 12.2422 23.9903 14.4658 21.7666L21.0049 15.2364C21.3037 14.9375 21.3037 14.3926 20.9961 14.1114C20.7061 13.795 20.2139 13.8389 19.9063 14.1289Z"
                      fill="#FEFEFE"
                    />
                  </svg>
                </div>
              </div>
              <input
                type="text"
                placeholder="Type a message"
                className="msg-input bg-app-sidebar py-2 w-[calc(100%-144px-24px)] px-4 font-medium outline-none text-app-foreground h-11 rounded-xl placeholder:text-app-text-secondary placeholder:opacity-70"
              />
              <div className="rounded-full w-11 h-11 flex items-center justify-center cursor-pointer transition-colors bg-[var(--primary-opact-2)] hover:bg-app-primary glass-green">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 16.0889C15.9863 16.0889 17.375 14.6035 17.375 12.4766V7.00977C17.375 4.88281 15.9863 3.39746 14 3.39746C12.0225 3.39746 10.625 4.88281 10.625 7.00977V12.4766C10.625 14.6035 12.0225 16.0889 14 16.0889ZM14 14.4629C12.9717 14.4629 12.3213 13.6719 12.3213 12.5117V6.97461C12.3213 5.81445 12.9717 5.02344 14 5.02344C15.0283 5.02344 15.6787 5.81445 15.6787 6.97461V12.5117C15.6787 13.6719 15.0283 14.4629 14 14.4629ZM9.95703 22.7861H18.043C18.5088 22.7861 18.8955 22.4082 18.8955 21.9512C18.8955 21.4854 18.5088 21.1162 18.043 21.1162H14.8174V19.332C18.2891 18.998 20.7148 16.5107 20.7148 12.8721V11.1406C20.7148 10.6748 20.3457 10.3145 19.8799 10.3145C19.4141 10.3145 19.0273 10.6748 19.0273 11.1406V12.8105C19.0273 15.8076 16.9971 17.7764 14 17.7764C11.0029 17.7764 8.97266 15.8076 8.97266 12.8105V11.1406C8.97266 10.6748 8.59473 10.3145 8.12891 10.3145C7.66309 10.3145 7.28516 10.6748 7.28516 11.1406V12.8721C7.28516 16.5107 9.71094 18.998 13.1826 19.332V21.1162H9.95703C9.49121 21.1162 9.10449 21.4854 9.10449 21.9512C9.10449 22.4082 9.49121 22.7861 9.95703 22.7861Z"
                    fill="#FEFEFE"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;

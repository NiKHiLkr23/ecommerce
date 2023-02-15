import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/BasketSlice";
function Header() {
  const items = useSelector(selectItems);

  const router = useRouter();
  return (
    <header className="w-full sticky top-0 z-50">
      <div className="flex items-center p-2 bg-white md:p-5 md:bg-[#FFE475] mt-3 md:mt-0">
        <p
          onClick={() => router.push("/")}
          className="text-3xl font-bold font-sans"
        >
          E-Commerce
        </p>
        <div className="text-white flex grow justify-end items-center  ">
          <div
            onClick={() => router.push("/checkout")}
            className="relative flex items-center p-2 px-6 justify-center mr-3 rounded-full shadow-lg bg-white"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 17 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.40007 0.200028C0.958227 0.200028 0.599976 0.558279 0.599976 1.00012C0.599976 1.44196 0.958227 1.80007 1.40007 1.80007H2.83606L3.01043 2.72994L4.02573 9.91211C4.08145 10.3067 4.41923 10.6001 4.8178 10.6001H14.7716C15.1697 10.6001 15.5073 10.3073 15.5636 9.91317L16.5921 2.71317C16.6249 2.48362 16.5565 2.2511 16.4046 2.07594C16.2526 1.90062 16.032 1.80004 15.8002 1.80004H4.46398L4.28639 0.852625C4.21541 0.474283 3.88501 0.199997 3.50008 0.199997L1.40007 0.200028ZM5.51264 9.00014L4.72098 3.40026H14.8774L14.0775 9.00014H5.51264Z"
                fill="#100E3A"
              />
              <path
                d="M8.60012 13.0002C8.60012 13.8838 7.88372 14.6001 7.00007 14.6001C6.11642 14.6001 5.40002 13.8838 5.40002 13.0002C5.40002 12.1165 6.11642 11.4001 7.00007 11.4001C7.88372 11.4001 8.60012 12.1165 8.60012 13.0002Z"
                fill="#100E3A"
              />
              <path
                d="M14.2 13.0002C14.2 13.8838 13.4836 14.6001 12.5999 14.6001C11.7163 14.6001 11 13.8838 11 13.0002C11 12.1165 11.7163 11.4001 12.5999 11.4001C13.4836 11.4001 14.2 12.1165 14.2 13.0002Z"
                fill="#100E3A"
              />
            </svg>
            <p className="text-sm ml-2 text-black">{items.length}</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

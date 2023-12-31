import React, { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import Logo from "../assets/Fakestore.png";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { selectItems } from "../slices/basketSlice";
import { useSelector } from "react-redux";

interface Props {
  query?: string;
  setQuery: Dispatch<SetStateAction<string>>;
}

const Header = () => {
  const [query, setQuery] = useState<string>("");
  const [modalEnabled, setModalEnabled] = useState<boolean>(false);
  const { data: session } = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  const fireQuery = (e: any) => {
    e.preventDefault();
    if (query !== "") {
      router.push(`/search/${query}`);
    } else {
      return;
    }
  };

  const handleFilter = (e: any) => {
    e.preventDefault();
    console.log(e.target.value);
    router.push(`/search/filter/${e.target.value}`);
  };

  return (
    <header className="shadow-lg relative select-none">
      <div className="bg-gradient-to-tr from-[#ffc100] to-[#ffffe0] flex items-center p-1 flex-grow">
        {/* Logo Side */}
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0 mb-1 pr-3 text-black font-extrabold font-sans tracking-wide">
          <Image
            onClick={() => router.push("/")}
            src={Logo}
            width={80}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
            alt=""
          />
          FAKE STORE
        </div>

        {/* Search Bar */}
        <form
          onSubmit={(e) => fireQuery(e)}
          className="hidden sm:flex bg-[#fff2a0] hover:bg-[#d5a811] duration-500 items-center h-8 rounded-md flex-grow cursor-pointer"
        >
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            type="text"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">
            <SearchIcon className="h-12 p-4" />
          </button>
        </form>

        {/* Right Side */}
        <div className="text-black  flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div
            onClick={!session ? () => signIn() : () => signOut()}
            className="link"
          >
            <p className="hover: underline">
              {session ? `Hello, ${session.user?.name}` : ""}
            </p>
            <p className="font-extrabold md:text-sm">
              {session ? "Sign Out" : "Sign In"}
            </p>
          </div>
          <div onClick={() => router.push("/orders")} className="link">
            <p>Order</p>
            <p className="font-extrabold md:text-sm">History</p>
          </div>
          <div
            onClick={() => router.push("/checkout")}
            className="relative link flex items-center"
          >
            <span className="absolute top-0 left-8 h-4 w-4 rounded-full bg-red-500 text-center font-bold">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-10" />
          </div>
        </div>
      </div>
      {/* Bottom Nav */}
      <div className="flex items-center bg-[#ffc100] text-black  text-sm space-x-3 p-1">
        <p
          onClick={() => setModalEnabled(!modalEnabled)}
          className="link flex items-center"
        >
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <button
          onClick={(e) => handleFilter(e)}
          value="electronics"
          className="filter-tags hidden lg:inline-flex bg-[#ffffe0] "
        >
          Electronics
        </button>
        <button
          onClick={(e) => handleFilter(e)}
          value="men's clothing"
          className="filter-tags hidden lg:inline-flex bg-[#ffffe0] "
        >
          Men's Clothing
        </button>
        <button
          onClick={(e) => handleFilter(e)}
          value="women's clothing"
          className="filter-tags hidden lg:inline-flex bg-[#ffffe0] "
        >
          Women's Clothing
        </button>
        <button
          onClick={(e) => handleFilter(e)}
          value="jewelery"
          className="filter-tags hidden lg:inline-flex bg-[#ffffe0] "
        >
          Jewelry
        </button>
      </div>
      {/* SideBar Modal */}
      {modalEnabled && (
        <div className="absolute flex flex-col justify-start items-start top-[90px] text-black  bg-[#ffffe0] px-5 py-3 gap-3 shadow-md rounded-br-md z-50">
          <p
            onClick={() => router.push("/")}
            className="filter-tags bg-[#ffffff1e] w-full"
          >
            Home
          </p>
          {}
          <p
            className="filter-tags bg-[#ffffff1e] w-full"
            onClick={!session ? () => signIn() : () => signOut()}
          >
            {session ? "Sign Out" : "Sign In"}
          </p>
          <p
            onClick={() => router.push("/checkout")}
            className="filter-tags bg-[#ffffff1e] w-full"
          >
            Checkout
          </p>
          <p
            onClick={() => router.push("/orders")}
            className="filter-tags bg-[#ffffff1e] w-full"
          >
            Order History
          </p>
          <p
            onClick={() => router.push("/about")}
            className="filter-tags bg-[#ffffff1e] w-full"
          >
            About
          </p>
        </div>
      )}
    </header>
  );
};

export default Header;

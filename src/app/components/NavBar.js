"use client";
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logoPicture from "../../../public/LogoUpdated.jpeg";
import Image from "next/image";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center hover:text-blue-100 transition-colors text-black"
        >
          Pages
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center hover:text-blue-100 transition-colors text-black"
        >
          Account
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center hover:text-blue-100 transition-colors text-black"
        >
          Blocks
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center hover:text-blue-100 transition-colors text-black"
        >
          Docs
        </a>
      </Typography>
    </ul>
  );
}

export default function NavbarLayout() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="w-screen px-6 py-3 bg-white flex justify-between">
      {/* Left side of Navbar */}
      <div>
        <div className="flex items-center text-blue-gray-900">
          <div>
            <Image
              src={logoPicture}
              height={50}
              width={50}
              alt="logo"
              className="mr-2"
            />
          </div>
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="cursor-pointer py-1.5 text-black mr-10"
          >
            John Doe Real Estate
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
      </div>
      {/* Right side of Navbar */}
      <div className="grid text-blue-gray-900 items-center mr-10">
        <div className="flex">
          <PhoneIcon className="size-5 text-black" />
          <span className="text-black mx-2">(xxx)-xxx-xxxx</span>
        </div>
        <div className="flex">
          <EnvelopeIcon className="size-5 text-black" />
          <span className="text-black mx-2">johndoe@email.com</span>
        </div>
      </div>
    </Navbar>
  );
}

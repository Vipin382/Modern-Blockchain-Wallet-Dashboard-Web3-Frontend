import { Text } from "@nextui-org/react";
import React from "react";
import { FiHome } from "react-icons/fi";
import { useRouter } from "next/router";
import { MdOutlineAnalytics } from "react-icons/md";
import { TbWallet } from "react-icons/tb";
import {
  AiOutlineLineChart,
  AiOutlineSetting,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { MdOutlineEventNote } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import Ripples from "react-ripples";

const activeCss = `after:content after:absolute after:h-full after:top-0 after:bottom-0 after:left-0 after:w-1 after:bg-blue-600 bg-blue-800`;

const TabList = [
  {
    name: "Dashboard",
    href: "/",
    icon: <FiHome />,
    active: true,
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: <MdOutlineAnalytics />,
    active: false,
  },
  {
    name: "My Portfolio",
    href: "/portfolio",
    icon: <MdOutlineEventNote />,
    active: false,
  },
  {
    name: "My Wallets",
    href: "/wallets",
    icon: <TbWallet />,
    active: false,
  },
  {
    name: "Exchanges",
    href: "/exchanges",
    icon: <AiOutlineLineChart />,
    active: false,
  },
];
const LinkList = ({ href, name, icon }) => {
  const router = useRouter();
  return (
    <Ripples
      color={`${
        router.pathname.split("/")[1] === href.split("/")[1]
          ? "rgba(12,31,133,0.2)"
          : "rgb(168 162 158)"
      }`}
    >
      <div
        className={`h-10 w-full overflow-hidden relative rounded-md flex px-6 gap-3 cursor-pointer items-center bg-opacity-20 ${
          router.pathname.split("/")[1] === href.split("/")[1] ? activeCss : ""
        }`}
        onClick={() => router.push(`${href}`)}
      >
        <div
          className={`${
            router.pathname.split("/")[1] === href.split("/")[1]
              ? "text-blue-800"
              : "text-stone-400"
          }`}
        >
          {icon}
        </div>
        <Text
          weight={"semibold"}
          className={`${
            router.pathname.split("/")[1] === href.split("/")[1]
              ? "text-blue-800"
              : "text-stone-400"
          }`}
        >
          {name}
        </Text>
      </div>
    </Ripples>
  );
};

const secondtab = [
  {
    name: "Settings",
    href: "/settings",
    active: false,
    icon: <AiOutlineSetting />,
  },
  {
    name: "Help",
    href: "/help",
    active: false,
    icon: <AiOutlineInfoCircle />,
  },
  {
    name: "Logout",
    href: "/settings",
    active: false,
    icon: <BiLogOut />,
  },
];

const index = () => {
  return (
    <div className="min-w-[240px] w-[240px] hidden lg:flex max-h-[100vh] p-6 flex-col gap-4">
      <div className="flex-[1.1] flex flex-col gap-y-2">
        {TabList.map((item, index) => {
          return (
            <LinkList
              key={index}
              href={item.href}
              name={item.name}
              icon={item.icon}
            />
          );
        })}
      </div>
      <div className="border w-full"></div>
      <div className="flex-[1] flex flex-col gap-y-2">
        {secondtab.map((item, index) => {
          return (
            <LinkList
              key={index}
              href={item.href}
              name={item.name}
              icon={item.icon}
            />
          );
        })}
      </div>
    </div>
  );
};

export default index;

import { Navbar, Badge, Input, Row, Col } from "@nextui-org/react";
import { useState } from "react";
import Hamburger from "hamburger-react";
import { useTheme } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import { Switch } from "@nextui-org/react";
import { AiOutlineSearch } from "react-icons/ai";
import { Image } from "@nextui-org/react";
import { useContext } from "react";
import { Themecontext } from "@/context/ThemeContext";
import { Text } from "@nextui-org/react";
import { IoMdNotificationsOutline } from "react-icons/io";

const NewNavbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [search, setSearch] = useState(true);
  const { mode, setThemeMode } = useContext(Themecontext);
  const { isDark, type, theme } = useTheme();

  return (
    <Navbar
      css={{
        $$navbarBackgroundColor: "transparent",
        $$navbarBlurBackgroundColor: "transparent",
      }}
    >
      <Navbar.Brand>
        <div className="block lg:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
        </div>
        <Image src={"logo.svg"} width="130px" className="hidden lg:block" alt="loading..."/>
      </Navbar.Brand>
      <Navbar.Content className=" w-full px-44 hidden lg:flex">
        <Col className="hidden md:block">
          <Text weight={"bold"}>Welcome Zarror!</Text>
          <Text weight={"light"} size="small">
            Hope you are healthy and happy tofay
          </Text>
        </Col>
      </Navbar.Content>
      <Navbar.Content className={`${search ? "auto" : "w-full"}`}>
        {search ? (
          <Row className="flex justify-between gap-4 items-center">
            <div className="cursor-pointer" onClick={() => setSearch(!search)}>
              <AiOutlineSearch size={"26"} className="text-stone-600" />
            </div>
            <Switch
              checked={mode === "dark"}
              onChange={(e) =>
                setThemeMode(e.target.checked ? "dark" : "light")
              }
            />
            <Badge
              disableOutline
              variant={"dot"}
              color={"error"}
              className="hidden lg:block"
              content="xs"
              size="xs"
            >
              <Avatar
                squared
                size="sm"
                icon={<IoMdNotificationsOutline size={"30"} />}
                className="cursor-pointer"
              />
            </Badge>
            <Avatar
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
              size="md"
            />
          </Row>
        ) : (
          <div className="w-full flex justify-center">
            <Input
              type={"search"}
              placeholder="Search..."
              onBlur={() => setSearch(!search)}
              autoFocus
              className=" w-full"
              css={{
                width: "90%",
                borderRadius: "5px",
              }}
            />
          </div>
        )}
      </Navbar.Content>
    </Navbar>
  );
};

export default NewNavbar;

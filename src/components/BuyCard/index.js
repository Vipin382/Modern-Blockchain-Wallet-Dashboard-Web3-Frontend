import {
  Col,
  Row,
  Button,
  Input,
  Dropdown,
  User,
  Text,
  useTheme,
} from "@nextui-org/react";
import React from "react";
import { CgArrowsExchangeV } from "react-icons/cg";
import Ripples from "react-ripples";

const CoinData = [
  {
    name: "BTC",
    icon: "btc.svg",
  },
  {
    name: "BNB",
    icon: "bnb.svg",
  },
  {
    name: "ETH",
    icon: "ethereum.svg",
  },
  {
    name: "CAD",
    icon: "Cardano.svg",
  },
  {
    name: "TER",
    icon: "Terra.svg",
  },
];

const DropDownInput = () => {
  const [selected, setSelected] = React.useState(new Set(["BTC"]));

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );
  const image = React.useMemo(
    () => CoinData.filter((item) => item.name === selectedValue)[0],
    [selectedValue]
  );

  const { theme } = useTheme();
  return (
    <Row
      className="border border-opacity-30 border-stone-700"
      css={{
        background: theme.colors.foreground.value,
      }}
    >
      <Input
        type={"text"}
        className="rounded-none border-r border-opacity-30 border-stone-700"
        color={theme.colors.foreground.value}
        fullWidth
      />
      <Dropdown>
        <Dropdown.Button flat>
          <User
            src={image ? image.icon : ""}
            className="gap-3 p-0"
            color={theme.colors.foreground.value}
            name={selectedValue}
            size={"sm"}
          />
        </Dropdown.Button>
        <Dropdown.Menu
          selectedKeys={selected}
          disallowEmptySelection
          onSelectionChange={setSelected}
          selectionMode="single"
        >
          {CoinData.map((item) => {
            return (
              <Dropdown.Item key={item.name}>
                <User src={item.icon} name={item.name} size={"sm"} />
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </Row>
  );
};

const BuyCard = () => {
  const { theme } = useTheme();
  return (
    <Col
      className=" flex flex-col gap-2 p-3 rounded-lg"
      css={{
        background: theme.colors.foreground.value,
      }}
    >
      <Button.Group className="w-full m-0 rounded-none">
        <Button className="w-full  rounded-none text-blue-800">
          <Text weight={"semibold"} color={theme.colors.primary.value}>
            Buy
          </Text>
        </Button>
        <Button
          className="w-full  rounded-none text-blue-800"
          style={{
            background: "rgba(39,82,231,0.2)",
          }}
        >
          <Text color={theme.colors.primary.value} weight={"semibold"}>
            Sell
          </Text>
        </Button>
      </Button.Group>
      <Col className="flex justify-center items-center flex-col">
        <Text size={"$xs"} weight="light">
          Ethereum Price
        </Text>
        <Text size={"$xl"} weight="bold">
          $3.110.31
        </Text>
      </Col>
      <Col className="flex flex-col ">
        <DropDownInput />
        <div className="flex justify-center relative">
          <Ripples
            className="rounded-full absolute"
            color="rgba(12,31,133,0.2)"
          >
            <CgArrowsExchangeV
              color={theme.colors.primary.value}
              className=" rounded-full shadow-3xl border cursor-pointer bg-white"
              size={"25px"}
            />
          </Ripples>
        </div>
        <DropDownInput />
      </Col>
      <Button className="w-full bg-blue-700 rounded-none">
        <Text weight={"semibold"} color="white">
          BUY ETH
        </Text>
      </Button>
    </Col>
  );
};

export default BuyCard;

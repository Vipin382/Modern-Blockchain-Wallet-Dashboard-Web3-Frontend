import React from "react";
import { Col, Row, Text, User, useTheme } from "@nextui-org/react";
import { Card } from "@nextui-org/react";
import { IoIosArrowForward } from "react-icons/io";

const cardData = [
  {
    icon: "Litecoin.svg",
    name: "LiteCoin",
    added: "Added 2 days ago",
  },
  {
    icon: "EthClassic.svg",
    name: "Ethereum Classic",
    added: "Added 5 days ago",
  },
  {
    icon: "hodl.svg",
    name: "HOdlcoin",
    added: "Added 6 days ago",
  },
];

const CoinList = () => {
  const { theme } = useTheme();
  return (
    <Col
      className="p-4"
      css={{
        background: theme.colors.foreground.value,
      }}
    >
      <Row className="flex justify-between">
        <Text weight={"bold"}>New Cryptocurrency</Text>
        <Text
          weight={"semibold"}
          css={{
            color: theme.colors.primary.value,
          }}
        >
          See all
        </Text>
      </Row>
      <Col className="flex flex-col gap-4 pt-4">
        {cardData.map((item, index) => {
          return (
            <Card
              key={index}
              css={{ border: "none", shadow: "none" }}
              className="border rounded-md cursor-pointer"
            >
              <Card.Body className=" shadow-none p-3 ">
                <Row className="flex justify-between items-center">
                  <User
                    src={item.icon}
                    name={item.name}
                    className="font-bold"
                    description={item.added}
                  />
                  <IoIosArrowForward size={"20px"} />
                </Row>
              </Card.Body>
            </Card>
          );
        })}
      </Col>
    </Col>
  );
};

export default CoinList;

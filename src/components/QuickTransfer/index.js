import {
  Col,
  Row,
  Text,
  Avatar,
  Input,
  Button,
  useTheme,
} from "@nextui-org/react";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const imgData = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", ""];

const QuickTransfer = () => {
  const { theme } = useTheme();
  return (
    <Col
      className="flex flex-col gap-2 p-4 rounded-lg"
      css={{
        background: theme.colors.foreground.value,
      }}
    >
      <Row>
        <Text weight={"bold"}>Quick Transfer</Text>
      </Row>
      <Row className="flex gap-2">
        {imgData.map((item, key) => {
          return (
            <Avatar
              src={item}
              key={key}
              stacked={false}
              text="+"
              size={"md"}
              className="cursor-pointer"
              textColor={"white"}
              color={"primary"}
            />
          );
        })}
      </Row>
      <Col className="flex flex-col gap-2">
        <Text className=" text-stone-400">Amount</Text>
        <Input
          type="text"
          fullWidth
          className="border rounded-none border-stone-600 border-opacity-20"
        />
        <Button
          iconRight={<BsArrowRight />}
          className="bg-blue-700 rounded-none w-full"
        >
          Transfer
        </Button>
      </Col>
    </Col>
  );
};

export default QuickTransfer;

import { useTheme as useNextTheme } from "next-themes";
import { Col, Row, styled, useTheme, Text } from "@nextui-org/react";
import { useEffect } from "react";
import { useContext, useState } from "react";
import { Themecontext } from "@/context/ThemeContext";
import { Container } from "@nextui-org/react";
import BlockCard from "@/components/BlockCard";

import BarChart from "@/components/charts/BarChart";
import { Dropdown } from "@nextui-org/react";
import React from "react";
import moment from "moment/moment";
import { MoneyDataContext } from "@/context/MoneyDataWrapper";
import Table from "@/components/Table";
import BuyCard from "@/components/BuyCard";
import QuickTransfer from "@/components/QuickTransfer";
import CoinList from "@/components/CoinList";

const Box = styled(Container, {
  minHeight: "100vh",
  minWidth: "100%",
});

const DropDownData = [
  {
    name: "Spending",
    id: "Spending",
  },
  {
    name: "Balance",
    id: "Balance",
  },
  {
    name: "Saved",
    id: "Saved",
  },
];

const DateData = [
  {
    id: "2017",
    date: "2017",
  },
  {
    id: "2018",
    date: "2018",
  },
  {
    id: "2019",
    date: "2019",
  },
  {
    id: "2020",
    date: "2020",
  },
  {
    id: "2021",
    date: "2021",
  },
  {
    id: "2022",
    date: "2022",
  },
  {
    id: "2023",
    date: "2023",
  },
];
export default function Home() {
  const { setTheme } = useNextTheme();
  const { themeMode } = useContext(Themecontext);
  const { select, setSelect, NewData } = useContext(MoneyDataContext);

  const selectedValue = React.useMemo(() => {
    return Array.from(select).join(", ").replaceAll("_", " ");
  }, [select]);

  const [selectedDate, setSelectedDate] = React.useState(
    new Set([moment().format("yyyy")])
  );

  const selectedDateValue = React.useMemo(
    () => Array.from(selectedDate).join(", ").replaceAll("_", " "),
    [selectedDate]
  );

  const { theme } = useTheme();

  useEffect(() => {
    themeMode == "dark" ? setTheme("dark") : setTheme("light");
  }, [themeMode, setTheme]);

  return (
    <>
      <Box
        fluid
        css={{
          background: theme.colors.backgroundAlpha.value,
        }}
        className="flex  gap-4 py-4 flex-col xl:flex-row"
      >
        <div className="flex-[1.8] max-w-[100%] lg:max-w-[98%] xl:max-w-[60%] rounded flex flex-col gap-4">
          <Row className="flex gap-3 flex-wrap  md:flex-wrap xl:flex-nowrap">
            {NewData.map((item, index) => {
              return (
                <BlockCard
                  key={index}
                  name={item.name}
                  icon={item.icon}
                  ndata={item.data}
                  value={item.value}
                  change={item.change}
                />
              );
            })}
          </Row>
          <Col
            className="p-4 rounded-lg w-[260px] overflow-x-auto xs:w-auto"
            css={{
              background: theme.colors.foreground.value,
            }}
          >
            <Row className=" flex justify-between items-center min-w-fit">
              <Text weight={"semibold"} size={"$lg"} className="tracking-wide">
                Statistic
              </Text>
              <Row className=" w-auto flex gap=2">
                <Dropdown>
                  <Dropdown.Button flat>{selectedValue}</Dropdown.Button>
                  <Dropdown.Menu
                    aria-label="Static Actions"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={select}
                    onSelectionChange={setSelect}
                  >
                    {DropDownData.map((item) => {
                      return (
                        <Dropdown.Item
                          key={item.id}
                          className={`hover:bg-blue-700 hover:bg-opacity-30 hover:text-blue-500 active:bg-blue-500 active:bg-opacity-30 active:text-blue-500 focus:bg-blue-500 focus:bg-opacity-30 focus:text-blue-500`}
                        >
                          {item.name}
                        </Dropdown.Item>
                      );
                    })}
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Button flat>{selectedDateValue}</Dropdown.Button>
                  <Dropdown.Menu
                    aria-label="Static Actions"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={selectedDateValue}
                    onSelectionChange={setSelectedDate}
                  >
                    {DateData.map((item) => {
                      return (
                        <Dropdown.Item
                          key={item.id}
                          className={`hover:bg-blue-700 hover:bg-opacity-30 hover:text-blue-500 active:bg-blue-500 active:bg-opacity-30 active:text-blue-500 focus:bg-blue-500 focus:bg-opacity-30 focus:text-blue-500`}
                        >
                          {item.date}
                        </Dropdown.Item>
                      );
                    })}
                  </Dropdown.Menu>
                </Dropdown>
              </Row>
            </Row>
            <BarChart />
          </Col>
          <Col
            className="p-4 rounded-lg w-[260px] xs:w-auto relative"
            css={{
              background: theme.colors.foreground.value,
              overflow: scroll,
            }}
          >
            <Row justify={"space-between"} className=" px-4">
              <Text weight={"semibold"} className="tracking-wide">
                Trending Market
              </Text>
              <Text
                weight={"semibold"}
                className="cursor-pointer text-shadow"
                css={{
                  color: theme.colors.primary.value,
                }}
              >
                View more markets
              </Text>
            </Row>

            <Table />
          </Col>
        </div>
        <div className="flex-1 rounded flex flex-col gap-4">
          <BuyCard />
          <QuickTransfer />
          <CoinList />
        </div>
      </Box>
    </>
  );
}

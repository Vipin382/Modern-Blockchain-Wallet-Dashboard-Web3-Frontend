import { MoneyDataContext } from "@/context/MoneyDataWrapper";
import { Card, Col, Row, Text, useTheme } from "@nextui-org/react";
import { useContext } from "react";
import { BsArrowDownSquare } from "react-icons/bs";
import { BsArrowUpSquare } from "react-icons/bs";
import { AreaChart, Area } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 1000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const GetImprovementIcon = ({ improving }) => {
  const { theme } = useTheme();
  return improving ? (
    <BsArrowUpSquare color={`${theme.colors.success.value}`} />
  ) : (
    <BsArrowDownSquare />
  );
};

export default function BlockCard({ name, icon, ndata, value, change }) {
  const { theme } = useTheme();
  const { select } = useContext(MoneyDataContext);
  return (
    <Card
      variant="flat"
      css={{
        bg: `${
          name === Array.from(select).join(", ").replaceAll("_", " ")
            ? theme.colors.primary.value
            : theme.colors.foreground.value
        }`,
        border: "none",
      }}
      className="rounded-lg p-2"
    >
      <Card.Header>
        <Row justify={"space-between"} align={"center"}>
          <Row className="flex items-center gap-3 ">
            <div
              className={`h-9 w-9 ${
                name === Array.from(select).join(", ").replaceAll("_", " ")
                  ? "bg-white"
                  : "bg-[#A8C1FC]"
              } rounded-full flex justify-center items-center`}
            >
              <div style={{ color: `${theme.colors.primary.value}` }}>
                {icon}
              </div>
            </div>
            <Text
              weight={"semibold"}
              color={`${
                name === Array.from(select).join(", ").replaceAll("_", " ")
                  ? theme.colors.white.value
                  : null
              }`}
              className="tracking-wider"
            >
              {name}
            </Text>
          </Row>
          <div>
            <AreaChart width={60} height={40} data={data}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="28%"
                    stopColor={`${
                      change.split("")[0] === "+" && value.split("")[0] === "$"
                        ? "rgba(83,210,88,1)"
                        : theme.colors.error.value
                    }`}
                    stopOpacity={0.6}
                  />
                  <stop
                    offset="78%"
                    stopColor="rgba(0,0,0,0)"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="uv"
                fill="url(#colorUv)"
                stroke={`${
                  change.split("")[0] === "+" && value.split("")[0] !== "-"
                    ? "rgba(83,210,88,1)"
                    : theme.colors.error.value
                }`}
              />
            </AreaChart>
          </div>
        </Row>
      </Card.Header>
      <Card.Body>
        <Col>
          <Text
            weight={"semibold"}
            size={"$xl"}
            color={`${
              name === Array.from(select).join(", ").replaceAll("_", " ")
                ? theme.colors.white.value
                : null
            }`}
            className="tracking-wide"
          >
            {value}
          </Text>
          <Text
            size={"$sm"}
            weight={"semibold"}
            color={`${
              change.split("")[0] === "+" && value.split("")[0] !== "-"
                ? theme.colors.success.value
                : theme.colors.error.value
            }`}
            className="flex gap-1 items-center"
          >
            <GetImprovementIcon
              improving={
                change.split("")[0] === "+" && value.split("")[0] !== "-"
              }
            />
            {change}
          </Text>
        </Col>
      </Card.Body>
    </Card>
  );
}

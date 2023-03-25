import { Row, Table, Text, Tooltip, styled, useTheme } from "@nextui-org/react";
import { User } from "@nextui-org/react";
import { GetImprovementIcon } from "../BlockCard";

export const IconButton = styled("button", {
  dflex: "center",
  border: "none",
  outline: "none",
  cursor: "pointer",
  padding: "0",
  margin: "0",
  bg: "transparent",
  transition: "$default",
  "&:hover": {
    opacity: "0.8",
  },
  "&:active": {
    opacity: "0.6",
  },
});

const NewTable = () => {
  const { theme } = useTheme();
  const columns = [
    {
      key: "token",
      label: "Token",
    },
    {
      key: "LastPrice",
      label: "Last Price",
    },
    {
      key: "change",
      label: "24H Change",
    },
    {
      key: "market",
      label: "Market Cap",
    },
  ];
  const rows = [
    {
      key: "1",
      token: "BNB",
      src: "bnb.svg",
      LastPrice: "$41,263,00",
      change: "+35,74%",
      market: "$784,393M",
      status: "Active",
    },
    {
      key: "2",
      token: "Bitcoin",
      src: "btc.svg",
      LastPrice: "$41,263,00",
      change: "+35,74%",
      market: "$784,393M",
      status: "Active",
    },
    {
      key: "3",
      token: "Ethereum",
      src: "ethereum.svg",
      LastPrice: "$41,263,00",
      change: "+35,74%",
      market: "$784,393M",
      status: "Active",
    },
    {
      key: "4",
      token: "Terra",
      src: "Terra.svg",
      LastPrice: "$41,263,00",
      change: "+35,74%",
      market: "$784,393M",
      status: "Active",
    },
    {
      key: "5",
      token: "Cardano",
      src: "Cardano.svg",
      LastPrice: "$41,263,00",
      change: "+35,74%",
      market: "$784,393M",
      status: "Active",
    },
  ];

  const renderCell = (user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "token":
        return (
          <Tooltip content={user.token}>
            <User
              src={user.src}
              name={user.token}
              className=" text-lg"
              size={"sm"}
            />
          </Tooltip>
        );
      case "LastPrice":
        return (
          <Row>
            <Tooltip content={columnKey}>
              <Text weight={"semibold"} className="truncate tracking-wide">
                {user.LastPrice}
              </Text>
            </Tooltip>
          </Row>
        );
      case "change":
        return (
          <Row>
            <Tooltip content="24h Change">
              <IconButton>
                <Row justify={"center"} align={"center"} className="gap-1">
                  <GetImprovementIcon
                    improving={user.change.split("")[0] === "+"}
                  />
                  <Text
                    b
                    css={{
                      color: theme.colors.success.value,
                    }}
                  >
                    {user.change}
                  </Text>
                </Row>
              </IconButton>
            </Tooltip>
          </Row>
        );
      case "market":
        return (
          <Row>
            <Tooltip content={columnKey}>
              <Text weight={"semibold"} className="truncate tracking-wide">
                {user.market}
              </Text>
            </Tooltip>
          </Row>
        );
      default:
        return cellValue;
    }
  };
  return (
    <Table
      aria-label="Example table with dynamic content"
      css={{
        border: "none",
        overflowX: "auto",
      }}
    >
      <Table.Header columns={columns}>
        {(column) => (
          <Table.Column key={column.key}>{column.label}</Table.Column>
        )}
      </Table.Header>
      <Table.Body items={rows}>
        {(item) => (
          <Table.Row key={item.key}>
            {(columnKey) => (
              <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
            )}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  );
};

export default NewTable;

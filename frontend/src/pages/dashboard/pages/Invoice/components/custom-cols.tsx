import { Typography } from "../../../../../design-system";

export const CustomColumns = () => [
  {
    title: "Product name",
    dataIndex: "product_name",
    key: "1",
    sortable: false,
    render: (product_name: string) => {
      return (
        <div className="flex gap-2 items-center ">
          <Typography
            fontWeight={500}
            variant={"body4"}
            className="cursor-pointer hover:!text-color-primary"
            color={"gray.600"}
          >
            {product_name}
          </Typography>
        </div>
      );
    },
  },
  {
    title: "QTY",
    dataIndex: "quantity",
    key: "2",
    render: (quantity: string) => {
      return (
        <Typography variant={"body4"} color={"gray.600"}>
          {quantity}
        </Typography>
      );
    },
  },
  {
    title: "Price (₦)",
    dataIndex: "unit_price",
    key: "3",
    render: (unit_price: string) => {
      return (
        <Typography variant={"body4"} color={"gray.600"}>
          {unit_price}
        </Typography>
      );
    },
  },
  {
    title: "Total amount",
    dataIndex: "unit_price",
    key: "4",
    render: (unit_price: number, quantity: number) => {
      // @ts-ignore
      const total = unit_price * quantity?.quantity;
      return (
        <Typography variant={"body4"} color={"gray.600"}>
          {total}
        </Typography>
      );
    },
  },
];

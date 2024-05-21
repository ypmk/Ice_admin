"use client";

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export const columns: ColumnDef<OrderColumnType>[] = [
  {
    accessorKey: "_id",
    header: "Заказ",
    cell: ({ row }) => {
      return (
        <Link
          href={`/orders/${row.original._id}`}
          className="hover:text-red-1"
        >
          {row.original._id}
        </Link>
      );
    },
  },
  {
    accessorKey: "customer",
    header: "Покупатель",
  },
  {
    accessorKey: "products",
    header: "Продукты",
  },
  {
    accessorKey: "totalAmount",
    header: "Сумма",
  },
  {
    accessorKey: "createdAt",
    header: "Время создания",
  },
];

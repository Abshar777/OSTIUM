"use client";

import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "@/components/global/cell-actions";
import { buttonVariants } from "@/components/ui/button";

import { ImEmbed2 } from "react-icons/im";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Dialog } from "@/components/ui/dialog";

import { cn } from "@/lib/utils";
export type Cloumn = {
  time: string;
  operations: string;
  shares: string;

  createdAt: string;
};

export const columns: ColumnDef<Cloumn>[] = [
  {
    accessorKey: "rowNumber",
    header: "#",
    cell: ({ row }) => <div>{row.index + 1}</div>,
  },
  {
    accessorKey: "time",
    header: "Time",
    cell: ({ row }) => <div>{row.getValue("time")}</div>,
  },
  {
    accessorKey: "operations",
    header: "Operations",
    cell: ({ row }) => <div>{row.getValue("operations")}</div>,
  },
  {
    accessorKey: "shares",
    header: "Shares",
    cell: ({ row }) => <div>{row.getValue("shares")}</div>,
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => <div>{row.getValue("createdAt")}</div>,
  },

  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      return <CellAction id={"123"} />;
    },
  },
];

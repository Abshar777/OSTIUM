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
  action: string;
  shares: string;
  epoch: string;
  lockPeriod: string;
  status: string;
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
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => <div>{row.getValue("action")}</div>,
  },
  {
    accessorKey: "shares",
    header: "Shares",
    cell: ({ row }) => <div>{row.getValue("shares")}</div>,
  },
  {
    accessorKey: "epoch",
    header: "Epoch",
    cell: ({ row }) => <div>{row.getValue("epoch")}</div>,
  },
  {
    accessorKey: "lockPeriod",
    header: "Lock Period",
    cell: ({ row }) => <div>{row.getValue("lockPeriod")}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <div>{row.getValue("status")}</div>,
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      return <CellAction id={"123"} />;
    },
  },
];

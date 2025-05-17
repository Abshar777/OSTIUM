"use client";
import React from "react";
import { DataTable } from "../../global/data-table";
import { columns } from "./column";
import { DataTableSkeleton } from "../../loaders/tableSkelton";

interface Props {}

const WithDrawList = (props: Props) => {
  // Showcasing the use of search params cache in nested RSCs

  const { data, isPending } = {
    data: [],
    isPending: false,
  };

  if (isPending) return <DataTableSkeleton />;

  if (data) {
    const schemas = data as any;
    return <DataTable search={"name"} data={schemas} columns={columns} />;
  }
  return null;
};

export default WithDrawList;

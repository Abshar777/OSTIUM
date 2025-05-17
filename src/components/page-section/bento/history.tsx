"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { PiCodesandboxLogoLight } from "react-icons/pi";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/animation/animated-tabs";
import React from "react";
import DepositeList from "@/components/table/deposite/DepositeList";
import WithDrawList from "@/components/table/withdrawReq/WithDrawList";
import AllList from "@/components/table/all/allList";
import { ScrollArea,ScrollBar } from "@/components/ui/scroll-area";

const History = () => {
  const tabs = ["All", "Deposite", "Withdraw Request", "Locked Funds"];
  return (
    <Card className="w-full  h-full">
      <ScrollArea className="md:w-auto  w-[85vw]">
        <Tabs defaultValue="All" className="w-full">
          <CardHeader className="">
            <CardTitle className="w-full flex  justify-start gap-2 ">
              <TabsList
                defaultValue="All"
                indicatorClassName="bg-transparent  border-primary border-b-2 rounded-none"
                className=" p-0 bg-transparent flex  justify-start gap-2    w-full "
              >
                {tabs.map((tab, index) => (
                  <TabsTrigger key={index} value={tab} className="md:p-2 p-1 md:text-sm text-xs">
                    {tab}
                  </TabsTrigger>
                ))}
              </TabsList>
            </CardTitle>
          </CardHeader>
          <CardContent className="h-full">
            <TabsContent className="h-full" value="All">
              <AllList />
            </TabsContent>
            <TabsContent className="h-full" value="Deposite">
              <DepositeList />
            </TabsContent>
            <TabsContent className="h-full" value="Withdraw Request">
              <WithDrawList />
            </TabsContent>
            <TabsContent className="h-full" value="Locked Funds">
              <AllList />
            </TabsContent>
          </CardContent>
        </Tabs>
        <ScrollBar className="bg-primary relative -translate-y-[50rem]" orientation="horizontal" />
      </ScrollArea>
    </Card>
  );
};

export default History;

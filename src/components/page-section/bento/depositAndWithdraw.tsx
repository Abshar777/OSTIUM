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
import React, { useState } from "react";
import { DollarSignIcon } from "lucide-react";
import { Input } from "../../ui/input";
import { Badge } from "../../ui/badge";
import { Slider } from "../../ui/slider";
import { Button } from "../../ui/button";

const DepositAndWithdraw = () => {
  return (
    <Card className="w-full h-full">
      <Tabs defaultValue="deposite" className="w-full">
        <CardHeader>
          <CardTitle>
            <TabsList className="grid p-0 bg-transparent border  w-full grid-cols-2">
              <TabsTrigger value="deposite" className="p-2  ">
                Deposite
              </TabsTrigger>
              <TabsTrigger value="withdraw" className="p-2  ">
                Withdraw
              </TabsTrigger>
            </TabsList>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Deposit />
          <Withdraw />
        </CardContent>
      </Tabs>
      <CardFooter>
        <Button className="w-full">Connect </Button>
      </CardFooter>
    </Card>
  );
};

export default DepositAndWithdraw;

function Deposit() {
  const [days, setDays] = useState(7);
  return (
    <TabsContent value="deposite">
      <div className="flex flex-col  gap-4">
        <span className="text-sm  font-semibold ">Total Liquidity</span>
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs text-muted-foreground">Deposit</span>
          <span className="text-xs font-semibold text-muted-foreground flex items-center gap-1">
            <DollarSignIcon
              color="white"
              className="w-4 h-4 flex items-center justify-center bg-blue-500 rounded-full p-1 text-white"
            />{" "}
            100,000 USDC
          </span>
        </div>
        <div className="flex relative">
          <Input
            type="number"
            placeholder="Enter an Amount"
            min={0}
            className="w-full "
          />
          <p className="text-xs text-muted-foreground absolute right-2 top-1/2 -translate-y-1/2">
            Max
          </p>
        </div>
        <div className="flex flex-col px-3 py-2 border-input border rounded-md bg-input/30">
          <div className="flex w-full justify-between items-center">
            <span className="text-xs text-muted-foreground">Lock</span>
            <Badge className="bg-primary/20 text-primary">{days} days</Badge>
          </div>
          <div className="w-full py-3">
            <Slider
              defaultValue={[33]}
              max={100}
              step={1}
              onValueChange={(value) => setDays(value[0] + 7)}
            />
          </div>
        </div>
        <div className="flex px-2 flex-col gap-2">
          <div className="flex justify-between items-center gap-2">
            <span className="text-xs text-muted-foreground">
              You will receive
            </span>
            <span className="text-xs text-muted-foreground">0 0 LP</span>
          </div>
          <div className="flex justify-between items-center gap-2">
            <span className="text-xs text-muted-foreground">Lock Boost</span>
            <span className="text-xs text-muted-foreground">0.00%</span>
          </div>
        </div>
      </div>
    </TabsContent>
  );
}

function Withdraw() {
  const [percentage, setPercentage] = useState(0);
  return (
    <TabsContent value="withdraw">
      <Tabs defaultValue="Unlock" className="w-full flex flex-col gap-4 ">
        <TabsList
          indicatorClassName="bg-primary/30 border-primary/30 border"
          className="bg-transparent"
        >
          <TabsTrigger value="Unlock" className="text-xs">
            Unlock
          </TabsTrigger>
          <TabsTrigger value="Request" className="text-xs">
            Request
          </TabsTrigger>
          <TabsTrigger value="Withdraw" className="text-xs">
            Withdraw
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Request">
          <div className="flex flex-col  gap-4">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs text-muted-foreground">Withdraw</span>
              <span className="text-xs font-semibold text-muted-foreground flex items-center gap-1">
                <PiCodesandboxLogoLight
                  color="white"
                  className="w-4 h-4 flex items-center justify-center bg-primary rounded-full p-1 text-white"
                />{" "}
                OLP
              </span>
            </div>
            <div className="flex relative">
              <Input
                type="number"
                placeholder="Enter an Amount"
                min={0}
                className="w-full "
              />
              <p className="text-xs text-muted-foreground absolute right-2 top-1/2 -translate-y-1/2">
                Max
              </p>
            </div>
            <div className="flex flex-col px-3 py-2 border-input border rounded-md bg-input/30">
              <div className="flex w-full justify-between items-center">
                <span className="text-xs text-muted-foreground">Lock</span>
                <Badge className="bg-primary/20 text-primary">
                  {percentage}%
                </Badge>
              </div>
              <div className="w-full py-3">
                <Slider
                  defaultValue={[0]}
                  max={100}
                  step={1}
                  onValueChange={(value) => setPercentage(value[0])}
                />
              </div>
            </div>
            <div className="flex px-2 flex-col gap-2">
              <div className="flex justify-between items-center gap-2">
                <span className="text-xs text-muted-foreground">
                  You will receive
                </span>
                <span className="text-xs text-muted-foreground">0 0 LP</span>
              </div>
              <div className="flex justify-between items-center gap-2">
                <span className="text-xs text-muted-foreground">
                  Lock Boost
                </span>
                <span className="text-xs text-muted-foreground">0.00%</span>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="Withdraw">
          <div className="flex flex-col  gap-4">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs text-muted-foreground">Withdraw</span>
              <span className="text-xs font-semibold text-muted-foreground flex items-center gap-1">
                <PiCodesandboxLogoLight
                  color="white"
                  className="w-4 h-4 flex items-center justify-center bg-primary rounded-full p-1 text-white"
                />{" "}
                OLP
              </span>
            </div>
            <div className="flex relative">
              <Input
                type="number"
                placeholder="Enter an Amount"
                min={0}
                className="w-full "
              />
              <p className="text-xs text-muted-foreground absolute right-2 top-1/2 -translate-y-1/2">
                Max
              </p>
            </div>
       
            <div className="flex px-2 flex-col gap-2">
              <div className="flex justify-between items-center gap-2">
                <span className="text-xs text-muted-foreground">
                  You will receive
                </span>
                <span className="text-xs text-muted-foreground">0 0 LP</span>
              </div>
              <div className="flex justify-between items-center gap-2">
                <span className="text-xs text-muted-foreground">
                  Lock Boost
                </span>
                <span className="text-xs text-muted-foreground">0.00%</span>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </TabsContent>
  );
}

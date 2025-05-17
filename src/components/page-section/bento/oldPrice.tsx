"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/animation/animated-tabs";
import Chart, { ChartIndicator, DataPoint } from "@/components/global/chart";

// Generate sample chart data
const generateChartData = (days = 30): DataPoint[] => {
  const data: DataPoint[] = [];
  const baseValue = 1.054;
  const now = new Date();
  let currentValue = baseValue;

  for (let i = 0; i < days; i++) {
    const date = new Date(now);
    date.setDate(date.getDate() - (days - i - 1));

    // Zig-zag fluctuation: value changes up/down randomly by a bigger amount
    const direction = Math.random() > 0.5 ? 1 : -1;
    const change = direction * (Math.random() * 0.005); // Change can be +/- up to 0.005
    currentValue += change;

    data.push({
      date: `${date.getMonth() + 1}/${date.getDate()}`,
      value: Number(currentValue.toFixed(4)),
    });
  }

  return data;
};

const OldPrice = () => {
  return (
    <Card className="w-full h-full ">
      <Tabs defaultValue="30D" className="w-full">
        <CardHeader>
          <CardTitle className="w-full flex items-center justify-between">
            <div className="flex md:flex-row flex-col items-center gap-2">
              <h1 className="text-xl font-medium">Old Price</h1>
              <p className="md:text-xl text-sm font-medium">
                <span className="text-muted-foreground">1.056084 USDC</span>
              </p>
            </div>
            <TabsList className="bg-transparent border-none">
              <TabsTrigger value="30D">30D</TabsTrigger>
              <TabsTrigger value="60D">60D</TabsTrigger>
              <TabsTrigger value="90D">90D</TabsTrigger>
            </TabsList>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <TabsContent value="30D">
            <Chart
              data={generateChartData(30)}
              tooltipTitle="Rate"
              valueFormatter={(value) => value.toFixed(4)}
              dateFormatter={(date) => date}
            />
          </TabsContent>
          <TabsContent value="60D">
            <Chart
              data={generateChartData(60)}
              tooltipTitle="Rate"
              valueFormatter={(value) => value.toFixed(4)}
              dateFormatter={(date) => date}
            />
          </TabsContent>
          <TabsContent value="90D">
            <Chart
              data={generateChartData(90)}
              tooltipTitle="Rate"
              valueFormatter={(value) => value.toFixed(4)}
              dateFormatter={(date) => date}
            />
          </TabsContent>
        </CardContent>
      </Tabs>
    </Card>
  );
};

export default OldPrice;

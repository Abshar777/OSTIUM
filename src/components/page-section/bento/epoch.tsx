"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Epoch = () => {
  const [progress, setProgress] = useState(1);

  // Simulate progress increasing over time for demo purposes
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : prev));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto h-full">
      <Card className="w-full h-full   border-gray-800">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <h1 className="text-xl font-bold ">Epoch #86</h1>
            <p className="text-xs font-medium font-mono tracking-tighter text-muted-foreground ">
              17 May, 12:38 UTC -
              <br className="md:hidden" />
              20 May, 12:38 UTC
            </p>
          </div>
          <p className="text-xs font-medium font-mono tracking-tighter text-muted-foreground  mt-1">
            Current Progress: {progress}%
          </p>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-3">
            {/* Day headers */}
            <div className="grid grid-cols-3 gap-1 mb-2">
              <div className="text-sm text-muted-foreground border-l border-input px-1 font-medium">
                Day One
              </div>
              <div className="text-sm text-muted-foreground border-l border-input px-1 font-medium">
                Day Two
              </div>
              <div className="text-sm text-muted-foreground border-l border-input px-1 font-medium">
                Day Three
              </div>
            </div>

            <div className="grid grid-cols-3 h-6 relative mb-2">
              <div className="absolute top-0 bg-green-700 left-0 flex items-center justify-center w-1/2 h-full border-r border-white py-2 overflow-hidden rounded-l-sm">
                <p className="text-xs font-medium font-mono tracking-tighter text-muted-foreground ">
                  Deposit
                </p>
              </div>
              <div className="bg-green-900 w-full p-2 rounded-l-sm"></div>
              <div className="bg-green-900 w-full p-2"></div>
              <div className="bg-green-900 w-full p-2 rounded-r-sm"></div>
            </div>
            <div className="grid grid-cols-3 h-6 relative mb-2">
              <div className="absolute top-0 bg-green-700 left-0 flex items-center justify-center w-1/4 h-full border-r border-white py-2 overflow-hidden rounded-l-sm"></div>
              <p className="text-xs absolute text-nowrap top-0 left-5 flex items-center justify-center  h-full  py-2 rounded-l-sm font-medium font-mono tracking-tighter text-muted-foreground ">
                Request Withdrawal
              </p>
              <div className="bg-green-900 w-full p-2 rounded-l-sm"></div>
              <div className="bg-green-900 w-full p-2 rounded-r-sm"></div>
              <div className="bg-zinc-900 w-full p-2 ml-2  rounded-sm"></div>
            </div>
            <div className="grid grid-cols-3 h-6 relative mb-2">
              <div className="absolute top-0 bg-green-700 left-0 flex items-center justify-center w-[10%] h-full border-r border-white py-2 overflow-hidden rounded-l-sm"></div>
              <p className="text-xs absolute text-nowrap top-0 left-5 flex items-center justify-center  h-full  py-2 rounded-l-sm font-medium font-mono tracking-tighter text-muted-foreground ">
                Withdrawal Window
              </p>
              <div className="bg-green-900 w-full p-2 rounded-l-sm"></div>
              <div className="bg-green-900 w-full p-2 rounded-r-sm"></div>
              <div className="bg-zinc-900 w-full p-2 ml-2  rounded-sm"></div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Epoch;

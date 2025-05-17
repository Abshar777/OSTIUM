import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSignIcon } from "lucide-react";

const Valut = () => {
  return (
    <div className="grid py-5  border-x border-dashed px-5  grid-cols-1 md:grid-cols-2 gap-4 w-full pb-2">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold ">Liquidity Pool Vault</h1>
        <p className="text-sm text-muted-foreground">
          Earn fractional trading and liquidation feeds with $OLP by providing
          liquidity with staked USDC. This pool acts as the ultimate backstop
          for trade settlement.
        </p>
      </div>
      <div className="w-full md:px-5 flex justify-end">
        <Card className="md:w-1/2 w-full">
          <CardHeader>
            <CardTitle>
              <div className="flex border-b border-dashed pb-2 w-full justify-between items-center gap-2">
                <span className="text-xs text-muted-foreground">
                  Total Liquidity
                </span>
                <span className="text-xs font-normal text-muted-foreground flex items-center gap-1">
                  <DollarSignIcon className="w-4 h-4 bg-blue-500 rounded-full p-1 text-white" />{" "}
                  100,000 USDC
                </span>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex -mt-4 flex-col gap-2">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center gap-2"
                >
                  <span className="text-xs text-muted-foreground">
                    OLP Supply
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {index + 1}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Valut;

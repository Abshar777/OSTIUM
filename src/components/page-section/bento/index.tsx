"use client";
import DepositAndWithdraw from "./depositAndWithdraw";
import Epoch from "./epoch";
import History from "./history";
import OldPrice from "./oldPrice";
const Bento = () => {
  return (
    <>
      <div className="grid border-dashed md:border-x md:px-5 py-4 grid-cols-1 md:grid-cols-3 gap-4 pb-2">
        <div className="col-span-1 overflow-hidden w-full">
          <DepositAndWithdraw />
        </div>
        <div className="md:col-span-2">
          <History />
        </div>
      </div>
      <div className="grid grid-cols-1 md:border-x border-dashed md:px-5 py-4 w-full  md:grid-cols-7 gap-4">
        <div className="col-span-3 overflow-hidden w-full">
          <Epoch />
        </div>
        <div className="col-span-4 overflow-hidden w-full">
          <OldPrice />
        </div>
      </div>
    </>
  );
};

export default Bento;

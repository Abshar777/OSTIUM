import Bento from "@/components/page-section/bento";
import Valut from "@/components/page-section/valut";

export default function Home() {
  return (
    <>
      <div className="w-full     rounded-md  flex flex-col  ">
        <div className="border-b md:px-40 border-dashed ">
          <Valut />
        </div>
        <div className="border-b md:px-40  px-5 border-dashed ">
          <Bento />
        </div>
        {/* credits footer */}
        <div className="border-b md:px-40  px-5 border-dashed ">
          <p className="text-sm py-5 px-2 border-x border-dashed w-full text-muted-foreground">
            Questions? Please visit our{" "}
            <span className="text-primary font-bold">
              #support channel on Discord
            </span>{" "}
            or see the
            <span className="text-primary font-bold"> Liquidity Pool FAQ</span>
          </p>
        </div>
      </div>
    </>
  );
}

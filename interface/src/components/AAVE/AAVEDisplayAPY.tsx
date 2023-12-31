import React, { useEffect, useState } from "react";
import abi from "../../../abi/abis.json";
import { useContractRead } from "wagmi";
import { ethers } from "ethers";

interface AAVEDisplayAPYInterface {
  tokenAddress: string;
  contractAddress?: `0x${string}`;
  coins: any;
}

export default function AAVEDisplayAPY({
  tokenAddress,
  contractAddress,
  coins,
}: AAVEDisplayAPYInterface) {
  const [apy, setApy] = useState<any>();
  const { data, isSuccess } = useContractRead({
    address: contractAddress,
    abi: abi.abiPoolDataProvider,
    functionName: "getReserveData",
    args: [tokenAddress],
  });

  useEffect(() => {
    const apyData = data as any;
    setApy(apyData);
  }, [isSuccess]);

  return (
    <div className="flex">
      <div className="mr-10">
        {apy !== undefined &&
          Number(
            ethers.utils.formatUnits(apy.variableBorrowRate.toString(), "25")
          ).toFixed(2)}{" "}
        %
      </div>
    </div>
  );
}

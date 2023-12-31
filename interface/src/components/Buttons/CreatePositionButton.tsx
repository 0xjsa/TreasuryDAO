import React from "react";
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";
import abi from "../../../abi/abis.json";

interface EventIdInputInterface {
  callDatas: string[] | undefined;
  values: string[] | undefined;
  targets: string[] | undefined;
  descriptionHash: string | undefined;
  governorAddress?: `0x${string}`;
}

export default function CreatePositionButton({
  callDatas,
  values,
  targets,
  descriptionHash,
  governorAddress,
}: EventIdInputInterface) {
  const { config: createPositionContractConfig } = usePrepareContractWrite({
    address: governorAddress,
    abi: abi.abiGovernor,
    functionName: "propose",
    args: [targets, values, callDatas, descriptionHash],
  });

  const { writeAsync: createPositionContractTx, data: dataCreatePosition } =
    useContractWrite(createPositionContractConfig);

  const { isSuccess: txSuccessCreatePosition, data: txReceiptCreatePosition } =
    useWaitForTransaction({
      confirmations: 3,
      hash: dataCreatePosition?.hash,
    });

  const onCreatePositionClick = async () => {
    try {
      await createPositionContractTx?.();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <div className="mt-4 flex justify-center ">
          <button
            onClick={() => onCreatePositionClick()}
            className="px-4 py-2 rounded-full h-12 bg-black text-white"
          >
            Submit Proposal
          </button>
        </div>
      </div>
    </>
  );
}

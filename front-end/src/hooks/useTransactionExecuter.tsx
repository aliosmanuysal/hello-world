import { executeContractCall, isDevnetEnvironment } from "@/lib/contract-utils";
import { DevnetWallet } from "@/lib/devnet-wallet-context";
import { Box, Flex, useToast } from "@chakra-ui/react";
import { ContractCallRegularOptions, request } from "@stacks/connect";

// Execute a stx transaction on-chain from the client.
// For devnet, it directly calls the transaction.
// For mainnet/testnet, it requests signing from the browser wallet extension
export default function useTransactionExecuter() {
  const toast = useToast();

  return async (
    txOptions: ContractCallRegularOptions,
    devnetWallet: DevnetWallet | null,
    successMessage: string,
    errorMessage: string
  ) => {
    const doSuccessToast = (txid: string) => {
      toast({
        title: successMessage,
        description: (
          <Flex direction="column" gap="4">
            <Box fontSize="xs">
              Transaction ID: <strong>{txid}</strong>
            </Box>
          </Flex>
        ),
        status: "success",
        isClosable: true,
        duration: 30000,
      });
    };

    try {
      // Devnet uses direct call, Testnet/Mainnet needs to prompt with browser extension
      if (isDevnetEnvironment()) {
        const { txid } = await executeContractCall(txOptions, devnetWallet);
        doSuccessToast(txid);
      } else {
        try {
          const contract = `${txOptions.contractAddress}.${txOptions.contractName}`;
          
          // Typed params for stx_callContract request; use `unknown` for
          // external/loose fields to avoid explicit `any`.
          type StxCallParams = {
            contract: string;
            functionName: string;
            functionArgs?: unknown[];
            network?: string;
            postConditions?: unknown;
            postConditionMode?: string;
            sponsored?: boolean;
          };

          const params: StxCallParams = {
            contract,
            functionName: txOptions.functionName,
            functionArgs: txOptions.functionArgs as unknown as unknown[],
            network:
              typeof txOptions.network === "string"
                ? txOptions.network
                : txOptions.network && "chainId" in txOptions.network
                ? txOptions.network.chainId === 1
                  ? "mainnet"
                  : "testnet"
                : "testnet",
            postConditions: txOptions.postConditions as unknown,
            postConditionMode:
              txOptions.postConditionMode === 1 ? "allow" : "deny",
            sponsored: txOptions.sponsored,
          };

          // request expects an external call-shape; cast here and keep the
          // suppression very local.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const result = await request({}, "stx_callContract", params as any);
          if (result && result.txid) {
            doSuccessToast(result.txid);
          } else {
            toast({
              title: "Transaction submitted",
              description: "Your transaction was submitted successfully",
              status: "success",
              isClosable: true,
              duration: 5000,
            });
          }
        } catch (error) {
          if (error instanceof Error && error.message?.includes('cancelled')) {
            toast({
              title: "Transaction not submitted",
              description: "Transaction was cancelled",
              status: "info",
              duration: 3000,
            });
          } else {
            throw error;
          }
        }
      }
    } catch (e) {
      console.error(e);
      toast({
        title: "Error",
        description: errorMessage,
        status: "error",
      });
      return false;
    }
  };
}

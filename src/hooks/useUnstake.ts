import { useCallback } from 'react'

import useApe from './useApe'
import { useWallet } from 'use-wallet'

import { unstake, getMasterChefContract } from '../ape/utils'

const useUnstake = (pid: number) => {
  const { account } = useWallet()
  const ape = useApe()
  const masterChefContract = getMasterChefContract(ape)

  const handleUnstake = useCallback(
    async (amount: string) => {
      const txHash = await unstake(masterChefContract, pid, amount, account)
      console.log(txHash)
    },
    [account, pid, ape],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstake

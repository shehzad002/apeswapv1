import { useCallback } from 'react'

import useApe from './useApe'
import { useWallet } from 'use-wallet'

import { stake, getMasterChefContract } from '../ape/utils'

const useStake = (pid: number) => {
  const { account } = useWallet()
  const ape = useApe()

  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await stake(
        getMasterChefContract(ape),
        pid,
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, pid, ape],
  )

  return { onStake: handleStake }
}

export default useStake

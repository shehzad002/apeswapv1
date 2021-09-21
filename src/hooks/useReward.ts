import { useCallback } from 'react'

import useApe from './useApe'
import { useWallet } from 'use-wallet'

import { harvest, getMasterChefContract } from '../ape/utils'

const useReward = (pid: number) => {
  const { account } = useWallet()
  const ape = useApe()
  const masterChefContract = getMasterChefContract(ape)

  const handleReward = useCallback(async () => {
    const txHash = await harvest(masterChefContract, pid, account)
    console.log(txHash)
    return txHash
  }, [account, pid, ape])

  return { onReward: handleReward }
}

export default useReward

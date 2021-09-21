import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getMasterChefContract } from '../ape/utils'
import useApe from './useApe'
import useBlock from './useBlock'

const useEarnings = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const {
    account,
    ethereum,
  }: { account: string; ethereum: provider } = useWallet()
  const ape = useApe()
  const masterChefContract = getMasterChefContract(ape)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getEarned(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, masterChefContract, ape])

  useEffect(() => {
    if (account && masterChefContract && ape) {
      fetchBalance()
    }
  }, [account, block, masterChefContract, setBalance, ape])

  return balance
}

export default useEarnings

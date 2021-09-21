import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getStaked, getMasterChefContract } from '../ape/utils'
import useApe from './useApe'
import useBlock from './useBlock'

const useStakedBalance = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { account }: { account: string } = useWallet()
  const ape = useApe()
  const masterChefContract = getMasterChefContract(ape)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getStaked(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, pid, ape])

  useEffect(() => {
    if (account && ape) {
      fetchBalance()
    }
  }, [account, pid, setBalance, block, ape])

  return balance
}

export default useStakedBalance

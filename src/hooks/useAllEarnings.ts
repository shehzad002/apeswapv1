import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getMasterChefContract, getFarms } from '../ape/utils'
import useApe from './useApe'
import useBlock from './useBlock'

const useAllEarnings = () => {
  const [balances, setBalance] = useState([] as Array<BigNumber>)
  const { account }: { account: string; ethereum: provider } = useWallet()
  const ape = useApe()
  const farms = getFarms(ape)
  const masterChefContract = getMasterChefContract(ape)
  const block = useBlock()

  const fetchAllBalances = useCallback(async () => {
    const balances: Array<BigNumber> = await Promise.all(
      farms.map(({ pid }: { pid: number }) =>
        getEarned(masterChefContract, pid, account),
      ),
    )
    setBalance(balances)
  }, [account, masterChefContract, ape])

  useEffect(() => {
    if (account && masterChefContract && ape) {
      fetchAllBalances()
    }
  }, [account, block, masterChefContract, setBalance, ape])

  return balances
}

export default useAllEarnings

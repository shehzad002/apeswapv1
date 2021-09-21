import {useCallback} from 'react'

import useApe from './useApe'
import {useWallet} from 'use-wallet'

import {leave, getXApeStakingContract} from '../ape/utils'

const useLeave = () => {
  const {account} = useWallet()
  const ape = useApe()

  const handle = useCallback(
    async (amount: string) => {
      const txHash = await leave(
        getXApeStakingContract(ape),
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, ape],
  )

  return {onLeave: handle}
}

export default useLeave

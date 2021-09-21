import {useCallback} from 'react'

import useApe from './useApe'
import {useWallet} from 'use-wallet'

import {enter, getXApeStakingContract} from '../ape/utils'

const useEnter = () => {
  const {account} = useWallet()
  const ape = useApe()

  const handle = useCallback(
    async (amount: string) => {
      const txHash = await enter(
        getXApeStakingContract(ape),
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, ape],
  )

  return {onEnter: handle}
}

export default useEnter

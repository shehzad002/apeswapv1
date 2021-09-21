import {useCallback} from 'react'

import useApe from './useApe'
import {useWallet} from 'use-wallet'
import {provider} from 'web3-core'
import {
  approve,
  getApeContract,
  getXApeStakingContract
} from '../ape/utils'

const useApproveStaking = () => {
  const {account}: { account: string; ethereum: provider } = useWallet()
  const ape = useApe()
  const lpContract = getApeContract(ape)
  const contract = getXApeStakingContract(ape)

  const handleApprove = useCallback(async () => {
    try {
      const tx = await approve(lpContract, contract, account)
      return tx
    } catch (e) {
      return false
    }
  }, [account, lpContract, contract])

  return {onApprove: handleApprove}
}

export default useApproveStaking

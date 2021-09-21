import React, { useCallback, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'
import useApe from '../../hooks/useApe'

import { bnToDec } from '../../utils'
import { getMasterChefContract, getEarned } from '../../ape/utils'
import { getFarms } from '../../ape/utils'

import Context from './context'
import { Farm } from './types'

const Farms: React.FC = ({ children }) => {
  const [unharvested, setUnharvested] = useState(0)

  const ape = useApe()
  const { account } = useWallet()

  const farms = getFarms(ape)

  return (
    <Context.Provider
      value={{
        farms,
        unharvested,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Farms

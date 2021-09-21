import React, { createContext, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'

import { Ape } from '../../ape'

export interface ApeContext {
  ape?: typeof Ape
}

export const Context = createContext<ApeContext>({
  ape: undefined,
})

declare global {
  interface Window {
    apesauce: any
  }
}

const ApeProvider: React.FC = ({ children }) => {
  const { ethereum }: { ethereum: any } = useWallet()
  const [ape, setApe] = useState<any>()

  // @ts-ignore
  window.ape = ape
  // @ts-ignore


  useEffect(() => {
    if (ethereum) {
      const chainId = Number(ethereum.chainId)
      const apeLib = new Ape(ethereum, chainId, false, {
        defaultAccount: ethereum.selectedAddress,
        defaultConfirmations: 1,
        autoGasMultiplier: 1.5,
        testing: false,
        defaultGas: '6000000',
        defaultGasPrice: '1000000000000',
        accounts: [],
        ethereumNodeTimeout: 10000,
      })
      setApe(apeLib)
      window.apesauce = apeLib
    }
  }, [ethereum])

  return <Context.Provider value={{ ape }}>{children}</Context.Provider>
}

export default ApeProvider

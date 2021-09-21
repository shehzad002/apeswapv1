import { useContext } from 'react'
import { Context } from '../contexts/ApeProvider'

const useApe = () => {
  const { ape } = useContext(Context)
  return ape
}

export default useApe

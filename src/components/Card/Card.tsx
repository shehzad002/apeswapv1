import React from 'react'
import styled from 'styled-components'

const Card: React.FC = ({ children }) => <StyledCard>{children}</StyledCard>

const StyledCard = styled.div`
  background: ${(props) => props.theme.color.grey[200]};
  border: 2px solid ${(props) => props.theme.color.grey[300]}ff;
  border-radius: 0px;
  box-shadow: inset 0px 0px 0px ${(props) => props.theme.color.grey[100]};
  display: flex;
  flex: 1;
  flex-direction: column;
`

export default Card

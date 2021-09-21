import React from 'react'
import styled from 'styled-components'
import chef from '../../assets/img/chef.png'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'
import Balances from './components/Balances'





const Home: React.FC = () => {
  return (
    <Page>
      <PageHeader
        icon={<img src={chef} height={150} style={{"marginLeft":"-40px"}} />}
        title=""
        subtitle=""
      />
      <div style={{"background":"#ebb958","padding":"10px","textAlign":"center","borderRadius":"5px"}}>
      <h1 style={{"color":"#fff"}}>Ape is Ready For You..!!</h1>
      <h2 style={{"color":"#fff"}}>Stake APE-Swap LP tokens to claim your very own APE!</h2>
      </div>
      <br />
      <Container>
        <Balances />
      </Container>
      <Spacer size="lg" />
      <StyledInfo>
        🏆<b>Pro Tip</b>: APE-BNB LP token pool yields 0.5x more token
        rewards per block.
      </StyledInfo>
      <br />
      <table>
        <tr>
          <td>
             <div style={{"background":"#ebb958","padding":"5px","borderRadius":"5px","color":"#fff","textAlign":"center"}}>
               <h1>Ape Stats</h1>
               <p>Total APE Supply: 197,324,718</p>
               <p>Total APE Burned: 174,716,656</p>
               <p>New CAKE/block: 19</p>
             </div>

          </td>
          <td></td>
          <td></td>
          <td>
          <div style={{"background":"#ebb958","padding":"5px","borderRadius":"5px","color":"#fff","textAlign":"center"}}>
               <h1>Total Value Locked (TVL)</h1>
              <h2>$0</h2>
              <p>All LPS</p>
              <br />
             </div>

          </td>
        </tr>
      </table>
     
      <Spacer size="lg" />
      <div
        style={{
          margin: '0 auto',
        }}
      >
        <Button text="🔪 See the Farm" to="/farms" variant="secondary" />
      </div>
    </Page>
  )
}

const StyledInfo = styled.h3`
  color: ${(props) => props.theme.color.grey[500]};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;

  > b {
    color: ${(props) => props.theme.color.grey[600]};
  }
`

export default Home

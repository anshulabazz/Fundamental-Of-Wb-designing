import Navbar from './Navbar'
import styled from 'styled-components'


const Section = styled.div`
  height:100vh;
  display:flex;
  flex-direction: column;
  justify-content:space-between;
`;
const Container = styled.div`
   height:100vh;
   width: 100%;
   background-color:blue;
   display:flex;
   justify-content:space-between;
`;
const Left = styled.div`
  background-color:yellow;
   flex: 2;
   margin-left:2em;
   display:flex;
   flex-direction: column;
   gap:20px;
   justify-content:center;
  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`
const Right = styled.div`
   flex:3;
  background-color:red;
  position:relative;
 @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`
const Title = styled.h1`
  font-size:50px;
  color:white;
   @media only screen and (max-width: 768px) {
    text-align: center;
  }
`
const WhatWeDo = styled.div`
  display:flex;
  align-items:center;
  gap:10px;
  
`
const SubTitle = styled.h2`
  color: lightgray;
`
const DubTitle = styled.p`
  
`
const Desc = styled.p`
font-size:24px;
color:#da4ea2;
@media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`
const Button = styled.button`
   width:100px;
  border:none;
  background-color:#da4ea2;
  border-radius: 15px;
  padding:10px;
 color:white;
 font-weight:100;
`
const Img = styled.img`
 width:700px;
 height: 600px;
 object-fit:contain;
 margin:auto;
 top:0;
 bottom:0;
 left:0;
 right:0;
 position:absolute;
 animation: animate 2s infinite ease alternate;
@media only screen and (max-width: 768px) {
    height:100px;
    width: 100px;
  }
@keyframes animate{
   to{
     transform: translateY(10px);

 }
}

`

const Heros = () => {

    return (
        <Section>
            <Navbar/>
            <Container>
                <Left>
                    <Title>Think, Make, Solve
                    </Title>
                    <WhatWeDo>
                        <SubTitle>Grow with us</SubTitle>
                        <DubTitle> we deliver good price for you</DubTitle>
                    </WhatWeDo>
                    <Desc>we can make possibe impossible</Desc>
                    <Button>Learn More</Button>
               </Left>
               <Right><Img src='./img/moon.png'/>
               </Right>
            </Container>
            </Section>
        
        )
}
export default Heros
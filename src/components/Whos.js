import styled from 'styled-components'

const Section = styled.div`
  height:100%;
`
const Container = styled.div`
  height: 100%;
  width:100%;
  background-color:green;
  display:flex;
  justify-content:space-between;
  
`
const Left = styled.div`
 background-color:pink;
  flex:3;
  margin-left:2em;
`
const Right = styled.div`
 background-color:black;
 flex:2;
 display:flex;
 flex-direction:column;
 gap:20px;
 align-items:center;
 justify-content:center;
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
 top:0;
 left:0;
 margin:auto;
 bottom:0;
 right:0;
 
`

const Whos = () => {
    return (
        <Section>
            <Container>
                <Left><Img src='./img/moon.png' /></Left>
                <Right>
                    <Title>Think, Make, Solve
                    </Title>
                    <WhatWeDo>
                        <SubTitle>Grow with us</SubTitle>
                        <DubTitle> we deliver good price for you</DubTitle>
                    </WhatWeDo>
                    <Desc>we can make possibe impossible</Desc>
                    <Button>Learn More</Button>

                </Right>

            </Container>

        </Section>
        )
}
export default Whos
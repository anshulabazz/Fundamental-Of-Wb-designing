import styled from 'styled-components'


const Section = styled.div`
height:70%;
`
const Container = styled.div`
 height:100%;
 width:100%;
 background-color:orange;
 display:flex;
 justify-content:center;

`
const Center = styled.div`
 width:60%;
 background-color:green;
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


const About = () => {
    return (
        <Section>
            <Container>
                <Center>
                    <Title>Think, Make, Solve
                    </Title>
                    <WhatWeDo>
                        <SubTitle>Grow with us</SubTitle>
                        <DubTitle> we deliver good price for you</DubTitle>
                    </WhatWeDo>
                    <Desc>we can make possibe impossible</Desc>
                    <Button>Learn More</Button>
                    </Center>

            </Container>
        </Section>
        
        )
}
export default About
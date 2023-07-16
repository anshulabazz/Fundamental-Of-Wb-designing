import { useState } from 'react'
import styled from 'styled-components'


const data = ["Web design", "Product", "Advertisment", "Marketing"]
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
 background-color:brown;
  flex:2;
  margin-left:2em;
 
`
const Right = styled.div`
 background-color:yellow;
 flex:3;
 
`
const List = styled.ul`
list-style:none;
display:flex;
flex-direction:column;
gap:20px;
`
const ListItem = styled.li`
font-size:50px;
font-weight:bold;
cursor:pointer;
 color:white;

`
const Workss = () => {
    const [work,setWork] = useState("Web design")
    
    return (
        <Section>
            <Container>
                <Left>
                    <List>
                        {data.map((item) => (
                            <ListItem key={item} work={item} onclick={() => setWork(item)}>
                                {item}
                            </ListItem>
                        ))}
                        

                    </List>
                </Left>
                <Right>
                    </Right>
            </Container>
        </Section>
       
        )
}
export default Workss
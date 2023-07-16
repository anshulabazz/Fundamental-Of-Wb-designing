import styled from 'styled-components'

const Section = styled.div`
  height:100%;
`
const Container = styled.div`
 height:100%;
 width:100;
 display:flex;
 gap:50px;
 justify-content:space-between;
 background-color:red;
 
`
const Left = styled.div`
 background-color:pink;
 flex:1;
 display:flex;
 justify-content:flex-end;
 align-items:center;

`
const Title = styled.h1`
 font-weight:200;
`
const Form = styled.form`
  width:500px;
  display:flex;
 flex-direction:column;
 gap:20px;
`
const Input = styled.input`
 padding:10px;
  border:none;
border-radius:5px;
`
const Textarea = styled.textarea`
padding:20px;border:none;border-radius:5px;
`
const Button = styled.button`
 width:200px;
 margin:auto;
 border:none;
 border-radius:5px;
 background-color:#da4ea2;
 font-weight: bold;
 padding:20px;
 color:white;
 

`
const Right = styled.div`
 background-color:black;
 flex:1;
`
const Contacts = () => {
    return (
        <Section>
            <Container>
                <Left>
                    <Form>
                        <Title>Contact Us</Title>
                        <Input type="text" name="email" />
                        <Input type="text" />
                        <Textarea placeholder="Enter mail" rows={7} />
                        <Button type="button">Send Us</Button>
                    </Form>


                </Left>
                <Right></Right>

            </Container>
        </Section>

        
        )

}
export default Contacts
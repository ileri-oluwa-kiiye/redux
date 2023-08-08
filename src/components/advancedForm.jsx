import styled from "styled-components"


const Advancedform = ()=>{
    return(
        <div>
            <form autoComplete="off">
                <Label htmlFor="names">Username</Label>
                <Input type="text" name="names" placeholder="Enter your username here" />
            </form>
        </div>
    )
}


const Input = styled.input`
    padding: 10px 16px;
    border-radius: 15px;
    border: none;
    outline: none;
    border: 2px solid #4a5568;
    background-color: #2d3748;
    margin: 10px 0px 30px 0px ;
    min-width: 100%;
    color: #f2f5f7;
    display: block;

    &:focus{
        border-color: #4299e1;
    }
    ::placeholder{
        color: #a0aec0;
    }
`
const Label= styled.label`
    font-size: 1.3rem;
    font-weight: 700;
`

export default Advancedform
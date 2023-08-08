import { useFormik } from 'formik'
import styled from 'styled-components'
import basicSchema from '../../schemas'

const onSubmit = async (values, actions)=>{
    console.log(values)
    console.log(actions)
    await new Promise((resolve)=> {setTimeout(resolve, 1000)})
    actions.resetForm()
}

const Basicform = () =>{
    const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues : {
            email: "",
            name: "",
            password: "",
        },
        // onSubmit: values =>{
        //     alert(JSON.stringify(values, null, 2))
        // },
        validationSchema : basicSchema,
        onSubmit,
    })

    console.log(values, errors)
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <Label htmlFor="email">Email Address</Label>
                <Input 
                    onChange={handleChange}
                    value={values.email}
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="Enter your email Address"
                    onBlur={handleBlur}
                    className={errors.email && touched.email? "input-error" : ''}
                />
                {errors.email && touched.email && <P className='error'>{errors.email}</P>}

                <Label htmlFor="name">Username</Label>
                <Input 
                    onChange={handleChange}
                    value={values.name}
                    type="name" 
                    name="name" 
                    id="name" 
                    placeholder="Enter your Username"
                    onBlur={handleBlur}
                    className={errors.name && touched.name? "input-error" : ''}
                />
                {errors.name && touched.name && <P className='error'>{errors.name}</P>}

                <Label htmlFor="password">Password</Label>
                <Input 
                    onChange={handleChange}
                    value={values.password}
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder="Enter your password here"
                    onBlur={handleBlur}
                    className={errors.password && touched.password? "input-error" : ''}
                />
                {errors.password && touched.password && <P className='error'>{errors.password}</P>}
                <Button disabled={isSubmitting} type='submit'>Submit</Button>
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
    margin: 10px 0px 5px 0px ;
    min-width: 100%;
    color: #f2f5f7;
    display: block;

    &:focus{
        border-color: #4299e1;
    }
    ::placeholder{
        color: #a0aec0;
    }
    &.input-error{
        border-color: #fc8181;
    }
`
const Label= styled.label`
    font-size: 1.3rem;
    margin-top: 30px;
    display: block;
    font-weight: 700;
`
const Button = styled.button`
    margin-top: 40px;
    min-width: 106%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0px;
    border-radius: 15px;
    border: none;
    outline: none;
    color: #1a202c;
    :hover, :disabled{
        opacity: 0.8;
        transition: all 0.3s ease;
    }
`
const P = styled.p`
    color: #fc8181;
    font-size: 0.8rem;
`


export default Basicform
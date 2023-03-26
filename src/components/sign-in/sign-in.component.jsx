import React from "react";
import "./sign-in.style.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import firebase, { signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: "",
        }
    }

    handleSubmit = event =>{
        event.preventDefault(); // prevent the default behaviour of the form
        
        this.setState({email:'',password:''})// clear the form
    }

    handleonChange = event =>{
        const {name,value} = event.target

        this.setState({[name]:value})
    }
     

    render(){
        return(
            <div className="sign-in">
             <h2>I already have a account</h2>
             <span>sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
                <FormInput 
                name="email" 
                type="email" 
                value={this.state.email} 
                handleChange={this.handleonChange}
                required
                label='email'
                />

                <FormInput
                name="password" 
                type="password" 
                value={this.state.password} 
                handleChange={this.handleonChange}
                required
                label='password'
                />
            

            <CustomButton type="submit">
              SIGN IN
            </CustomButton>
            <CustomButton onClick={signInWithGoogle}>
                {' '}
              SIGN IN WITH GOOGLE{' '}
            </CustomButton>
            </form> 
            </div>
        )
    }
}
export default SignIn; 

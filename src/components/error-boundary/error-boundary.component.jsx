import React from "react";
import {ErrorImageContainer,ErrorImageText,ErrorImageOverlay} from './error-boundary.style';


class ErrorBoundary extends React.Component{
    constructor(){
        super();

        this.state ={
            hasErrord:false
        }
    }

    static getDerivedStateFromError(error){
        return {hasErrord:true}
    }

    componentDidCatch(error,info){
        console.log(error)
    }

    render(){
        if(this.state.hasErrord){
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl='https://i.imgur.com/lKJiT77.png'/>
                    <ErrorImageText>Your Dog ate this page</ErrorImageText>
                </ErrorImageOverlay>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
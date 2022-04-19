import { makeStyles } from '@mui/styles'
import React from 'react'
import { Children } from 'react'
import User from './UserInterface';
const useStyles=makeStyles({
    display:{
        marginTop:40,
    }
})
interface AppProps {
    // any props that come into the component
    children:React.ReactElement<User>[];
}

class Layout extends React.Component<AppProps,{}>{
   
    render(){
        return this.props.children.map(
            (child:React.ReactElement<User>)=>(
                <div>{child.props}</div>
            )
        )
  }  }
  export default Layout
        
        



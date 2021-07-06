import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

export const Hooks = () => {
  return (
    <div className='main-content'>
            <h2>What is a Hook?</h2>
            <p>Hooks are functions that let you “hook into” React state and lifecycle features from function
            components. </p>
            <p>Hooks don’t work inside classes — they let you use React without classes.</p>
            <p>(We don’t recommend rewriting your existing components overnight but you can start using
            Hooks in the new ones if you’d like.)</p>

            <p>React provides a few built-in Hooks like useState.</p>
            <p>You can also create your own Hooks to reuse stateful behavior between different components. </p>
        </div>
  );
}; 

export const Effect = () => {
  return (
    <div className='main-content'>
      <h2>Effect</h2>
      <p>The Effect Hook lets you perform side effects in function components</p>
      <h2>What does useEffect do?</h2>
      <p>By using this Hook, you tell React that your component needs to do something after render.
      React will remember the function you passed (we’ll refer to it as our “effect”),
      and call it later after performing the DOM updates. In this effect, we set the document title,
           but we could also perform data fetching or call some other imperative API.</p>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'block',
    
    flexWrap: 'nowrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(95),
      height: theme.spacing(60),
    },
  },
}));
export const State = () => {
  const classes = useStyles();
  const initial=0;
  const [count,setCount]=useState(initial);
  return (
    <div className='main-content'>
      <h1>State</h1>
      <h2>What does calling useState do?</h2>
      <p> It declares a “state variable”.
      Our variable is called count but we could call it anything else, like banana.
      This is a way to “preserve” some values between the function calls — useState is a
      new way to use the exact same capabilities that this.state provides in a class.
      Normally, variables “disappear” when the function exits but state variables are
           preserved by React.</p>
    <div className={classes.root}>
      
      <Paper elevation={5} style={{padding:'25px'}}>
        <h2>Example:</h2>
        
    Count:{count}<br/>
           <Button variant="contained" color="primary" onClick={()=>setCount(initial)}>Reset</Button>
           <Button variant="contained" color="primary" onClick={()=>setCount(p=>p+1)}>Increase</Button> 
           {count>0?<Button variant="contained" color="primary" onClick={()=>setCount(p=>p-1)}>Decrease</Button>:""}
        </Paper>
        <Paper elevation={5} style={{padding:'25px'}}>
          <h2>Source Code:</h2>
          <pre>
            <code>
            import React&#123;useState&#125; from react<br/>
 
const Counter = () =&gt; &#123; <br/>
    const initial=0;<br/>
    const [count,setCount]=useState(initial);<br/>
    
    return (<br/>
        &lt;div&gt;<br/>
             
           Count:{count}<br/>
           &lt;button onClick={()=>setCount(initial)}&gt;Reset&lt;/button&gt;<br/>
           &lt;button onClick={()=>setCount(p=>p+1)}&gt;Increase&lt;/button&gt; <br/>
           &#123;count&gt;0?&lt;button onClick={()=>setCount(p=>p-1)}&gt;Decrease&lt;/button&gt;:""&#125;<br/>
           
        &lt;/div&gt;<br/>
    )<br/>
&#125;<br/>
 
export default Counter
 
</code>
          </pre>
        </Paper>
    </div>
  
          
    </div>
  );
};

export const Context = () => {
  return (
    <div className='main-content'>
      <h1>Context</h1>
      <p>Context provides a way to pass data through the component tree without having to pass props
      down manually at every level.
      In a typical React application, data is passed top-down (parent to child) via props,
      but such usage can be complicated for certain types of props that are required by many components
      within an application. Context provides a way to share values like these between components without
      having to explicitly pass a prop through every level of the tree.
</p>
    </div>
  );
};

export const Reducer = () => {
  return (
    <div className='main-content'>
      <h1>Reducer</h1>
      <p>The useReducer is a hook that is used for state management.
      It is an alternative to useState.
      useState is built using useReducer.
      It is a lot similar to reducer function in JavaScript.

</p>
    </div>
  );
};
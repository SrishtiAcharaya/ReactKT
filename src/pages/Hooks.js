import React,{useState,useEffect,useContext,useReducer} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import axios from 'axios';
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

const useStyles2 = makeStyles((theme) => ({
  root: {
    display: 'block',
    
    flexWrap: 'nowrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(130),
      height: theme.spacing(100),
    },
  },
}));

export const Effect = () => {
  const classes = useStyles2();
  const [posts,setPosts]=useState({});
    const [id,setId]=useState(1);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts'+`/${id}`)
        .then(res=>{
            console.log(res)
           setPosts(res.data)
        }).catch(err=>{
            console.log(err)
        })
        
    },[id])
  return (
    <div className='main-content'>
      <h2>Effect</h2>
      <p>The Effect Hook lets you perform side effects in function components</p>
      <h2>What does useEffect do?</h2>
      <p>By using this Hook, you tell React that your component needs to do something after render.
      React will remember the function you passed (we’ll refer to it as our “effect”),
      and call it later after performing the DOM updates. In this effect, we set the document title,
           but we could also perform data fetching or call some other imperative API.</p>
           <div className={classes.root}>
      
      <Paper elevation={5} style={{padding:'25px'}}>
        <h2>Example:</h2>
        <div>
            <input type="text" value={id} onChange={(e)=>setId(e.target.value)}/>
            
           {id!=0?<div><h4>Title:</h4>{posts.title}</div>:""} 
           {id!=0?<div><h4>Body:</h4>{posts.body}</div>:""}
        </div>
        </Paper>
        <Paper elevation={5} style={{padding:'25px'}}>
        <h2>Source Code:</h2>
        <pre>
          <code>

          

import React,&#123;useState,useEffect&#125; from 'react'<br/>
import axios from 'axios';<br/>
const DataFetching = () =&#62; &#123;<br/>
    const [posts,setPosts]=useState(&#123;&#125;);<br/>
    const [id,setId]=useState(1);<br/>
    useEffect(() =&#62; &#123;<br/>
        axios.get('https://jsonplaceholder.typicode.com/posts'+`/$&#123;id&#125;`)<br/>
        .then(res=&#62;&#123;<br/>
            console.log(res)<br/>
           setPosts(res.data)<br/>
        &#125;).catch(err=&#62;&#123;<br/>
            console.log(err)<br/>
        &#125;)<br/>
        
    &#125;,[id])<br/>
    return (<br/>
        &#60;div&#62;<br/>
            &#60;input type="text" value=&#123;id&#125; onChange=&#123;(e)=&#62;setId(e.target.value)&#125;/&#62;<br/>
            
            &#123;id!=0?&#60;div&#62;&#60;h4&#62;Title:&#60;/h4&#62;&#123;posts.title&#125;&#60;/div&#62;:""&#125; <br/>
           &#123;id!=0?&#60;div&#62;&#60;h4&#62;Body:&#60;/h4&#62;&#123;posts.body&#125;&#60;/div&#62;:""&#125;<br/>
           &#60;/div&#62;<br/>
    )<br/>
&#125;<br/>

export default DataFetching<br/>

 
 </code>
        </pre>
        </Paper>
        </div>
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

const useStyles3 = makeStyles((theme) => ({
  root: {
    display: 'block',
    
    flexWrap: 'nowrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(95),
      height: theme.spacing(165),
    },
  },
}));
export const EmpIDCont=React.createContext();
export const EMpNameCont=React.createContext();
export const Context = () => {
  const classes = useStyles();
  const classes2 = useStyles3();
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
<div className={classes.root}>
      
      <Paper elevation={5} style={{padding:'25px'}}>
        <h2>Example:</h2>
        <p style={{ fontSize: 20,marginBottom:10 }}>(Here We are passing value from App.js to ComponentX which will result
         into passing value to all its
         subsequent children using useContext. We are displaying
          the value in ComponentY which is the child component of ComponentX)</p>
        <EmpIDCont.Provider value={'873432'}>
      <EMpNameCont.Provider value={'Pritam Chatterjee'}>
      <ComponentX/>
      </EMpNameCont.Provider>
    </EmpIDCont.Provider>
        </Paper>
        </div>
        <div className={classes2.root}>
        <Paper elevation={5} style={{padding:'25px'}}>
          <h2>Source Code:</h2>
          <pre>
            <code>
           
           <h3>App.js</h3>      
import ComponentX from './components/ComponentX';<br/>
export const EmpIDCont=React.createContext();<br/>
export const EMpNameCont=React.createContext();<br/>
function App() &#123;<br/>
  return (<br/>
    &lt;&gt;<br/>
     &lt;EmpIDCont.Provider value=&#123;'873432'&#125;&gt;<br/>
      &lt;EMpNameCont.Provider value=&#123;'Pritam Chatterjee'&#125;&gt;<br/>
      &lt;ComponentX/&gt;<br/>
      &lt;/EMpNameCont.Provider&gt;<br/>
    &lt;/EmpIDCont.Provider&gt;<br/>
     &lt;/&gt;<br/>
  );<br/>
&#125;<br/>
export default App;<br/>
<h3>ComponentX.js</h3>

import ComponentY from './ComponentY'<br/>
const ComponentX = () =&gt; &#123;<br/>
    return (<br/>
        &lt;div&gt;<br/>
            &lt;ComponentY/&gt;<br/>
        &lt;/div&gt;<br/>
    )<br/>
&#125;<br/>
export default ComponentX<br/>
<h3>ComponentY.js</h3>
import &#123;useContext&#125; from 'react'<br/>
import &#123; EmpIDCont,EMpNameCont &#125; from '../App'<br/>
const ComponentY = () =&gt; &#123;<br/>
    const ID= useContext(EmpIDCont);<br/>
    const Name=useContext(EMpNameCont);<br/>
    return (<br/>
        &lt;div&gt;<br/>
        This is Component Y<br/>
            ID:&#123;ID&#125;&lt;br/&gt;<br/>
            Name:&#123;Name&#125;<br/>
        &lt;/div&gt;<br/>
    )<br/>
&#125;<br/>
export default ComponentY<br/>
           
            </code>
            </pre>
            </Paper>
        </div>
    </div>
  );
          }
export const ComponentX = () => {
  return (
      <div>
          <ComponentY/>
      </div>
  )
}
export const ComponentY = () => {
  const ID= useContext(EmpIDCont);
  const Name=useContext(EMpNameCont);
  return (
      <div>
        This is Component Y<br/>
          ID:{ID}<br/>
          Name:{Name}
      </div>
  )
}

const useStyles4 = makeStyles((theme) => ({
  root: {
    display: 'block',
    
    flexWrap: 'nowrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(95),
      height: theme.spacing(130),
    },
  },
}));
const initialState={
  firstCounter:0   
}
const reducer=(state,action)=>{
switch(action.type){
   case 'increment':
       return {firstCounter: state.firstCounter+1};
   case 'decrement':
       return {firstCounter: state.firstCounter-1};
   case 'reset':
       return initialState;
   default:
           return state;
}
}
export const Reducer = () => {
  const classes = useStyles();
  const classes2 = useStyles4();
  const [count,setCount]=useReducer(reducer,initialState);
  return (
    <div className='main-content'>
      <h1>Reducer</h1>
      <p>The useReducer is a hook that is used for state management.
      It is an alternative to useState.
      useState is built using useReducer.
      It is a lot similar to reducer function in JavaScript.

</p>
<div className={classes.root}>
<Paper elevation={5} style={{padding:'25px'}}>
        <h2>Example:</h2>
        
            <h3>Counter using Reducer</h3>
            Count:{count.firstCounter}<br/>
            <Button variant="contained" color="primary"  onClick={()=>setCount({type:'reset'})}>Reset</Button>
            <Button variant="contained" color="primary" onClick={()=>setCount({type:'increment'})}>Increment</Button>
            {count.firstCounter!=0?<Button variant="contained" color="primary" onClick={()=>setCount({type:'decrement'})}>Decrement</Button>:""}
        
        </Paper>
        </div>
        <div className={classes2.root}>
        <Paper elevation={5} style={{padding:'25px'}}>
          <h2>Source Code:</h2>
          
          import React,&#123;useReducer&#125; from 'react'<br/>
const initialState=&#123;<br/>
    firstCounter:0 <br/>  
&#125;<br/>
const reducer=(state,action)=&gt;&#123;<br/>
 switch(action.type)&#123;<br/>
     case 'increment':<br/>
         return &#123;firstCounter: state.firstCounter+1&#125;;<br/>
     case 'decrement':<br/>
         return &#123;firstCounter: state.firstCounter-1&#125;;<br/>
     case 'reset':<br/>
         return initialState;<br/>
     default:<br/>
             return state;<br/>
 &#125;<br/>
&#125;<br/>
const CounterobjReducer = () =&gt; &#123;<br/>
const [count,setCount]=useReducer(reducer,initialState);<br/>
    return (<br/>
        &lt;div&gt;<br/>
            &lt;h3&gt;Counter using Reducer&lt;/h3&gt;<br/>
            Count:&#123;count.firstCounter&#125;&lt;br/&gt;<br/>
            &lt;button onClick=&#123;()=&gt;setCount(&#123;type:'reset'&#125;)&#125;&gt;Reset&lt;/button&gt;<br/>
            &lt;button onClick=&#123;()=&gt;setCount(&#123;type:'increment'&#125;)&#125;&gt;Increment&lt;/button&gt;<br/>
            &#123;count.firstCounter!=0?&lt;button onClick=&#123;()=&gt;setCount
            (&#123;type:'decrement'&#125;)&#125;&gt;Decrement&lt;/button&gt;:""&#125;<br/>
        &lt;/div&gt;<br/>
    )<br/>
&#125;<br/>

export default CounterobjReducer<br/>

          
        </Paper>
        </div>
    </div>
  );
};


function CustomCounter(initialCount=0) {

  const [count,setCount]=useState(initialCount);
  const increment=()=>{
      setCount(p=>p+1)
  }
  const decrement=()=>{
      setCount(p=>p-1)
  }
  const reset=()=>{
      setCount(initialCount)
  }
      return [count,increment,decrement,reset];
  }
  
  const useStyles5 = makeStyles((theme) => ({
    root: {
      display: 'block',
      
      flexWrap: 'nowrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(130),
        height: theme.spacing(140),
      },
    },
  }));
  
export const CustomHooks = () => {
  const classes = useStyles();
  const classes2 = useStyles5();
  const initialState=0
const [count,increment,decrement,reset]= CustomCounter(initialState)
  return (
    <div className='main-content'>
      <h1>Custom Hooks</h1>
      <h2>What is Custom Hooks?</h2>
      <p> It declares a “state variable”.
      Our variable is called count but we could call it anything else, like banana.
      This is a way to “preserve” some values between the function calls — useState is a
      new way to use the exact same capabilities that this.state provides in a class.
      Normally, variables “disappear” when the function exits but state variables are
           preserved by React.</p>
    <div className={classes.root}>
      
      <Paper elevation={5} style={{padding:'25px'}}>
        <h2>Example:</h2>
        
        <h3>Counter Using Custom Hooks</h3>
           Count:{count}<br/>
           <Button variant="contained" color="primary" onClick={reset}>Reset</Button>
           <Button variant="contained" color="primary" onClick={increment}>Increase</Button> 
           {count>0?<Button variant="contained" color="primary" onClick={decrement}>Decrease</Button>:""} 
        </Paper>
        </div>
        <div className={classes2.root}>
        <Paper elevation={5} style={{padding:'25px'}}>
          <h2>Source Code:</h2>
          <pre>
            <code>
    
    <h3>Counter.js</h3>
    import React from 'react'<br/>
import CustomCounter from './CustomCounter'<br/>

const Counter = () =&gt; &#123;<br/>
    const initialState=0<br/>
const [count,increment,decrement,reset]= CustomCounter(initialState)<br/>
    return (<br/>
        &lt;div&gt;<br/>
            &lt;h3&gt;Counter Using Custom Hooks&lt;/h3&gt;<br/>
           Count:&#123;count&#125;&lt;br/&gt;<br/>
           &lt;button onClick=&#123;reset&#125;&gt;Reset&lt;/button&gt;<br/>
           &lt;button onClick=&#123;increment&#125;&gt;Increase&lt;/button&gt; <br/>
           &#123;count&gt;0?&lt;button onClick=&#123;decrement&#125;&gt;Decrease&lt;/button&gt;:""&#125; <br/>
        &lt;/div&gt;<br/>
    )<br/>
&#125;<br/>
export default Counter<br/>
    <h3>CustomCounter.js</h3>
import &#123; useState &#125; from "react";<br/>
function CustomCounter(initialCount=0) &#123;<br/>
const [count,setCount]=useState(initialCount);<br/>
const increment=()=&gt;&#123;<br/>
    setCount(p=&gt;p+1)<br/>
&#125;<br/>
const decrement=()=&gt;&#123;<br/>
    setCount(p=&gt;p-1)<br/>
&#125;<br/>
const reset=()=&gt;&#123;<br/>
    setCount(initialCount)<br/>
&#125;<br/>
    return [count,increment,decrement,reset];<br/>
&#125;<br/>
export default CustomCounter<br/>
    
 
</code>
          </pre>
        </Paper>
    </div>
  
          
    </div>
  );
};
import React from 'react';

const Hooks = () => {
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

export default Hooks; 
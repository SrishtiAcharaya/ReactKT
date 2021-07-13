import Paper from '@material-ui/core/Paper';

export const MaterialUI = () => {
    return (
        <div className="main-content">
            <h3>Material UI</h3>
            <div className="sub-content">
                <p>
                    Material UI is the most powerful and efficient tool to build an Application by adding
                    Designs and Animations.
                    If you're just looking to create a good looking app,
                    Material UI can provide you with solid pre-styled components that will get the job done.
            </p>
                <h3>Components of Material UI</h3>
                <h4>1. Layout:</h4><br />
                <h5>Container</h5>
                <p>
                    The container centers your content, horizontally. It's the most basic layout element.<br />
                    <div className="code-content">&#60;Container maxwidth="sm" align="center" &#62;</div>
                </p><br />
                <h5>Grid</h5>
                <p>
                    The Material Design responsive layout grid adapts to screen size and orientation,
                  ensuring consistency across layouts.<br />
                    <div className="code-content">&#60;grid Container spacing={2} justify="center" &#62;</div>
                </p><br />
                <h4>2. Inputs</h4><br />
                <h5>Button</h5>
                <p>
                    Buttons allow users to take actions, and make choices, with a single tap.
                  <div className="code-content">&#60;Button variant="contained" color="primary" spacing={5} #&62;</div>
                </p><br />
                <h5>TextField</h5>
                <p>
                    The Text Field wrapper component is a complete form control including a label,
                    input and help text. It supports standard, outlined and filled styling
               </p><br />
                <h4>3. Surfaces</h4><br />
                <h5>Card</h5>
                <p>
                    Cards are surfaces that display content and actions on a single topic.
                  <div className="code-content">&#60;Card className=&#123;classes.root&#125; variant="outlined"&#62;
                    &#60;/Card&#62;
                  </div>
                </p><br />
                <h5>AppBar</h5>
                <p>
                    The App Bar displays information and actions relating to the current screen.
                   <div className="code-content">&#60;AppBar position="static"&#62; &#60;/AppBar&#62;</div>
                </p><br />
                <h4>4. Data display</h4>
                <h5>Table</h5>
                <p>
                    Tables display sets of data. They can be fully customized.
                   <div className="code-content">&#60;npm install material-table&#62;</div>
                    <Paper elevation={10} style={{ padding: '25px', width: '80%', margin: '30px' }}>
                        function createData(name, calories, fat, carbs, protein) &#123;<br/>
                        return &#123;<br/>
                        name, calories, fat, carbs, protein &#125;; &#125;<br/>
                        const rows = [<br/>
                        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),<br/>
                        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),<br/>
                        ];<br/>
                        </Paper>
                </p><br />
            </div>
        </div>
    );
}
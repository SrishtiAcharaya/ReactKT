import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


export const Router = () => {
    return (
        <div className="main-content">
            <h2>Router</h2>
            <p>
                1. Routing is a process in which a user is directed to different pages
                based on their action or request. ReactJS Router is mainly used for developing
                Single Page Web Applications.
            </p>
            <p>
                2. React Router is used to define multiple routes in the application.
                When a user types a specific URL into the browser, and if this URL path matches any 'route'
                inside the router file, the user will be redirected to that route.
            </p>
            <p>
                3. React router need to be installed before using it.
            </p>
            <p>
                Command: <strong>npm install react-router-dom</strong>
            </p>
        </div>
    );
}

export const Components = () => {
    return (
        <div className="main-content">
            <h3>Components</h3>
            <div className="sub-content">
                <p>
                    There are three primary categories of components in React Router:</p>
                <p>  - 1) routers, like BrowserRouter and HashRouter </p>
                <p>  - 2) route matchers, like Route and Switch </p>
                <p>   - 3) and navigation, like Link, NavLink, and Redirect </p>
                <p>All the components that you use in a web application should be imported from react-router-dom.</p>
                <h3>BrowserRouter</h3>
                <p>
                    1.  It is used for handling the dynamic URL.
            </p>
                <h3>HashRouter</h3>
                <p> 2. It is used for handling the static request</p>
                <h3>BrowserRouter Vs HashRouter</h3>
                <p>
                    1. A BrowserRouter uses regular URL paths. These are generally the best-looking URLs,
                    but they require your server to be configured correctly.
            </p>
                <p>
                    2. Specifically, your web server needs to serve the same page at all URLs
                    that are managed client-side by React Router. Create React App supports this out of the box in
                    development and comes with instructions on how to configure your production server as well.
            </p>
                <p>
                    3. A HashRouter stores the current location in the hash portion of the URL, so the URL looks something
                    like (http://example.com/#/your/page). Since the hash is never sent to the server,
                    this means that no special server configuration is needed.
                    It uses URL hash it puts no limitations on supported browsers or web server.
                    Server-side routing is independent from client-side routing.
            </p>

                <Paper elevation={10} style={{ padding: '25px', width: '70%', margin: '30px' }}>
                    <h3>Example:</h3>
                    <pre>
                        <code>
                            import &#123;BrowserRouter as Router&#125; from 'react-router-dom'<br />
                        export default function routes() &#123;<br />
                        return (<br />
                           &#60;Router&#62;<br />
                           &#123;/* routes go here, as children */&#125;<br />
                           &#60;/Router&#62;<br />
                        );<br />
                        </code>
                    </pre>
                </Paper>
            </div>
        </div>
    );
}
export const RouteMatchers = () => {
    return (
        <div className="main-content">
            <h3>Route Matchers</h3>
            <div className="sub-content">
                <p>
                    <strong>Route:</strong> It is used to define and render component based on the specified path.
                    It will accept components and render to define what should be rendered.
               </p>
                <p>
                    We declare routes within the Router component as children.
                    We can declare as many routes as we like, and we need to provide at least two props to each route,
                    path and component (or render):
                </p>
                <Paper elevation={10} style={{ padding: '25px', width: '80%', margin: '30px' }}>
                    <h3>Example:</h3>
                    <pre>
                        <code>
                            import &#123;BrowserRouter as Router,Route&#125; from 'react-router-dom'<br />
                        export default function routes() &#123;<br />
                        &nbsp; return (<br />
                          &nbsp; &nbsp;&#60;Router&#62;<br />
                          &nbsp;&nbsp;&nbsp; &#60;Route path="/about" component=&#123;About&#125; /&#62;<br />
                          &nbsp; &nbsp;&#60;/Router&#62;<br />
                          &nbsp;&nbsp;);<br />
                        function About() &#123;<br />
                          return &#60;about/&#62;<br />
                        &#125;
                    </code>
                    </pre>
                </Paper>
                <p>
                    <strong>Switch:</strong> This component is used to render components only when the path will be matched.
                    Otherwise, it returns to the not found component.
                </p>
                <p>
                    Let's say we have a route for the home page and about page.
                    Even though we specify two different paths, '/' and '/about', when I visit the about page,
                    we'll see both the home and the about components. We can fix this with the exact prop, on the
                    home route to make sure that our router matches exactly the path '/' instead of '/about’.
                </p>
                <Paper elevation={10} style={{ padding: '25px', width: '80%', margin: '30px' }}>
                    <h3>Example:</h3>
                    <pre>
                        <code>
                            import &#123;BrowserRouter as Router,Route,Switch&#125; from 'react-router-dom'<br />
                        export default function routes() &#123;<br />
                        &nbsp; return (<br />
                          &nbsp; &nbsp;&#60;Router&#62;<br />
                          &nbsp;&nbsp; &nbsp; &#60;Switch&#62;<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#60;Route path="/" component=&#123;Home&#125; /&#62;<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#60;Route path="/about" component=&#123;About&#125; /&#62;<br />
                          &nbsp;&nbsp; &nbsp; &#60;/Switch&#62;<br />
                          &nbsp; &nbsp;&#60;/Router&#62;<br />
                          &nbsp;&nbsp;);<br />
                        function About() &#123;<br />
                          return &#60;about/&#62;<br />
                        &#125;<br />
                        function Home() &#123;<br />
                          return &#60;home/&#62;<br />
                        &#125;<br />
                        </code>
                    </pre>
                </Paper>
            </div>
        </div>
    );
}

export const Navigation = () => {
    return (
        <div className="main-content">
            <h3>Navigation</h3>
            <div className="sub-content">
                <p>
                    <strong>Link:</strong>This component is used to create links which allow to navigate on different
                     URLs and render its content without reloading the webpage.
                </p>
                <p>
                    To create some links so we can move around our application more easily instead of having to
                    change the URL manually in the browser. <br />The Link component is used to trigger new routes.
                    You import it from react-router-dom, and you can add the Link components to point at different
                    routes, with the to attribute:
                </p>
                <Paper elevation={10} style={{ padding: '25px', width: '80%', margin: '30px' }}>
                    <h3>Example:</h3>
                    <pre>
                        <code>
                            &#60;ul&#62;<br />
                      &#60;Link to='/book'&#62; <br />
                      &nbsp;&#60;li&#60;Book&#62;/li&#62; <br />
                      &#60;/Link&#62; <br />
                      &#60;/ul&#62; <br />
                        </code>
                    </pre>
                </Paper>
                <p>
                    <strong>NavLink:</strong>React Router DOM gives us a NavLink component which is helpful in
                    the event that we want to apply some special styles. For example, if our users are on the
                    homepage, we could tell them as much by using the activeStyle properties to make our link
                    bold and red when they're on the homepage.
                </p>
                <Paper elevation={10} style={{ padding: '25px', width: '80%', margin: '30px' }}>
                    <h3>Example:</h3>
                    <pre>
                        <code>
                            &#60;ul&#62;<br />
                      &#60;NavLink to='/about' activeStyle=&#123;<br />
                          &nbsp;&nbsp;&#123;color:'red'&#125;&#125;&#62;<br />
                          &nbsp;&#60;li&#60;About&#62;/li&#62; <br />
                      &#60;/NavLink&#62; <br />
                      &#60;/ul&#62; <br />
                        </code>
                    </pre>
                </Paper>
                <h3>Link Vs NavLink</h3>
                <p>
                    The Link component allows navigating the different routes on the websites,
                    whereas NavLink component is used to add styles to the active routes.
                </p>
                <h3>Redirect</h3>
                <p>
                    Whenever we're using something like a private route and we have a condition in which the user
                    is not authenticated, we want to redirect them back to the login page.
                </p>
                <Paper elevation={10} style={{ padding: '25px', width: '80%', margin: '30px' }}>
                    <h3>Example:</h3>
                    <pre>
                        <code>
                            &#60;Route exact path="/"&#62;&#123;loggedIn ?<br/>
                            &#60;Redirect to="/dashboard" /&#62; :  &#60;PublicHomePage / &#62;&#125;<br/>
                            &#60;/Route &#62;<br/>
                            &#60;Redirect to="/somewhere/else" / &#62;<br/>
                            &#60;Redirect<br/>
                                to=&#123;&#123;<br/>
                                    pathname: "/login",<br/>
                                    search: "?utm=your+face",<br/>
                                    state: &#123; referrer: currentLocation &#125;<br/>
                                &#125;&#125;<br/>
                            / &#62;<br/>
                        </code>
                    </pre>
                </Paper>
                <h3>Error Handling</h3>
                <Paper elevation={10} style={{ padding: '25px', width: '80%', margin: '30px' }}>
                    <h3>Example:</h3>
                    <pre>
                        <code>
                        import &#123;BrowserRouter as Router,Route,Switch&#125; from 'react-router-dom'<br />
                        export default function routes() &#123;<br />
                        &nbsp; return (<br />
                          &nbsp; &nbsp;&#60;Router&#62;<br />
                          &nbsp;&nbsp; &nbsp; &#60;Switch&#62;<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#60;Route path="/about" component=&#123;About&#125; /&#62;<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#60;Route path="*" component=&#123;NotFound&#125; /&#62;<br />
                          &nbsp;&nbsp; &nbsp; &#60;/Switch&#62;<br />
                          &nbsp; &nbsp;&#60;/Router&#62;<br />
                          &nbsp;&nbsp;);<br />
                        function NotFound() &#123;<br />
                          return &#60;&#62;Page doesn't exist&#60;/&#62;<br />
                        &#125;<br />
                        </code>
                    </pre>
                </Paper>
            </div>
        </div>
    );
}

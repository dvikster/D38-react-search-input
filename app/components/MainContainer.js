import React, {Component} from 'react';
// import {Link} from 'react-router';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';

import { Nav, NavItem  } from 'react-bootstrap';



export default class MainContainer extends Component{
        render(){
        return(
            <Grid>
                <Row className="show-grid">
                    <Col xs={2} md={2}>
                        <Nav bsStyle="pills" stacked>
                            <NavItem eventKey={1} href="/">Home</NavItem>
                            <NavItem eventKey={2} href="/mvc">MVC</NavItem>
                            <NavItem eventKey={3} href="/articles">Articles</NavItem>
                            <NavItem eventKey={4} href="/films">Films</NavItem>
                            <NavItem eventKey={5} href="/book-store">BookStore</NavItem>
                        </Nav>
                    </Col>
                    <Col xs={10} md={10}>
                        {this.props.children}
                    </Col>
                </Row>

                {/*<div className="wrapper">*/}
                    {/*<aside>*/}
                        {/*/!*<ul>*!/*/}
                            {/*/!*<li><Link to="/">Home</Link></li>*!/*/}
                            {/*/!*<li><Link to="/mvc">MVC</Link></li>*!/*/}
                            {/*/!*<li><Link to="/articles">Articles</Link></li>*!/*/}
                            {/*/!*<li><Link to="/films">Films</Link></li>*!/*/}
                        {/*/!*</ul>*!/*/}
                        {/*<Nav bsStyle="pills" stacked activeKey={1} >*/}
                            {/*<NavItem eventKey={1} href="/">Home</NavItem>*/}
                            {/*<NavItem eventKey={2} href="/mvc">MVC</NavItem>*/}
                            {/*<NavItem eventKey={3} href="/articles">Articles</NavItem>*/}
                            {/*<NavItem eventKey={3} href="/films">Films</NavItem>*/}
                        {/*</Nav>*/}

                    {/*</aside>*/}
                    {/*<div className="main-container">*/}
                        {/*{this.props.children}*/}
                    {/*</div>*/}
                {/*</div>*/}
            </Grid>
        )
    }
}
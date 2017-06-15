import React, {Component} from 'react';
import {Link} from 'react-router';


export default class MainContainer extends Component{
    render(){
        return(
            <div className="wrapper">
                <aside>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/mvc">MVC</Link></li>
                        <li><Link to="/articles">Articles</Link></li>
                    </ul>
                </aside>
                <div className="main-container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
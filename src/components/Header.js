import React, {Component} from 'react';
import NavRouter from './navRouter/navRouter';


class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="headerTitle">
                    <h1><span>Reign</span> Westry</h1>
                </div>
                
                <NavRouter />
            </header>
        );
    }
}

export default Header;
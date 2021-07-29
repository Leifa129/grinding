import React from 'react';

function Header(props) {
    return (
        <nav className={"navbar navbar-default"}>
            <div className="container-fluid">
                <div className="navbar-header">
                    <a href="" className="navbar-brand">Recipe Book</a>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li><a onClick={props.recipesClicked} href="#"> Recipes </a></li>
                        <li><a onClick={props.shoppingListClicked} href="#"> Shopping list </a></li>
                    </ul>

                    <ul className="nav navbar-nav navbar-right">
                        <li className="dropdown">
                            <ul className="dropdown-menu">
                                <li><a href=""> Save Data </a></li>
                                <li><a href=""> Fetch Data </a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
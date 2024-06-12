import React from "react"

class Header extends React.Component {
    render() {
        return(
            <header>
                <div id="headerUp">
                    <div id="search"></div>
                    <h1>Avion</h1>
                    <div id="options">
                        <div id="cart"></div>
                        <div id="profile"></div>
                    </div>
                </div>
                <div id="headerDown">
                    <nav>
                        <ul>
                            <li>Plant pots</li>
                            <li>Ceramics</li>
                            <li>Tables</li>
                            <li>Chairs</li>
                            <li>Crockery</li>
                            <li>Tableware</li>
                            <li>Cutlery</li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Header

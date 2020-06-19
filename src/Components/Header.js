import React from 'react'
import {InstagramOutlined} from '@ant-design/icons'
import {BehanceOutlined} from '@ant-design/icons'


class Header extends React.Component {

    render() {
        return (
            <div className="header" >
                <img className="logo" src={this.props.logo} />
                <nav className="navbar" >
                    <a className="navcomp">Work</a>
                    <a className="navcomp">About</a>
                    <a className="navcomp">Contact</a>
                    <a className="navcomp" href="https://www.behance.net/rebekahdejong">
                        <BehanceOutlined />
                    </a>
                    <a className="navcomp" href="https://www.instagram.com/de.jonge.maker/?hl=en">
                        <InstagramOutlined />
                    </a>
                </nav>
            </div>
        )
    }
}

export default Header
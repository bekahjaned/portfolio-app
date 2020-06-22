import React from 'react'
import { Link } from 'react-router-dom'

import {InstagramOutlined} from '@ant-design/icons'
import {BehanceOutlined} from '@ant-design/icons'

class Header extends React.Component {

    render() {
        return (
            <div>
                <nav>
                    <img className="logo" src={this.props.logo} alt="logo" />
                    <ul className ="nav-links">
                        <Link className="link" to="/">
                            <li>Work</li>
                        </Link>
                        <Link className="link" to="/about">
                            <li>About</li>
                        </Link>
                        <Link className="link" to="/contact">
                            <li>Contact</li>
                        </Link>
                            <BehanceOutlined className="link" href="https://www.behance.net/rebekahdejong" />
                            <InstagramOutlined className="link" href="https://www.instagram.com/de.jonge.maker/?hl=en" />
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header
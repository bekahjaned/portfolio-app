import React from 'react'
import ReactDOM from 'react-dom'

import Header from './Components/Header'
import Banner from './Components/Banner'
import ArtCard from './Components/ArtCard'

import Logo from './images/dejongemaker-logo.png'
import ImageBanner from './images/websitebanner.png'

import Sushi from './images/fastfood.jpg'
import Bear from './images/bear-in-lake.jpg'
import Cake from './images/birthday-cake.jpg'
import Compass from './images/compass.jpg'
import Cube from './images/fidget-cube.gif'
import Cat from './images/gato.jpg'
import IceCream from './images/icecream.jpg'
import Keyboard from './images/keyboard.jpg'
import Knife from './images/knife.jpg'
import Mango from './images/mango.jpg'
import Map from './images/map.jpg'
import Microphone from './images/microphone.jpg'

 
class App extends React.Component {
    constructor(props){
        super(props);

        this.state = { designs: [
                { name: "sushi", image: Sushi },
                { name: "bear", image: Bear },
                { name: "cake", image: Cake },
                { name: "compas", image: Compass },
                { name: "cube", image: Cube },
                { name: "cat", image: Cat },
                { name: "ice-cream", image: IceCream },
                { name: "keyboard", image: Keyboard },
                { name: "knife", image: Knife },
                { name: "mango", image: Mango },
                { name: "map", image: Map },
                { name: "microphone", image: Microphone }
            ] 
        }
    }

    render(){
        return (
            <div className="containter">
                <Header 
                    logo={Logo}
                />
                <Banner 
                    display={ImageBanner}
                />
                <div className="cardGrid">
                    {this.state.designs.map((design) => {
                        return <ArtCard 
                            design={design}
                            key={design.name}
                        />
                    })}   
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))
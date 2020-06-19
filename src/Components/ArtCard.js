import React from 'react'

class ArtCard extends React.Component {
    
    render() {
        return (
            <div className="card">
                <img className="design"
                    src={this.props.design.image} alt="character"
                />
            </div>
        )
    }
}

export default ArtCard
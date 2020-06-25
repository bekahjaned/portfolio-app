import React from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Contact extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null
        }
    }

    handleChange = (event) => {
        console.log(event);

        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }


    render() {
        return (
            <div className="form">
                <h1 className="hero">Let's Talk</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="formGroup">
                        <Form.Label htmlFor="full-name">Full Name</Form.Label>
                        <Form.Control className="fillable" id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                    </Form.Group>
                    
                    <Form.Group className="formGroup">
                        <Form.Label htmlFor="email">Email</Form.Label>
                        <Form.Control className="fillable" id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group className="formGroup">
                        <Form.Label htmlFor="message">Message</Form.Label>
                        <Form.Control className="fillable" id="message" name="message" as="textarea" rows="4" value={this.state.message} onChange={this.handleChange} />
                    </Form.Group>

                    <Button className="d-inline-block" variant="primary" type="submit" disables={this.state.disabled}>
                        Send
                    </Button>

                    {this.state.emailSent === true && <p className="d-inline success-message">Email Sent</p>}
                    {this.state.emailSent === false && <p className="d-inline error-message">Email Not Sent</p>}
                </Form>
            </div>
        )
    }
}

export default Contact
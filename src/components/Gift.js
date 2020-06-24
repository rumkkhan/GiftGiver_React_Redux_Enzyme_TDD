import React, { Component } from 'react';
import {Button,Form,FormGroup,FormControl,FormLabel} from 'react-bootstrap';

class gift extends Component {
    state = {
        person:'',
        present:''
    }
    render() {
       let id =this.props.gift.id
        return (
            <div>
                <Form>
                    <FormGroup>
                        <FormLabel>Person</FormLabel>
                        <FormControl className="txt-person" onChange={(event) => this.setState({person: event.target.value})} />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Present</FormLabel>
                        <FormControl className="txt-present" onChange={(event) => this.setState({present: event.target.value})} />
                    </FormGroup>
                    <Button className="btn-remove" onClick={() => this.props.giftRemove(id)}>Remove Gift</Button>
                </Form>
            </div>
        )
    }
}

export default gift

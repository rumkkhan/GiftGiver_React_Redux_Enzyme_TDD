import React, { Component } from 'react'
import {Button} from 'react-bootstrap';
 class App extends Component {
   
    constructor() {
        super();
        this.state = {
            gifts:[]
        }
    }
addGift = () => {
   const  {gifts} = this.state;
     const ids = this.state.gifts.map(gift => gift.id);
    const maxId = ids.length > 0 ? Math.max(...ids) : 0;
        gifts.push({ id : maxId + 1});
        this.setState({gifts})

}
    render() {
        console.log(this.state.gifts)
        return (
            <div>
                <h1>Gift Giver</h1>
                <div className="gift-list">
                {
                    this.state.gifts.map(gift => (
                        <div key={gift.id}>n</div>
                    ))
                }
                </div>
                <Button className="btn-add" onClick={this.addGift}>Add Gift</Button>
            </div>
        )
    }
}

export default App

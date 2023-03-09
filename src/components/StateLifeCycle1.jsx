import { Component } from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state= {
            isExpand: true
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isExpand: !prevState.isExpand
        }));
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>{this.state.isExpand? "Dong gioi thieu": "Xem gioi thieu"}</button>
                {this.state.isExpand?<div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever
                        since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </p>
                </div>: <></>}
            </div>
        )
    }
}
export default App;
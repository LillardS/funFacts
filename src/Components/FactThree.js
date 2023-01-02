import { Component } from "react";

class FactThree extends Component {
    state = {
        title: 'The Most Sold and Most Played Game Of All Time Is "Minecraft"',
        description: 'Although we know games have been around since the early 1950\'s, the most popular game of all time was only released on November 18th of 2011. Since then it has sold over 238,000,000 copies across all combined gaming platforms! The next closest game only sold 170,000,000 copies.'
    }
    render() {
        return (
            <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{this.state.title}</h5>
                        <p class="card-text">{this.state.description}</p>
                    </div>
            </div>
        )
    }
}

export default FactThree
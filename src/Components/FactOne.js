import { Component } from "react";

class FactOne extends Component {
    state = {
        title: "'Space Invaders' Started The Enemy Wave Based Gaming Idea",
        description: 'Today we have games like Balloons Tower Defense and Vampire Survivors, but it had to start somewhere. The developers of Space Invaders had a problem where whenver you would kill an alien, the game would freeze up for a short time. This would cause the game to run faster, causing an influx of enemies much faster when it resumed again.'
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

export default FactOne
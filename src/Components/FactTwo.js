import { Component } from "react";

class FactTwo extends Component {
    state = {
        title: 'The Earliest Known Publicly Demonstrated Electronic Game Was Created In 1950',
        description: ' Bertie the Brain was an arcade game of tic-tac-toe, built by Josef Kates for the 1950 Canadian National Exhibition. To showcase his new miniature vacuum tube he designed a specialized computer to use it, which he built with the assistance of engineers from Rogers Majestic. The large metal computer, which was four meters tall, could only play tic-tac-toe on a lightbulb-backed display, and was installed in the Engineering Building at the Canadian National Exhibition from August 25 to September 9, 1950.'
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

export default FactTwo
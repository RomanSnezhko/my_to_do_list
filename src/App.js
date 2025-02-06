import './App.css';
import {Todolist} from './Todolist';
import type {CardsType} from "./Todolist";

function App() {

    let card1: Array<CardsType> = [
        {title: "Big Boss", watching: true, recommendationss: "good"},
        {title: "Live in London", watching: true, recommendationss: "normal"},
        {title: "Earth secret", watching: false, recommendationss: "fantastic"},
    ]

    let card2: Array<CardsType> = [
        {title: "danger Washington", watching: true, recommendationss: "bad"},
        {title: "From Parish with love", watching: true, recommendationss: "fantastic"},
        {title: "Destructor", watching: false, recommendationss: "good"},
    ]

    let card3: Array<CardsType> = [
        {title: "Bobs", watching: false, recommendationss: "fantastic"},
        {title: "Holly Molly", watching: true, recommendationss: "normal"},
        {title: "Stellar", watching: true, recommendationss: "good"},
    ]
    return (
        <div className="App">
            <Todolist title="A" cards={card1}/>
            <Todolist title="B" cards={card2}/>
            <Todolist title="C" cards={card3}/>
        </div>
    );
}

export default App;

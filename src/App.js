import './App.css';
import {Todolist} from './Todolist';

function App() {
    return (
        <div className="App">
            <Todolist title = "What to learn"/>
        </div>
);
}

let card1: Array<CardsType> = [
    {title: "Big Boss", reitingStars: "4", recomendations : "good"},
    {title: "Live in London", reitingStars: "3", recomendations : "normal"},
    {title: "Earth secret", reitingStars: "5", recomendations : "fantastic"},
]

let card2: Array<CardsType>  = [
    {title: "danger Washington", reitingStars: "2", recomendations : "bad"},
    {title: "From Parish with love", reitingStars: "5", recomendations : "fantastic"},
    {title: "Destructor", reitingStars: "4", recomendations : "good"},
]

let card3: Array<CardsType>  = [
    {title: "Bobs", reitingStars: "5", recomendations : "fantastic"},
    {title: "Holly Molly", reitingStars: "3", recomendations : "normal"},
    {title: "Stellar", reitingStars: "4", recomendations : "good"},
]

export default App;

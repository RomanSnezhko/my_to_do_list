import React from 'react';


export type CardsType = {
    title: string,
    reitingStars: number,
    recomendations: string
}

type PropsType = {
    title: string,
    cards: Array<CardsType>
}

export function Todolist(props: PropsType) {
    return (
        <div>
            <h3>576</h3>
            <div>
                <input/>
                <p>
                    <button>Search</button>
                </p>

            </div>
            <ul>
                <li><input type="checkbox" checked={true}/><span>{props.cards[0].title}</span></li>
                <li><input type="checkbox" checked={true}/><span>{props.cards[1].title}</span></li>
                <li><input type="checkbox" checked={false}/><span>{props.cards[2].title}</span></li>
            </ul>

        </div>
    )
}

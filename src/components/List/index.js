import React, {useState, useEffect} from 'react';
// import data from '../../data.json';

import Card from '../Card';
import './style.scss';

function List(props){

    const {filter} = props;
    const [cards, setCards] = useState([])

    useEffect(()=>{
        fetchData();
    }, [])

    async function fetchData(){
        const getCards = await fetch ('http://localhost:3001/api/card/')
        const cards = await getCards.json()

        setCards(cards)

    }


    return(
        <section className="listContainer">
            {cards
            .filter((card) => {
                const {name} = card
                return name.toLowerCase().includes(filter.toLowerCase())
            })
            .map((card) => {
                return (
                    <Card key={card._id} img={card.img} name={card.name}/>
                )
                })
            }
        </section>
    )
}

export default List;
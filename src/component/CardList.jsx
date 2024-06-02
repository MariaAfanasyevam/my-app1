import React from 'react'
//Не забываем импортировать компонент
import Card from './Card'


class CardList extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Card
                    title="Бэтмен"
                    price={99}
                    description="Такие только у нас"
                    imgLink="./images/batman.png"
                />
                <Card
                    title="Капитан Америка"
                    price={23}
                    description="Надеюсь, пригодятся"
                    imgLink=".images/captainamerica.jpg"
                />
                <Card
                    title="Супермен"
                    price={85}
                    description="Теперь и в чёрном цвете"
                    imgLink="./images/superman.png"
                />
            </React.Fragment>
        )
    }
}

export default CardList;
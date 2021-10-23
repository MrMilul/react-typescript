import React from 'react'
interface IProps {
    people: {
        name: string
        age: number
        url: string
        note?: string
    }[],
    number: number

}
const List: React.FC<IProps> = ({ people, number }) => {

    const renderList = (): JSX.Element[] => {
        return people.map(person => {
            return (
                <li>
                    <div>
                        <img src={person.url} />
                        {person.name}
                        <p>{person.note}</p>
                    </div>
                </li>
            )

        })
    }
    return (
        <ul>
            {renderList()}
        </ul>
    )
}

export default List

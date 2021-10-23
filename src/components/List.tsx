import React from 'react'
interface IProps{
        people:{
          name:string
          age: number
          url: string
          note?:string
        }[],
        number: number
        
}
const List: React.FC<IProps>= ({people, number}) => {

    console.log(number)
    return (
        <div>
            Im a list
        </div>
    )
}

export default List

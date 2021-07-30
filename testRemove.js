const initialCars = [
    {
        id: 1,
        manufacture: 'BMW',
        model: 'X5',
        price: 25000
    },
    {
        id: 2,
        manufacture: 'BMW',
        model: 'X3',
        price: 25500
    },
    {
        id: 3,
        manufacture: 'BMW',
        model: 'M1',
        price: 22000
    },
    {
        id: 4,
        manufacture: 'BMW',
        model: '527i',
        price: 15000
    },
]

import React, {useState} from 'react'

const CarsList = () => {

    const [cars, setCars] = useState(initialCars)

    const removeCar = (id) => {
        // const _cars = [...cars]
        // const idx = _cars.findIndex(car => car.id === id)
        // if (idx === -1) {
        //     return null
        // }
        // _cars.splice(idx, 1)
        // setCars(_cars)
        setCars( cars.filter(car => car.id !== id))
    }

    return (
        <div>
            {cars.map( car => (
                <div key={car.id}><h2>{car.manufacture}</h2> <button onClick={()=>{ removeCar(car.id) }}>Delete</button></div>
            ) )}
        </div>
    )

}
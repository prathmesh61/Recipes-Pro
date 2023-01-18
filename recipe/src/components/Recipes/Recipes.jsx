import React, { useEffect } from 'react'
import { useState } from 'react'
import './Recipes.css'

const Recipes = () => {

    const [search, setSearch] = useState('')
    const [recipe, setRecipe] = useState([])

    const searchRecipe = async () => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`)
        const data = await response.json()
        console.log(data);
        setRecipe(data.meals)

    }

    useEffect(() => {

        searchRecipe()
    }, [])



    // const handleSumit = (e) => {
    //     e.preventDefault()
    //     searchRecipe()
    // }
    console.log(search);

    return (
        <div className="recipes mx-auto">
            <div className="recipes-cont">
                <h2 className='recipe-title'>Find Best recipe For cooking..🔶</h2>
                <div className="recipe-input-cont">
                    <form >
                        <input className='input' type="search" onChange={(e) => setSearch(e.target.value)} name="search" placeholder='Search Recipes' value={search} />
                    </form>
                </div>

                <div className="single-recipe-cont">
                    {recipe.filter((item) => {
                        return search.toLocaleLowerCase() === "" ? item : item.strMeal.toLocaleLowerCase().includes(search)
                    }).map((item) => (
                        <div className="single-recipe" key={item.id}>
                            <img className='single-recipe-img' src={item.strMealThumb} alt="thumbnail" />
                            <p className='single-recipe-title'>{item.strMeal.slice(0, 20) + "..."}</p>
                            <button className='single-recipe-btn'>See More</button>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Recipes
export const getAllMeals = ()=>{
   return fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    .then(data=>data.json())
}
export const getCategory = (category)=>{
   return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then(data=>data.json())
}
export const getId = (id)=>{
   return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(data=>data.json())
}
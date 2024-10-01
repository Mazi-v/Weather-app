import {countries} from '../data/data.js' ;

const countriesList =[]
let cities_list ={}
Object.entries(countries).forEach(([country, cities]) =>{countriesList.push({value:country,label:country})
const curr_cities = cities.map(city => ({ value: city, label: city }));
cities_list[country]=curr_cities

} 
)
export { countriesList, cities_list };


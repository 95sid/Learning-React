/** 
 * Flow of search bar
 *  1-> Render all Restaurants 
 *  2-> Filter restaurants according to search text  
 *  3-> Render Filtered Restaurants 
*/

export function filterData(searchInput, restaurants) {
    // filter restaurant having searchInput from restaurants 
    return restaurants.filter((restaurant) => 
      restaurant.data.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  }
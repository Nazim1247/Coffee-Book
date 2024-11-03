import toast from "react-hot-toast";


const getFavorites = ()=>{
    const all = localStorage.getItem('favorites');
    if(all){
        const favorite = JSON.parse(all);
        return favorite;
    }else{
        return [];
    }
}
const addFavorite = (coffee)=>{
    const favorites = getFavorites();
    const isExist = favorites.find(item => item.id == coffee.id);
    if(isExist) return toast.error('already exist')
    favorites.push(coffee);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    toast.success('successfully added')
}

const removeFavorite = (id)=>{
    const favorites = getFavorites();
    const remaining = favorites.filter(coffee => coffee.id != id);
    localStorage.setItem('favorites', JSON.stringify(remaining));
    toast.success('successfully Removed');
}

export {addFavorite,getFavorites,removeFavorite}
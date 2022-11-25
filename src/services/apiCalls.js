import axios from "axios";

var root = "www.themealdb.com/api/json/v1/1";

export const bringCategories = async () => {
    let config = {
        method: 'get',
        url: `${root}/list.php?c=list`
    }
    return await axios(config);
};

export const bringAreas = async () => {
    let config = {
        method: 'get',
        url: `${root}/list.php?a=list`
    }
    return await axios(config);
};

export const bringIngredients = async () => {
    let config = {
        method: 'get',
        url: `${root}/list.php?i=list`
    }
    return await axios(config);
};

export const bringRecipesByLetter = async (letter) => {
    let config = {
        method: 'get',
        url: `${root}/search.php?f=${letter}`
    }
    return await axios(config);
};
export const bringRandomRecipe = async () => {
    let config = {
        method: 'get',
        url: `${root}/random.php`
    }
    return await axios(config);
};



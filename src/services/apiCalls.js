import axios from "axios";

const API_ROOT = "https://www.themealdb.com/api/json/v1/1";

export const bringBySearch = (search) => {
    return axios
        .get(`${API_ROOT}/search.php?s=${search}`)
        .then((response) => {
            return response.data;
        })
        .catch((e) => console.error(e));

};

export const bringAllRecipes = () => {
    return axios
        .get(`${API_ROOT}/search.php?s=`)
        .then((response) => {
            return response.data;
        })
        .catch((e) => console.error(e));

};

export const bringCategories = () => {
    return axios
        .get(`${API_ROOT}/list.php?c=list`)
        .then((response) => {
            return response.data;
        })
        .catch((e) => console.error(e));

};

export const bringAreas = () => {
    return axios
        .get(`${API_ROOT}/list.php?a=list`)
        .then((response) => {
            return response.data;
        })
        .catch((e) => console.error(e));
};

export const bringIngredients = () => {
    return axios
        .get(`${API_ROOT}/list.php?i=list`)
        .then((response) => {
            return response.data;
        })
        .catch((e) => console.error(e));
};

export const bringRandomRecipe = () => {
    return axios
        .get(`${API_ROOT}/random.php`)
        .then((response) => {
            return response.data;
        })
        .catch((e) => console.error(e));
};



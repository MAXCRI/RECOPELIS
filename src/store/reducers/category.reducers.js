import { CATEGORIES } from "../../base/categories";
import { SELECTED_CATEGORY } from "../actions/category.action";

const initialState = {
    movieCategories: CATEGORIES,
    selected:null,
};

const CategoryReducers = (state = initialState, action) => {
    switch (action.type) {
            case SELECTED_CATEGORY:
                const IndexCategory = state.movieCategories.findIndex(
                    cat => cat.id === action.categoryId
                )
                if (IndexCategory === -1) return state
                return {
                                  ...state,
                                    selected: state.movieCategories[IndexCategory]
                                };
                                default: return state
 
        }
};

export default CategoryReducers;
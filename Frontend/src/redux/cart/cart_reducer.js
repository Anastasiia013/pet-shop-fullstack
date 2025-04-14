import { ADD_TO_CART } from "./cart-types";

const cartReducer = (store = [], { type, payload }) => {
    switch (type) {
        case ADD_TO_CART:
            const newStore = store.map(item => ({ ...item }));
            const product = newStore.find(item => item.id === payload.id);
            if (product) {
                product.count += 1;
                return newStore;
            }
            
            return [...newStore, { ...payload, count: 1 }];
            ;
        default:
            return store;
    }
}

export default cartReducer;
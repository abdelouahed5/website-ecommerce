

const cart = [];
const HandelCart = (state = cart, action)=>{
    const product = action.payload;
    switch (action.type) {
        case "ADD_ITEM":
            const exist = state.find((x) => x.id === x.product);
            if (exist) {
                return state.map((x) => x.id === product.id ? { ...x, qty: x.qty + 1 } : x);
            }
            else {
                const product = action.payload;
                return [
                    ...state, { ...product, qty: 1 }
                ]
            }


            break;
        case "DELE_ITEM":
            const exist1 = state.find((x) => x.id === x.product);
            if (exist1.qty === 1) {
                return state.filter((x) => x.id != exist1.id);
            }
            else {
                return state.map((x) => x.id === product.id ? { ...x, qty: x.qty - 1 } : x);
            }
            break;


        default:
            return state;
            break;
    }
}
export default HandelCart;



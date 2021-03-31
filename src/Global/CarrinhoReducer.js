export const CarrinhoReducer = (state, action) => {

    const {shoppingCart, totalPrice, qty} = state;
    let produto;
    let index;
    let updatePrice;
    let updateQty;
    switch(action.type){

        case 'ADD_TO_CART':
            
            const check = shoppingCart.find(produto => produto.id === action.id);
            if(check){
                
                return state;
                
            } else {
                
                produto = action.produto;
                produto['qty']= 1;
                updateQty = qty + 1;
                updatePrice = totalPrice + produto.price;
                
                return {
                    shoppingCart: [produto, ...shoppingCart], totalPrice:
                     updatePrice, qty: updateQty}

            }
            break;

            default:
            return state;
    }

}
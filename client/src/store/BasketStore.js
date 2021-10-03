import {makeAutoObservable} from "mobx";

export default class BasketStore {
    constructor() {
        this._count = []
        this._basket = []
        makeAutoObservable(this)
    }

    setBasket(basket) {
        this._basket = basket
    }

    setCount(brands) {
        this._brands = brands
    }

    get basket() {
        return this._basket
    }

    get count() {
        return this._brands
    }

}
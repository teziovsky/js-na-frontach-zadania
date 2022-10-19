import { v4 } from "uuid";
const data = [
    makeFakeList("Shopping #1", [
        makeFakeProduct({
            name: "SmartPhone",
            quantity: 1,
            value: 2300,
            unit: "item",
        }),
    ]),
    makeFakeList("Groceries", [
        makeFakeProduct({ name: "Tomatoes", quantity: 2, value: 6, unit: "kg" }),
        withStatus(makeFakeProduct({
            name: "Potatoes",
            quantity: 11,
            value: 2.44,
            unit: "kg",
        }), "BOUGHT"),
        makeFakeProduct({
            name: "Onions",
            quantity: 2,
            value: 3,
            unit: "kg",
        }),
    ]),
];
export const shoppingListsService = {
    async getAll() {
        return data;
    },
    async getOne(id) {
        return data.find((sl) => sl.id === id);
    },
};
// Just some "FAKE" helpers here:
function makeFakeList(name, products = []) {
    return {
        id: v4(),
        name,
        products,
    };
}
function makeFakeProduct({ name, quantity, value, description, unit, }) {
    return {
        id: v4(),
        description,
        name,
        quantity,
        value,
        unit,
        get price() {
            return this.quantity * this.value;
        },
        status: "AWAITING",
    };
}
function withStatus(product, status) {
    return { ...product, status };
}

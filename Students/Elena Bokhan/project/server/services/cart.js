module.exports = {
	add(cart, item) {
		cart.contents.push(item);
		return cart;
	},
	change(cart, id, amount) {
		let find = this._find(cart.contents, id);
		find.quantity += amount;
		return { newCart: cart, item: find };
	},
	delete(cart, id) {
		let find = this._find(cart.contents, id);
		cart.contents.splice(cart.contents.indexOf(find), 1);
		return { newCart: cart, item: find };
	},
	_find(arr, id) {
		return arr.find(el => el.id_product == id)
	}
}
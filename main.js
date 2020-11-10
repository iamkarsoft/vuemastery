

const app = new Vue({
	el: "#app",
	data:{
		product: 'Socks',
		description: 'These Socks are hell of a good one',
		image: './assets/img/socks-white.jpg',
		link: 'https://www.amazon.com',
		inStock: true,
		boosted: true,
		onSale: true,
		details: [
			"80% cotton",
			"20% polyester"	,
			"Gender-neutral"
		],
		variants: [
			{
				variantId: 2234,
				variantColor: "blue",
				variantImage: "./assets/img/socks-blue.jpg"	
			},
			{
				variantId: 2235,
				variantColor: "white",
				variantImage: './assets/img/socks-white.jpg',

			},
			{
				variantId: 2236,
				variantColor: "black",	
				variantImage: './assets/img/socks-black.jpg',

			},
		],
		sizes: [
			"small",
			"medium",
			"large"
		],
		cart: 0,
	},
	methods: {
		addToCart(){
			this.cart+=1;
		},
		updateProduct(variantImage){
			this.image = variantImage;

		},
		removeFromCart(){
			if(this.cart!=0){
			this.cart-=1;
			}
		},
	},
})
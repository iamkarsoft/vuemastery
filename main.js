

const app = new Vue({
	el: "#app",
	data:{
		product: 'Socks',
		brand: 'Kamal',
		description: 'These Socks are hell of a good one',
		link: 'https://www.amazon.com',
		selectedVariant: 0,
		boosted: false,
		
		details: [
			"80% cotton",
			"20% polyester"	,
			"Gender-neutral"
		],
		variants: [
			{
				variantId: 2234,
				variantColor: "blue",
				variantImage: "./assets/img/socks-blue.jpg"	,
				variantQuantity: 20,
				onSale: true,
			},
			{
				variantId: 2235,
				variantColor: "white",
				variantImage: './assets/img/socks-white.jpg',
				variantQuantity: 40,
				onSale: false,




			},
			{
				variantId: 2236,
				variantColor: "black",	
				variantImage: './assets/img/socks-black.jpg',
				variantQuantity: 0,
				onSale: false,


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
		updateProduct(index){
			this.selectedVariant = index;

		},
		removeFromCart(){
			if(this.cart!=0){
			this.cart-=1;
			}
		},
	},

	computed:{
		title(){
			return this.brand + ' ' + this.product;
		},
		image(){
			return this.variants[this.selectedVariant].variantImage;
		},
		inStock(){
			return this.variants[this.selectedVariant].variantQuantity;
		},
		onSale(){
			return this.variants[this.selectedVariant].onSale;
		}
	},
})
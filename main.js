

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
			},
			{
				variantId: 2235,
				variantColor: "white",	
			},
			{
				variantId: 2234,
				variantColor: "black",	
			},
		],
		sizes: [
			"small",
			"medium",
			"large"
		],
		cart: 0,
	}
})
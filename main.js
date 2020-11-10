
Vue.component('product-details',{
	props:{
		details:{
			type: Array,
			required: true,
		}
	},
	template: ` 
			<ul class="list-disc">
				<li class="mt-2" v-for="detail in details">{{detail}}</li>
			</ul>
	`,
})

Vue.component('product',{
	props:{
		premium:{
			type: Boolean,
			required: true,
		}
	},
	template:` 
<div class="product mt-4 flex">
		<div class="product-img w-full md:w-1/2">
			<img v-bind:src="image" alt="">
		</div>
		<div class=" w-full md:w-1/2">
		<h1 class="text-3xl">{{ title}}</h1>
		<div class="text-xl mt-4">
			
		<product-details :details="details"></product-details>
		</div>
		<div class="mt-4 color-box" :style="{backgroundColor: variant.variantColor}" v-for="(variant, index) in variants" :key="variant.variantId"  @mouseover="updateProduct(index)">
		</div>

		<div class="mt-4 flex">
			
				<span class="px-2" v-for="size in sizes">{{size}}</span>
			
		</div>
		<p class="mt-2" v-show="boosted">Boosted Product</p>
		<p class="mt-2" v-if="inStock">In Stock</p>
		<p class="mt-2" v-else :class="{'line-through':  !inStock}">Out of Stock</p>
		<p class="mt-2 " v-if="onSale"><span class="bg-red-500 text-white text-xl border-4 rounded p-1">On Sale!!</span></p>
		<a :href="link" target="_blank" class="mt-4" v-show="!inStock">Alternatives</a>
		<p >Shipping: {{ shipping }}</p>
		<hr>
		<div class="mt-4 flex" v-show="inStock">
			<div >
		<button class="bg-blue-700 mx-4 text-white p-4 rounded hover:bg-blue-400 mt-2" :disabled="!inStock" v-on:click="addToCart" :class="{'disabled': !inStock}">Add to Cart</button>
		<button class="bg-red-700 mx-4 text-white p-4 rounded hover:bg-red-400 mt-2" :disabled="!inStock" v-on:click="removeFromCart" :class="{'disabled': !inStock}">Remove from Cart</button>
			</div>
	
		</div>
		</div>
		</div>
	`,
data(){
		return {product: 'Socks',
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
		
	}
},

	methods: {
		addToCart(){
			this.$emit('add-to-cart',this.variants[this.selectedVariant].variantId);
		},
		updateProduct(index){
			this.selectedVariant = index;

		},
		removeFromCart(){
			if(this.cart!=0){
				this.$emit('remove-from-cart',this.variants[this.selectedVariant].variantId);
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
		},
		shipping(){
			if(this.premium){
				return "Free"
			}
			return 2.99
		},
	},

})

const app = new Vue({
	el: "#app",
	data: {
		premium: false,
		cart: [],
	},
	methods: {
		updateCart(id){
			this.cart.push(id);
		},

		removeCart(id){
			      for(var i = this.cart.length - 1; i >= 0; i--) {
            if (this.cart[i] === id) {
               this.cart.splice(i, 1);
            }
		}
	}
		}
	
})
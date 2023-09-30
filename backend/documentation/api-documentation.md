## API Documentation:

### Products: 

General overview of what the ``product`` object looks like:

```ts
{
	"category": string,
	"image_url": string,
	"name": string,
	"product_id": number,
	"product_price": number,
	"sku": number
}

```
---

<strong> Endpoints:</strong>

Fetching products: 
- method: ``GET``
- endpoint: ``http://127.0.0.1:5000/products``
- Returns an object with attribute ``products`` containing an array of objects. Each object within the array provides detailed data relating to the item.

```json
{
	"products": [
		{
			"category": "Vegetable",
			"image_url": "https://media.istockphoto.com/id/466175630/photo/tomato-isolated-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=zloJA_rdhqA7aJ9O0mDDaBQOzOei3SlW2RCwvH4CxOA=",
			"name": "Tomato",
			"product_id": 1,
			"product_price": 1.5,
			"sku": 12345678
		},
		{
			"category": "Vegetable",
			"image_url": "https://www.bobtailfruit.co.uk/pub/media/catalog/product/cache/118fd06640efc949eafa2123c39b08e3/1/9/1918.jpg",
			"name": "Cucumber",
			"product_id": 2,
			"product_price": 2.5,
			"sku": 12345678
		},
   //and so on....
   ]
}
```
---
Fetching products by category


- method: ``GET``, 
- endpoint: ``http://127.0.0.1:5000/products/<category>
- available categories as of writing this documenation: 
   
   1. Fruit
   2. Vegetable
   3. Legume 


- Returns an object with attribute ``products`` containing an array of objects. Each object within the array provides detailed data relating to the item.
```json
{
	"products": [
		{
			"category": "Fruit",
			"image_url": "https://www.applesfromny.com/wp-content/uploads/2020/06/SnapdragonNEW.png",
			"price": 3.5,
			"product_id": 2,
			"product_name": "Apple",
			"sku": 12345678
		},
		{
			"category": "Fruit",
			"image_url": "https://thumbs.dreamstime.com/b/one-peach-white-background-58569816.jpg",
			"price": 4.5,
			"product_id": 2,
			"product_name": "Peach",
			"sku": 12345678
		},
      // and so on
   ]
```

---

Fetching an individual product

- method: ``GET``, 
- endpoint: ``http://127.0.0.1:5000/products/<int:product_id>``
   
   > Pass the product id into the endpoint as an integer
   (i.e. http://127.0.0.1:5000/products/2) it's just an integer lol

- Returns a single object in the following format: 
```json
{
	"category": "Vegetable",
	"image_url": "https://media.istockphoto.com/id/466175630/photo/tomato-isolated-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=zloJA_rdhqA7aJ9O0mDDaBQOzOei3SlW2RCwvH4CxOA=",
	"name": "Tomato",
	"product_id": 1,
	"product_price": 1.5,
	"sku": 12345678
}

```


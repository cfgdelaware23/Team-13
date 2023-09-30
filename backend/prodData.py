import requests

def get_vegetable_products(num_products=30):
    base_url = "https://world.openfoodfacts.org/cgi/search.pl"
    
    params = {
        "action": "process",
        "tagtype_0": "categories",
        "tag_contains_0": "contains",
        "tag_0": "vegetables",
        "sort_by": "unique_scans_n",
        "page_size": num_products,
        "lang": "en",
        "json": "1"
    }
    
    response = requests.get(base_url, params=params)
    
    if response.status_code == 200:
        data = response.json()
        products = data.get("products", [])
        vegetable_products = []
        
        for product in products:
            product_name = product.get("product_name", "Unknown")
            image_url = product.get("image_url", "")
            
            if image_url:
                vegetable_products.append({"product_name": product_name, "image_url": image_url})
        
        return vegetable_products
    else:
        print(f"Error fetching data. Status code: {response.status_code}")
        return []

# Get a list of 30 vegetable products with their image URLs
vegetable_products_list = get_vegetable_products(num_products=30)

# Print the list
print(vegetable_products_list)
const fetchProducts = async () => {
    try {
      // Fetch products from API
      const response = await fetch('API_ENDPOINT_TO_GET_PRODUCTS');
      if (!response.ok && response.status !== 200) {
        throw new Error('Failed to fetch products');
      }
  
      // Check if response is JSON
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Response is not in JSON format');
      }
  
      // Parse response JSON
      const data = await response.json();
  
      // Update state with fetched products
      setProducts(data.products);
    } catch (errors) {
      console.error('Error fetching products:', error);
    }
  };
  
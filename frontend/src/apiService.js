const API_URL = 'http://localhost:8000/api/';  // Change this to your backend URL

const apiService = {
  getProducts: async () => {
    const response = await fetch(`${API_URL}products/`);
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  },

  getProduct: async (id) => {
    const response = await fetch(`${API_URL}products/${id}/`);
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  },

  createProduct: async (product) => {
    const response = await fetch(`${API_URL}products/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  },

  updateProduct: async (id, product) => {
    const response = await fetch(`${API_URL}products/${id}/`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  },

  deleteProduct: async (id) => {
    const response = await fetch(`${API_URL}products/${id}/`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return response.status;
  },

  getWishlists: async (token) => {
    const response = await fetch(`${API_URL}wishlists/`, {
      headers: { 'Authorization': `Token ${token}` },
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  },

  createWishlist: async (productId, token) => {
    const response = await fetch(`${API_URL}wishlists/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`,
      },
      body: JSON.stringify({ product_id: productId }),
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  },

  deleteWishlist: async (id, token) => {
    const response = await fetch(`${API_URL}wishlists/${id}/`, {
      method: 'DELETE',
      headers: { 'Authorization': `Token ${token}` },
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return response.status;
  },

  signup: async(formData, csrfToken) => {
    return fetch(`${API_URL}signup/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrfToken  // Include CSRF token
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    });
},

  login: async (credentials) => {
    const response = await fetch(`${API_URL}login/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  },

  logout: async (token) => {
    const response = await fetch(`${API_URL}logout/`, {
      method: 'POST',
      headers: { 'Authorization': `Token ${token}` },
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return response.status;
  },
};

export default apiService;

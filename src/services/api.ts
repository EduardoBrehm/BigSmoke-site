const API_URL = 'http://localhost:5000/api';

export async function getProducts() {
  const response = await fetch(`${API_URL}/products`, { 
    cache: 'no-store',
    next: { revalidate: 0 }
  });
  if (!response.ok) throw new Error('Failed to fetch products');
  return response.json();
}

export async function getFeaturedProducts() {
  const response = await fetch(`${API_URL}/products/featured`, { 
    cache: 'no-store',
    next: { revalidate: 0 }
  });
  if (!response.ok) throw new Error('Failed to fetch featured products');
  return response.json();
}

export async function getProductBySlug(slug: string) {
  const response = await fetch(`${API_URL}/products/${slug}`, { 
    cache: 'no-store',
    next: { revalidate: 0 }
  });
  if (!response.ok) throw new Error('Failed to fetch product');
  return response.json();
}

export async function getCategories() {
  const response = await fetch(`${API_URL}/categories`, { 
    cache: 'no-store',
    next: { revalidate: 0 }
  });
  if (!response.ok) throw new Error('Failed to fetch categories');
  return response.json();
}

export async function getProductsByCategory(slug: string) {
  const response = await fetch(`${API_URL}/categories/${slug}/products`, { 
    cache: 'no-store',
    next: { revalidate: 0 }
  });
  if (!response.ok) throw new Error('Failed to fetch category products');
  return response.json();
}

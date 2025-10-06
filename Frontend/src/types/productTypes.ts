//====================================== Product ==============================
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl?: string;
}

export interface SearchState {
  query: string;
  isSearching: boolean;
  searchResults: Product[];
}

//====================================== Product Card ==============================
export interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

export interface ProductCardViewProps {
  product: Product;
  onAddToCart: () => void;
}

//====================================== Product Page ==============================

export interface ProductsPageViewProps {
  products: Product[];
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onClearSearch: () => void;
}

export interface ProductsPageHandlersProps {
  setProducts: (products: Product[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export interface ProductLoadingStateProps {
  isSearching?: boolean;
}

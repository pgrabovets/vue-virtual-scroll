type ProductResponse = {
  id: number
  title: string
  description: string
  category: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  tags: string[]
  brand: string
  sku: string
  weight: number
  dimensions: {
    width: number
    height: number
    depth: number
  }
  warrantyInformation: string
  shippingInformation: string
  availabilityStatus: string
  reviews: {
    rating: number
    comment: string
    date: string // ISO 8601 format
    reviewerName: string
    reviewerEmail: string
  }[]
  returnPolicy: string
  minimumOrderQuantity: number
  meta: {
    createdAt: string // ISO 8601 format
    updatedAt: string // ISO 8601 format
    barcode: string
    qrCode: string
  }
  images: string[]
  thumbnail: string
}

type ProductsResponse = {
  products: ProductResponse[]
  total: number
  skip: number
  limit: number
}

export const getProducts = async () => {
  const response = await fetch('https://dummyjson.com/products?limit=100')
  const data: ProductsResponse = await response.json()
  return data.products;
}

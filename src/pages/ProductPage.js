import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PRODUCTS } from "../data/products";
import ProductModal from "../components/ProductModal";

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Convertir id en nombre pour matcher avec PRODUCTS
  const product = PRODUCTS.find(p => p.id === Number(id));

  if (!product) return <div className="p-6">Produit introuvable</div>;

  return (
    <ProductModal
      product={product}
      isOpen={true}
      onClose={() => navigate(-1)} 
    />
  );
}export default function ProductPage({ onAddToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.id === Number(id));

  if (!product) return <div className="p-6">Produit introuvable</div>;

  return (
    <ProductModal
      product={product}
      isOpen={true}
      onClose={() => navigate(-1)}
      onAddToCart={onAddToCart} 
    />
  );
}


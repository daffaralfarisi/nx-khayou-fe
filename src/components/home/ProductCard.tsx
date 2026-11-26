/* eslint-disable @next/next/no-img-element -- card.css sizes .product-image */

import Link from "next/link";
import { BADGE_LABEL, formatPrice, type ProductCard as Card } from "@/data/products";

/** Product card from landingpage/product.blade.php. */
export default function ProductCard({
  product,
  className,
}: {
  product: Card;
  className?: string;
}) {
  return (
    <div className={`product-card${className ? ` ${className}` : ""}`}>
      <div className="product-badges">
        <span className={`badge-custom badge-${product.badge}`}>{BADGE_LABEL[product.badge]}</span>
      </div>
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
        <div className="quick-add-overlay">
          <Link className="quick-add-btn" href={`/shop/${product.slug}`}>
            <i className="fas fa-plus me-2" aria-hidden="true"></i>Quick add
          </Link>
        </div>
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className={`product-price${product.badge === "bestseller" ? " fw-bold" : ""}`}>
          Rp {formatPrice(product.price)}
        </p>
      </div>
    </div>
  );
}

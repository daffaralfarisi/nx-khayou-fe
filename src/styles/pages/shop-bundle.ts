// The inline <style> block of resources/views/pages/shop/index.blade.php, copied unchanged.
// Rendered with <PageStyle> so it only applies while this page is shown.
const css = String.raw`
.featured-product-landscape {
    background: #fff;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    position: relative;
}

.featured-product-landscape:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.landscape-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 400px;
    align-items: center;
}

.landscape-image-section {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.landscape-product-image {
    max-width: 100%;
    object-fit: contain;
    transition: transform 0.3s ease;
}

.featured-product-landscape:hover .landscape-product-image {
    transform: scale(1.05);
}

.landscape-badge {
    position: absolute;
    top: 20px;
    left: 20px;
    background: #6B7280;
    color: white;
    font-size: 12px;
    font-weight: 700;
    padding: 6px 16px;
    border-radius: 25px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    z-index: 10;
}

.landscape-info-section {
    padding: 40px 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
}

.landscape-title {
    font-size: 2.25rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 12px;
    line-height: 1.2;
}

.landscape-price {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 16px;
}

.landscape-rating {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 24px;
}

.landscape-stars {
    display: flex;
    gap: 4px;
}

.landscape-star {
    color: #fbbf24;
    font-size: 18px;
}

.landscape-review-count {
    color: #6b7280;
    font-size: 16px;
    font-weight: 500;
}

.landscape-options {
    margin-bottom: 32px;
}

.landscape-option-group {
    margin-bottom: 20px;
}

.landscape-option-label {
    font-size: 16px;
    font-weight: 600;
    color: #374151;
    margin-bottom: 12px;
    display: block;
}


.landscape-add-to-cart {
    background: #1f2937;
    color: white;
    border: none;
    padding: 14px 32px;
    border-radius: 10px;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.2s ease;
    flex: 1;
    margin-bottom: 1rem;
}

.landscape-add-to-cart:hover {
    background: #111827;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(31, 41, 55, 0.3);
}

.landscape-stock-info {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: #059669;
    font-weight: 500;
}

.landscape-features {
    margin-top: 24px;
    padding-top: 24px;
    border-top: 1px solid #e5e7eb;
}

.landscape-feature-list {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
}

.landscape-feature {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: #6b7280;
}

.landscape-feature-icon {
    font-size: 16px;
    color: #10b981;
}

@media (max-width: 992px) {
    .landscape-content {
        grid-template-columns: 1fr;
    }

    .landscape-info-section {
        padding: 30px;
    }

    .landscape-title {
        font-size: 1.875rem;
    }

    .landscape-cart-section {
        flex-direction: column;
        align-items: stretch;
        gap: 16px;
    }

    .landscape-add-to-cart {
        max-width: 100%;
    }
}

@media (max-width: 768px) {
    .landscape-info-section {
        padding: 20px;
    }

    .landscape-title {
        font-size: 1.5rem;
    }

    .landscape-feature-list {
        flex-direction: column;
        gap: 12px;
    }
}
`;

export default css;

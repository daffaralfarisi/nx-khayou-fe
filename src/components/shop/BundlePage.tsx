/* eslint-disable @next/next/no-img-element -- template markup sizes these as plain <img> */

import Link from "next/link";
import PageStyle from "@/components/PageStyle";
import { BUNDLE, PRODUCTS, formatPrice } from "@/data/products";
import shopBundleCss from "@/styles/pages/shop-bundle";
import PageHeader from "@/components/PageHeader";

/** /shop/khayou-set-bundle (pages/shop/index.blade.php). */
export default function BundlePage() {
  const price = formatPrice(BUNDLE.price);

  return (
    <>
      <PageStyle css={shopBundleCss} />

      <PageHeader image="/images/backgrounds/ls2.webp">
        <h2 style={{ fontWeight: 500 }}>{BUNDLE.pageTitle}</h2>
      </PageHeader>

      <div className="container">
        <div className="row">
          <div className="col-12 text-center my-5">
            <h2>Welcome to the Khayou Set Bundle Shop!</h2>
            <p>
              Explore our exclusive collection of Khayou Set Bundles designed to enhance your
              workspace.
            </p>
          </div>
        </div>

        {/* Featured product landscape card */}
        <div className="row">
          <div className="col-12 mb-5">
            <div className="featured-product-landscape">
              <div className="landscape-content">
                <div className="landscape-image-section">
                  <div className="landscape-badge">BESTSELLER</div>
                  <img src={BUNDLE.image} alt={BUNDLE.name} className="landscape-product-image" />
                </div>

                <div className="landscape-info-section">
                  <h1 className="landscape-title">{BUNDLE.name}</h1>
                  <div className="landscape-price">Rp {price}</div>

                  <div className="landscape-cart-section">
                    <a
                      className="landscape-add-to-cart"
                      href={BUNDLE.tokopediaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Buy Now • Rp {price}
                    </a>
                  </div>

                  <div className="landscape-stock-info">
                    <i className="fas fa-truck" aria-hidden="true"></i>
                    <span>
                      All of our products are ready stock! To place an order, please click the Buy
                      Now button and you will be redirected to Tokopedia. Thank you for your trust.
                    </span>
                  </div>

                  <div className="landscape-features">
                    <div className="landscape-feature-list">
                      <div className="landscape-feature">
                        <i className="fas fa-shield-alt landscape-feature-icon" aria-hidden="true"></i>
                        <span>Made from solid wood</span>
                      </div>
                      <div className="landscape-feature">
                        <i className="fas fa-swatchbook landscape-feature-icon" aria-hidden="true"></i>
                        <span>Modern design</span>
                      </div>
                      <div className="landscape-feature">
                        <i className="fas fa-tags landscape-feature-icon" aria-hidden="true"></i>
                        <span>Affordable Price</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* shop/banner.blade.php */}
        <div className="card text-bg-dark">
          <img
            className="card-img"
            style={{ objectFit: "cover", height: 300 }}
            src="/images/backgrounds/ls1.webp"
            alt="Khayou workspace setup"
            loading="lazy"
          />
          <div
            className="card-img-overlay d-flex align-items-center justify-content-center"
            style={{ background: "rgba(0,0,0,0.3)" }}
          >
            <div className="text-center">
              <h2 className="fw-bold mb-3 text-light" style={{ fontSize: "2.5rem" }}>
                Your Choice Setup
              </h2>
              <p className="mb-4 text-light" style={{ fontSize: "1.2rem" }}>
                Upgrade your workspace with our premium selection of desks, pc tray, and accessories.
              </p>
              <a href="#products" className="btn btn-light rounded-pill px-4 py-2 fw-bold">
                Shop Now
              </a>
            </div>
          </div>
        </div>

        {/* "Shop Now" above pointed at #products, which didn't exist; it does now. */}
        <div className="row" id="products">
          <div className="col-12 text-center my-5">
            <h3 className="mb-5">Our Exclusive Products</h3>
            <div className="row">
              {PRODUCTS.map((item) => (
                <div key={item.slug} className="col-12 col-md-6 col-lg-4 mb-4">
                  <div className="product-card">
                    <div className="product-badges">
                      <span className="badge-custom badge-khayou">NEW</span>
                    </div>
                    <div className="product-image-container">
                      <img src={item.gridImage} alt={item.name} className="product-image" loading="lazy" />
                      <div className="quick-add-overlay">
                        <Link className="quick-add-btn" href={`/shop/${item.slug}`}>
                          <i className="fas fa-eye me-2" aria-hidden="true"></i>Show Detail
                        </Link>
                      </div>
                    </div>
                    <div className="product-info">
                      <div className="d-flex justify-content-between align-items-center">
                        <h3 className="product-name fw-bold mb-0">{item.name}</h3>
                        <p className="product-price mb-0 text-end">Rp {formatPrice(item.price)}</p>
                      </div>
                      <p
                        className="product-description mt-2 text-start fs-6 lh-md"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

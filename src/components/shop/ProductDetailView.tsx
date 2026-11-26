/* eslint-disable @next/next/no-img-element -- template markup sizes these as plain <img> */

import Link from "next/link";
import { formatPrice, getSuggestions, type ProductDetail } from "@/data/products";
import ProductGallery from "./ProductGallery";
import ProductTabs from "./ProductTabs";

const small = { fontSize: 14 } as const;
const thumb = { width: 60, height: 60, objectFit: "cover" } as const;

/** /shop/<product> (pages/shop/detail.blade.php). */
export default function ProductDetailView({ product }: { product: ProductDetail }) {
  const suggestions = getSuggestions(product.slug);

  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="cardProducts">
            <div className="card mb-3 border-0">
              <div className="row g-0">
                <div className="col-md-7 col-sm-12">
                  <ProductGallery images={product.gallery} name={product.name} />
                </div>

                <div className="col-md-5 col-sm-12">
                  <div className="card-body">
                    <div className="d-flex gap-2">
                      <span className="shadow-sm badge-custom badge-khayou">NEW</span>
                      <span className="shadow-sm badge-custom bg-danger">Hot Item</span>
                      <span className="shadow-sm badge-custom bg-success">Best Seller</span>
                    </div>
                    {/* Was an <h5>; the page's only h1 now (it used to be a
                        hidden one in <head>). Same look: the template styles
                        h1-h6 alike and fs-3 sets the size. */}
                    <h1 className="card-title fw-bold fs-3 mt-3">{product.name}</h1>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text text-end fw-bold text-dark mb-3">Rp{formatPrice(product.price)}</p>
                    <div className="row">
                      <a
                        className="btn btn-block btn-dark rounded-pill mb-3 shadow-sm"
                        href={product.tokopediaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Buy Now
                      </a>
                    </div>
                    <div className="row px-1">
                      <div className="alert alert-warning" style={small} role="alert">
                        <strong>
                          <i className="fas fa-truck me-2" aria-hidden="true"></i>
                        </strong>{" "}
                        All of our products are ready stock! To place an order, please click the Buy Now
                        button
                      </div>
                    </div>
                    <hr />
                    <div className="d-flex-row d-lg-flex align-items-start justify-content-between mb-3">
                      <div className="d-flex align-items-center">
                        <i className="fas fa-clipboard-check text-dark me-2" aria-hidden="true"></i>
                        <p className="mb-0" style={small}>Premium Quality</p>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="fas fa-shield-alt text-dark me-2" aria-hidden="true"></i>
                        <p className="mb-0" style={small}>Anti fungal and termite</p>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="fas fa-truck text-dark me-2" aria-hidden="true"></i>
                        <p className="mb-0" style={small}>Safety Shipping</p>
                      </div>
                    </div>
                    <div className="row">
                      <p className="card-text mb-3">Others Product</p>
                      <div className="list-product-suggestion">
                        <div className="card shadow-sm border-0">
                          <div className="card-header bg-dark text-white">You may also like</div>
                          <div className="card-body">
                            {/* The Blade version nested links inside a link,
                                which HTML doesn't allow; each part links on
                                its own here. */}
                            {suggestions.map((item) => {
                              const href = `/shop/${item.slug}`;
                              const price = `Rp${formatPrice(item.price)}`;
                              return (
                                <div key={item.slug} className="text-dark">
                                  {/* Desktop */}
                                  <div className="d-none d-lg-flex align-items-center mb-3">
                                    <Link href={href}>
                                      <img src={item.image} alt={item.name} className="img-fluid rounded" style={thumb} loading="lazy" />
                                    </Link>
                                    <div className="ms-3 flex-grow-1">
                                      <div className="d-flex justify-content-between align-items-center w-100">
                                        <div>
                                          <p className="mb-1" style={small}>{item.name}</p>
                                          <p className="mb-0 fw-bold" style={small}>{price}</p>
                                        </div>
                                        <Link href={href} className="btn btn-dark rounded-pill">
                                          Show Product
                                        </Link>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Mobile */}
                                  <div className="d-lg-none d-flex align-items-center mb-3">
                                    <Link href={href}>
                                      <img src={item.image} alt={item.name} className="img-fluid rounded" style={thumb} loading="lazy" />
                                    </Link>
                                    <div className="ms-3 flex-grow-1">
                                      <Link className="text-dark lh-sm" href={href}>
                                        <p className="mb-1" style={small}>{item.name}</p>
                                      </Link>
                                      <Link className="text-dark lh-sm" href={href}>
                                        <p className="mb-0 fw-bold" style={small}>{price}</p>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProductTabs
        description={
          <div className="content-description">
            <div className="content-description-title">
              <div className="text-center">
                <h3 className="fs-1">{product.name}</h3>
              </div>
            </div>
            <div className="content-description-image">
              <img className="w-100" src={product.bannerSpec} alt={`${product.name} specification banner`} loading="lazy" />
            </div>
            <div
              className="content-description-long-desc px-s1 px-md-5 mb-5 mx-md-5 text-dark fs-5"
              style={{ textAlign: "justify" }}
            >
              {product.descriptionLong}
            </div>
          </div>
        }
        specs={
          <div className="content-specs">
            <div className="content-specs-title">
              <div className="text-center">
                <h3 className="fs-1 mb-3">Specifications</h3>
              </div>
            </div>
            <div className="card shadow-sm mx-0 mx-md-5 text-dark fs-5 mb-3 border-0" style={{ background: "#fff" }}>
              <div className="card-body px-5 py-3">
                {product.specs.map((group, g) => {
                  const lastGroup = g === product.specs.length - 1;
                  return (
                    <div key={g}>
                      {/* A <button> that did nothing in Blade; a heading styled the same. */}
                      {group.heading && <h4 className="btn btn-dark mb-3 fw-bold">{group.heading}</h4>}
                      {group.rows.map(([label, value], r) => {
                        const last = lastGroup && r === group.rows.length - 1;
                        const first = g === 0 && r === 0;
                        const cls = last ? "mb-1 pb-3" : `mb-3 pb-3 border-bottom${first ? " mt-3" : ""}`;
                        return (
                          <p key={r} className={cls}>
                            {label}: <span>{value}</span>
                          </p>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        }
      />
    </>
  );
}

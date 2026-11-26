// The inline <style> block of resources/views/pages/contact/index.blade.php, copied unchanged.
// Rendered with <PageStyle> so it only applies while this page is shown.
const css = String.raw`
.contact-section {
    padding: 80px 0;
}

.contact-hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 100px 0;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.contact-hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.1);
    z-index: 1;
}

.contact-hero .container {
    position: relative;
    z-index: 2;
}

.contact-hero h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 20px;
    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.contact-hero p {
    font-size: 1.2rem;
    margin-bottom: 0;
    opacity: 0.95;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: start;
}

.contact-form-section {
    background: white;
    padding: 50px;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.08);
    border: 1px solid #f1f5f9;
}

.form-title {
    font-size: 2rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 8px;
}

.form-subtitle {
    color: #6b7280;
    margin-bottom: 40px;
    font-size: 1.1rem;
}

.form-group {
    margin-bottom: 24px;
}

.form-label {
    display: block;
    font-weight: 600;
    color: #374151;
    margin-bottom: 8px;
    font-size: 14px;
}

.form-control {
    width: 100%;
    padding: 16px 20px;
    border: 2px solid #e5e7eb;
    border-radius: 12px;
    font-size: 16px;
    transition: all 0.3s ease;
    background: #fff;
}

.form-control:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    transform: translateY(-1px);
}

.form-control::placeholder {
    color: #9ca3af;
}

.form-select {
    appearance: none;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
    background-position: right 12px center;
    background-repeat: no-repeat;
    background-size: 16px;
    padding-right: 48px;
}

.form-textarea {
    min-height: 120px;
    resize: vertical;
}

.btn-submit {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 16px 40px;
    border: none;
    border-radius: 50px;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 100%;
}

.btn-submit:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
}

.btn-submit:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
}

.contact-info-section {
    padding: 20px 0;
}

.contact-cards {
    display: grid;
    gap: 30px;
    margin-bottom: 50px;
}

.contact-card {
    background: white;
    padding: 40px 30px;
    border-radius: 16px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    transition: all 0.3s ease;
    border: 1px solid #f1f5f9;
}

.contact-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.12);
}

.contact-icon {
    width: 70px;
    height: 70px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    font-size: 1.8rem;
    color: white;
}

.contact-card h3 {
    font-size: 1.3rem;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 12px;
}

.contact-card p {
    color: #6b7280;
    margin-bottom: 16px;
    line-height: 1.6;
}

.contact-link {
    color: #667eea;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.2s ease;
}

.contact-link:hover {
    color: #4f46e5;
}

.office-hours {
    background: #f8fafc;
    padding: 30px;
    border-radius: 16px;
    margin-bottom: 40px;
}

.office-hours h4 {
    font-size: 1.4rem;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 20px;
    text-align: center;
}

.hours-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.hours-item {
    display: flex;
    justify-content: between;
    padding: 8px 0;
    border-bottom: 1px solid #e5e7eb;
}

.hours-item:last-child {
    border-bottom: none;
}

.hours-day {
    font-weight: 600;
    color: #374151;
    flex: 1;
}

.hours-time {
    color: #6b7280;
}

.social-section {
    text-align: center;
}

.social-title {
    font-size: 1.4rem;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 20px;
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
}

.social-link {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    transition: all 0.3s ease;
}

.social-link:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 16px rgba(102, 126, 234, 0.3);
    color: white;
}

.map-section {
    margin-top: 80px;
    text-align: center;
}

.map-title {
    font-size: 2rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 40px;
}

.map-container {
    background: #f8fafc;
    border-radius: 16px;
    padding: 40px;
    border: 1px solid #e5e7eb;
}

.map-placeholder {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 100px 20px;
    border-radius: 12px;
    text-align: center;
}

.map-placeholder h4 {
    font-size: 1.5rem;
    margin-bottom: 16px;
}

.map-placeholder p {
    opacity: 0.9;
    margin-bottom: 20px;
}

.faq-section {
    background: #f8fafc;
    padding: 80px 0;
    margin-top: 80px;
}

.faq-title {
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 60px;
    color: #1f2937;
}

.faq-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 30px;
}

.faq-item {
    background: white;
    padding: 30px;
    border-radius: 16px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

.faq-question {
    font-size: 1.2rem;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 12px;
}

.faq-answer {
    color: #6b7280;
    line-height: 1.6;
}

.response-message {
    padding: 16px 20px;
    border-radius: 8px;
    margin-bottom: 20px;
    display: none;
}

.response-success {
    background: #d1fae5;
    color: #065f46;
    border: 1px solid #a7f3d0;
}

.response-error {
    background: #fee2e2;
    color: #991b1b;
    border: 1px solid #fca5a5;
}

@media (max-width: 1024px) {
    .contact-grid {
        gap: 50px;
    }

    .contact-form-section {
        padding: 40px;
    }
}

@media (max-width: 768px) {
    .contact-hero h1 {
        font-size: 2.5rem;
    }

    .contact-grid {
        grid-template-columns: 1fr;
        gap: 40px;
    }

    .contact-form-section {
        padding: 30px 20px;
    }

    .social-links {
        gap: 15px;
    }

    .faq-grid {
        grid-template-columns: 1fr;
    }

    .faq-item {
        padding: 20px;
    }
}

@media (max-width: 480px) {
    .contact-hero {
        padding: 60px 0;
    }

    .contact-section {
        padding: 50px 0;
    }

    .map-placeholder {
        padding: 60px 20px;
    }
}
`;

export default css;

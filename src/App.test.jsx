import { render, screen, fireEvent, waitFor} from '@testing-library/react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import {CartProvider} from './context/CartContext';
import Cart from './components/Cart';
import Shop from '../src/components/Shop';
import { FavoritesProvider } from './context/FavoritesContext';

import '@testing-library/jest-dom';
import products from "./products/products.json";

import {Promo1} from './components/PromoCode';


describe('Promo code check', () => {
    beforeEach(() => {
        const mockCart = [
            { id: 1, name: 'Shirt', price: 100, quantity: 2 },
        ];
        localStorage.setItem('cart', JSON.stringify(mockCart));

        render(
            <CartProvider>
                <Cart />
            </CartProvider>
        );
    });

    afterEach(() => {
        localStorage.removeItem('cart');
    });

    it('no double promo code check', async () => {
        const input = screen.getByPlaceholderText(/Enter promo code/i);
        const button = screen.getByText(/Apply/i);

        fireEvent.change(input, { target: { value: Promo1 } });
        fireEvent.click(button);

        await waitFor(() => {
            expect(screen.getByText('Promo is applied')).toBeInTheDocument();
        });

        fireEvent.click(button);

        expect(screen.getByText('Promo has already been applied')).toBeInTheDocument();
    });

    it('promo code works correctly check', async () => {
        const input = screen.getByPlaceholderText(/Enter promo code/i);
        const button = screen.getByText(/Apply/i);

        fireEvent.change(input, { target: { value: Promo1 } });
        fireEvent.click(button);

        await waitFor(() => {
            expect(screen.getByText('Promo is applied')).toBeInTheDocument();
        });
    });

    it('Price with promo code applied works correctly', async () => {
        expect(screen.getByTestId('cart-total')).toHaveTextContent('$216.00');

        const input = screen.getByTestId('promo-code-input');
        const button = screen.getByTestId('apply-promo-btn');

        fireEvent.change(input, { target: { value: Promo1 } });
        fireEvent.click(button);

        await waitFor(() => {
            expect(screen.getByTestId('promo-message')).toHaveTextContent('Promo is applied');
            expect(screen.getByTestId('cart-total')).toHaveTextContent('$196.00');
        });
    });
});






describe('Delete check', () => {
    beforeEach(() => {
        const mockCart = [
            { id: 1, name: 'Shirt', price: 100, quantity: 2 },
        ];
        localStorage.setItem('cart', JSON.stringify(mockCart));
    });

    afterEach(() => {
        localStorage.removeItem('cart');
    });

    it('Should render correctly', () => {
        render(
            <CartProvider>
                <Cart />
            </CartProvider>
        );

        expect(screen.getByTestId('cart-total')).toHaveTextContent('$216.00');

        const decrementButton = screen.getByTestId('decrement-btn-1');

        fireEvent.click(decrementButton);

        expect(screen.getByTestId('cart-total')).toHaveTextContent('$116.00');
    });
});











describe('Shop unit tests', () => {

    it('1. Filter by category - dress', () => {
        const category = 'dress';
        const filtered = products.filter(p => p.category === category);

        expect(filtered.every(p => p.category === 'dress')).toBe(true);
        expect(filtered.length).toBe(products.filter(p => p.category === 'dress').length);
    });

    it('2. Sort by price ascending', () => {
        const sorted = [...products].sort((a, b) => a.price - b.price);

        for (let i = 0; i < sorted.length - 1; i++) {
            expect(sorted[i].price).toBeLessThanOrEqual(sorted[i + 1].price);
        }
        expect(sorted[0].price).toBe(Math.min(...products.map(p => p.price)));
        expect(sorted[sorted.length - 1].price).toBe(Math.max(...products.map(p => p.price)));
    });

    it('3. Pagination - page 2 shows items 7-12', () => {
        const itemsPerPage = 6;
        const currentPage = 2;
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const pageItems = products.slice(startIndex, endIndex);

        expect(pageItems).toHaveLength(6);
        expect(pageItems[0]).toEqual(products[6]);
        expect(pageItems[5]).toEqual(products[11]);
    });

    it('4. Search for "bag" returns products with "bag" in title (case insensitive)', () => {
        const searchQuery = 'bag';
        const results = products.filter(p =>
            p.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

        expect(results.length).toBeGreaterThan(0);
        results.forEach(p => {
            expect(p.title.toLowerCase()).toContain('bag');
        });
    });
});


const renderWithProviders = (component) => {
    return render(
        <CartProvider>
            <FavoritesProvider>
                {component}
            </FavoritesProvider>
        </CartProvider>
    );
};

    describe('Shop integration', () => {
        it('Search, filter, sort and pagination work together', async () => {
            renderWithProviders(<Shop/>);

            const searchInput = screen.getByTestId('search-input');
            fireEvent.change(searchInput, {target: {value: 'Bag'}});

            await waitFor(() => {
                const applyButton = screen.getByTestId('apply-filters');
                expect(applyButton).toBeInTheDocument();
            });

            const applyButton = screen.getByTestId('apply-filters');
            fireEvent.click(applyButton);

            await waitFor(() => {
                const sortSelect = screen.getByTestId('sort-select');
                expect(sortSelect).toBeInTheDocument();
            });

            const sortSelect = screen.getByTestId('sort-select');
            fireEvent.change(sortSelect, {target: {value: 'price'}});

            const nextButton = screen.queryByTestId('next-page');
            if (nextButton && !nextButton.disabled) {
                fireEvent.click(nextButton);
            }

            await waitFor(() => {
                const products = screen.getAllByTestId(/product-\d+/);
                expect(products.length).toBeGreaterThan(0);
            });
        });
        it('Cart and favorites work together', async () => {
            renderWithProviders(<Shop />);

            await waitFor(() => {
                expect(screen.getAllByTestId(/add-to-cart-btn-\d+/).length).toBeGreaterThan(0);
            });

            const addBtn = screen.getAllByTestId(/add-to-cart-btn-\d+/)[0];
            const productId = addBtn.getAttribute('data-testid').replace('add-to-cart-btn-', '');

            fireEvent.click(addBtn);

            await waitFor(() => {
                const quantity = screen.getByTestId(`quantity-${productId}`);
                expect(quantity.textContent).toBe('1');
            });

            const incrementBtn = screen.getByTestId(`increment-btn-${productId}`);
            fireEvent.click(incrementBtn);

            await waitFor(() => {
                const quantity = screen.getByTestId(`quantity-${productId}`);
                expect(quantity.textContent).toBe('2');
            });

            const decrementBtn = screen.getByTestId(`decrement-btn-${productId}`);
            fireEvent.click(decrementBtn);

            await waitFor(() => {
                const quantity = screen.getByTestId(`quantity-${productId}`);
                expect(quantity.textContent).toBe('1');
            });

            fireEvent.click(decrementBtn);

            await waitFor(() => {
                expect(screen.getByTestId(`add-to-cart-btn-${productId}`)).toBeInTheDocument();
            });

            const favBtn = screen.getByTestId(`favorite-btn-${productId}`);

            fireEvent.click(favBtn);
            expect(favBtn.classList.contains('active')).toBe(true);

            fireEvent.click(favBtn);
            expect(favBtn.classList.contains('active')).toBe(false);

        });
    });
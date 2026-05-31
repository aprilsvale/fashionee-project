import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import {CartProvider} from './context/CartContext';
import Cart from './components/Cart';

import '@testing-library/jest-dom';

describe('Promo code check', () => {
    it('no double promo code', () => {
        render(
            <CartProvider>
                <Cart />
            </CartProvider>
        );
        const input = screen.getByPlaceholderText(/Enter promo code/i);
        const button = screen.getByText(/Apply/i);

        fireEvent.change(input, {target: {value: 'ilovereact'}});
        fireEvent.click(button);

        fireEvent.click(button);

        expect(screen.getByText('Promo has already been applied')).toBeInTheDocument();
    });
});


describe('Promo code check', () => {
    it('no double promo code', () => {
        const {rerender} = render(
            <CartProvider>
                <Cart />
            </CartProvider>
        );
        const input = screen.getByPlaceholderText(/Enter promo code/i);
        const button = screen.getByText(/Apply/i);

        fireEvent.change(input, {target: {value: 'ilovereact'}});
        fireEvent.click(button);

        rerender(
            <CartProvider>
                <Cart />
            </CartProvider>
        );

        expect(screen.getByText('Promo is applied')).toBeInTheDocument();
    });
});


describe('Promo code check', () => {
    beforeEach(() => {
        const mockCart = [
            { id: 1, name: 'Shirt', price: 100, quantity: 2 },
        ];
        localStorage.setItem('cart', JSON.stringify(mockCart));
    });

    it('Should render correctly', () => {
        render(
            <CartProvider>
                <Cart />
            </CartProvider>
        );

        expect(screen.getByText(/\$216\.00/)).toBeInTheDocument();

        const input = screen.getByPlaceholderText(/Enter promo code/i);
        const button = screen.getByText(/Apply/i);

        fireEvent.change(input, {target: {value: 'ilovereact'}});
        fireEvent.click(button);

        expect(screen.getByText(/\$196\.00/)).toBeInTheDocument();
    });
});


describe('Delete check', () => {
    beforeEach(() => {
        const mockCart = [
            { id: 1, name: 'Shirt', price: 100, quantity: 2 },
        ];
        localStorage.setItem('cart', JSON.stringify(mockCart));
    });

    it('Should render correctly', () => {
        render(
            <CartProvider>
                <Cart />
            </CartProvider>
        );

        expect(screen.getByText(/\$216\.00/)).toBeInTheDocument();

        const countButton = screen.getByRole('button', {name:'-'});

        fireEvent.click(countButton);

        expect(screen.getByText(/\$116\.00/)).toBeInTheDocument();
    });
});
import React, { lazy, Suspense } from "react";
import {
    Route,
    Routes as RoutesPath
} from "react-router-dom";

const Home = lazy(() => import('../pages/Home/Home'));
const Products = lazy(() => import('../pages/Products/Products'));
const ProductDetails = lazy(() => import('../pages/ProductDetails/ProductDetails'));
const Users = lazy(() => import('../pages/Users/Users'));
const UserDetails = lazy(() => import('../pages/UserDetails/UserDetails'));
const Cart = lazy(() => import('../pages/Cart/Cart'));
const Login = lazy(() => import('../pages/Login/Login'));

export const Routes = () => {
    return (
        <div>
            <Suspense fallback={<h2 className="loader">"Loading..."</h2>}>
                <RoutesPath>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/products' element={<Products />} />
                    <Route exact path='/product/:id' element={<ProductDetails />} />
                    <Route exact path='/users' element={<Users />} />
                    <Route exact path='/user/:id' element={<UserDetails />} />
                    <Route exact path='/login' element={<Login />} />
                    <Route exact path='/cart' element={<Cart />} />
                </RoutesPath>
            </Suspense>
        </div>
    )
}

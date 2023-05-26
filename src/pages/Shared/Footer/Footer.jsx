import React from 'react';

const Footer = () => {
    return (
        // <footer className="footer p-10 md:p-20 bg-base-200 text-base-content">

        // </footer>
        <footer className="footer p-10 md:p-20 bg-base-200 text-base-content">
            <div>
                <span className="footer-title text-lg">Services</span>
                <a className="link link-hover text-base">Recipe collection</a>
                <a className="link link-hover text-base">Cooking tips</a>
                <a className="link link-hover text-base">Ingredient Information</a>
                <a className="link link-hover text-base">Meal Planning</a>
            </div>
            <div>
                <span className="footer-title text-lg">EXPLORE</span>
                <a className="link link-hover text-base">Home</a>
                <a className="link link-hover text-base">Blog</a>
                <a className="link link-hover text-base">About us</a>
                <a className="link link-hover text-base">Contact</a>
            </div>
            <div>
                <span className="footer-title text-lg">Legal</span>
                <a className="link link-hover text-base">Terms of use</a>
                <a className="link link-hover text-base">Privacy policy</a>
                <a className="link link-hover text-base">Cookie policy</a>
            </div>
            <div>
                <span className="footer-title text-lg">Newsletter</span>
                <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Enter your email address</span>
                    </label>
                    <div className="relative">
                        <input type="text" placeholder="example@gmail.com" className="input input-bordered w-full pr-16" />
                        <button className="btn btn-warning absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
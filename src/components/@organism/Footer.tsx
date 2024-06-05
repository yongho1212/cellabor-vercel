// @flow
import React, {useState, useEffect} from 'react';

type Props = {

};
const Footer = (props: Props) => {
    return (
        <div className="w-full border-2 ">
            <footer className="p-5">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <h3 className="font-bold">회사 정보</h3>
                        <ul className="mt-2">
                            <li>About Us</li>
                            <li>History</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold">고객 지원</h3>
                        <ul className="mt-2">
                            <li>FAQ</li>
                            <li>Contact Us</li>
                            <li>Customer Service</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold">팔로우 우리</h3>
                        <ul className="mt-2">
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                        </ul>
                    </div>
                </div>
                <div className="text-center mt-5 border-t border-gray-700 pt-5">
                    &copy; 2024 Cellabor. Copy right.
                </div>
            </footer>
        </div>
    );
};

export default Footer;

import React, { useEffect, useState } from 'react';
import Cart from "../cart/Cart";
import Friend from '../friend/Friend';
import "./friends.css";
// all friends components 
const Friends = () => {
    const [friends, setFriends] = useState([]);
    const [cart, setCart] = useState([]);
    //fetch the data from json file
    useEffect(() => {
        fetch("./friends.json")
            .then(res => res.json())
            .then(data => setFriends(data));
    }, []);
    //friend contribute quantity handle
    const handleCart = (friend) => {
        const newCart = [...cart, friend];
        setCart(newCart);
    }
    return (
        <div className="container mb-3">
            <div className="logo-title text-center">
                <h1 className="fw-bold text-white py-2 m-0">Smart Friendship Somity</h1>
            </div>
            <h1 className="fw-bold text-center text-white bg-success py-2 m-0">We are SSC 2009 Batch Friends </h1>
            <h1 className="target fw-bold text-center text-white py-2">Our Target Amount is: 10,00,000TK</h1>
            <div className="friends row mt-3">
                <div className="col-lg-9 col-md-8 col-sm-6">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                        {
                            friends.map(friend =>
                                <Friend
                                    key={friend.key}
                                    friend={friend}
                                    handleCart={handleCart}
                                />

                            )
                        }
                    </div>
                </div>
                {/* cart component  */}
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <Cart cart={cart} />
                </div>
            </div>
        </div>
    );
};

export default Friends;
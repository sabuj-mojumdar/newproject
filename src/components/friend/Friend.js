import React from 'react';
import "./friend.css"

const Friend = (props) => {
    const { name, age, height, work, contribute, img } = props.friend;
    return (
        // single friend component
        <div className="col">
            <div className="card rounded rounded-3 h-100">
                <div className="card-body text-center">
                    <img className="friend-img img-fluid mb-2" src={img} alt={name} />
                    <p><span className="fw-bold">{name}</span></p>
                    <p>Age: <span className="fw-bold">{age}</span></p>
                    <p>Height: <span className="fw-bold">{height}</span></p>
                    <p>Profession: <span className="fw-bold">{work}</span></p>
                    <p>Contribute: <span className="fw-bold">{contribute}TK</span></p>
                </div>
                <div className="card-footer text-center">
                    <button onClick={() => props.handleCart(props.friend)} className="btn btn-success mt-2 w-100"><i class="fas fa-shopping-cart"></i> Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Friend;
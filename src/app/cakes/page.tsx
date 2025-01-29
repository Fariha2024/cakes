//import react from 'react'
{/*const cakes = () => {
    const watchData =[
        { id: 1, name: 'Chocolate', price: 1400, discription: 'Delicious Cake', image: '/3.jpg' },
        { id: 2, name: 'Chocolate', price: 1400, discription: 'Delicious Cake', image: '/3.jpg' },
        { id: 3, name: 'Strawberry', price: 1400, discription: 'Delicious Cake', image: '/1.png' },
        { id: 4, name: 'Mango', price: 1400, discription: 'Delicious Cake', image: '/2.jpg' },
        { id: 5, name: 'Pineapple', price: 1400, discription: 'Delicious Cake', image: '/5.jpg' },
        { id: 6, name: 'Pineapple', price: 1400, discription: 'Delicious Cake', image: '/6.jpg' },
        { id: 7, name: 'Vanilla', price: 1400, discription: 'Delicious Cake', image: '/7.jpg' },
        { id: 8, name: 'Vanilla', price: 1400, discription: 'Delicious Cake', image: '/9.jpg' },
        { id: 9, name: 'Doll Cake', price: 1400, discription: 'Delicious Cake', image: '/8.jpg' },
        { id: 10, name: 'Doll Cake', price: 1400, discription: 'Delicious Cake', image: '/11.jpg' },
    ]
    return(
       <div>
            <div className='cakes'>
                {watchData.map((Cakes) => (
                    <div key ={Cakes.id} className='cake-card'>
                        <img src={Cakes.image}
                         alt={Cakes.name}
                          width="300" // Adjust this value as needed
                            height="300" // Adjust this value as needed
                         />
                        <h3>{Cakes.name}</h3>
                        <p>{Cakes.discription}</p>
                        <div className='price'>${Cakes.price}</div>
                            <button>Add to Cart</button>
                    </div>
                ))}
            </div>
       </div>
    )
}

export default cakes;*/}


//import React, { useState } from 'react';

{/*const Cakes = () => {
    const watchData = [
        { id: 1, name: 'Chocolate', price: 1400, discription: 'Delicious Cake', image: '/3.jpg', alternateImage: '/4.jpg' },
        { id: 2, name: 'Chocolate', price: 1400, discription: 'Delicious Cake', image: '/3.jpg', alternateImage: '/4.jpg' },
        { id: 3, name: 'Strawberry', price: 1400, discription: 'Delicious Cake', image: '/1.png', alternateImage: '/2.png' },
        { id: 4, name: 'Mango', price: 1400, discription: 'Delicious Cake', image: '/2.jpg', alternateImage: '/3.jpg' },
        { id: 5, name: 'Pineapple', price: 1400, discription: 'Delicious Cake', image: '/5.jpg', alternateImage: '/6.jpg' },
        { id: 6, name: 'Pineapple', price: 1400, discription: 'Delicious Cake', image: '/6.jpg', alternateImage: '/7.jpg' },
        { id: 7, name: 'Vanilla', price: 1400, discription: 'Delicious Cake', image: '/7.jpg', alternateImage: '/8.jpg' },
        { id: 8, name: 'Vanilla', price: 1400, discription: 'Delicious Cake', image: '/9.jpg', alternateImage: '/10.jpg' },
        { id: 9, name: 'Doll Cake', price: 1400, discription: 'Delicious Cake', image: '/8.jpg', alternateImage: '/9.jpg' },
        { id: 10, name: 'Doll Cake', price: 1400, discription: 'Delicious Cake', image: '/11.jpg', alternateImage: '/12.jpg' },
    ];

    const [images, setImages] = useState(watchData.map((cake) => cake.image)); // Store images in state

    const handleImageToggle = (index: number) => {
        setImages((prevImages) =>
            prevImages.map((image, i) => (i === index ? watchData[i].alternateImage : image))
        );
    };

    return (
        <div>
            <div className="cakes">
                {watchData.map((Cakes, index) => (
                    <div key={Cakes.id} className="cake-card">
                        <img src={images[index]}
                         alt={Cakes.name}
                          width="300" // Adjust this value as needed
                            height="300" // Adjust this value as needed
                          />
                        <h3>{Cakes.name}</h3>
                        <p>{Cakes.discription}</p>
                        <div className="price">${Cakes.price}</div>
                        <button onClick={() => handleImageToggle(index)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cakes;*/}




{/*import react from 'react'
import React, { useState } from 'react';

const Cakes = () => {
    const watchData = [
        { id: 1, name: 'Chocolate', price: 1400, discription: 'Delicious Cake', image: '/3.jpg', alternateImage: '/4.jpg' },
        { id: 2, name: 'Chocolate', price: 1400, discription: 'Delicious Cake', image: '/3.jpg', alternateImage: '/4.jpg' },
        { id: 3, name: 'Strawberry', price: 1400, discription: 'Delicious Cake', image: '/1.png', alternateImage: '/2.png' },
        { id: 4, name: 'Mango', price: 1400, discription: 'Delicious Cake', image: '/2.jpg', alternateImage: '/3.jpg' },
        { id: 5, name: 'Pineapple', price: 1400, discription: 'Delicious Cake', image: '/5.jpg', alternateImage: '/6.jpg' },
        { id: 6, name: 'Pineapple', price: 1400, discription: 'Delicious Cake', image: '/6.jpg', alternateImage: '/7.jpg' },
        { id: 7, name: 'Vanilla', price: 1400, discription: 'Delicious Cake', image: '/7.jpg', alternateImage: '/8.jpg' },
        { id: 8, name: 'Vanilla', price: 1400, discription: 'Delicious Cake', image: '/9.jpg', alternateImage: '/10.jpg' },
        { id: 9, name: 'Doll Cake', price: 1400, discription: 'Delicious Cake', image: '/8.jpg', alternateImage: '/9.jpg' },
        { id: 10, name: 'Doll Cake', price: 1400, discription: 'Delicious Cake', image: '/11.jpg', alternateImage: '/12.jpg' },
    ];

    const [images, setImages] = useState(watchData.map((cake) => cake.image)); // Store images in state

    const handleImageToggle = (index:number) => {
        setImages((prevImages) =>
            prevImages.map((image, i) => (i === index ? watchData[i].alternateImage : image))
        );
    };

    return (
        <div>
            <div className="cakes">
                {watchData.map((Cakes, index) => (
                    <div key={Cakes.id} className="cake-card">
                        <Img src={images[index]}
                         alt={Cakes.name}
                         width="300" // Adjust this value as needed
                         height="300" // Adjust this value as needed
                           />
                        <h3>{Cakes.name}</h3>
                        <p>{Cakes.discription}</p>
                        <div className="price">${Cakes.price}</div>
                        <button onClick={() => handleImageToggle(index)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cakes;*/}



import React from 'react';
import Image from 'next/image';  // Import Image from next/image
const Cakes = () => {
    const watchData = [
        { id: 1, name: 'Chocolate', price: 1400, discription: 'Delicious Cake', image: '/3.jpg' },
        { id: 2, name: 'Chocolate', price: 1400, discription: 'Delicious Cake', image: '/3.jpg' },
        { id: 3, name: 'Strawberry', price: 1400, discription: 'Delicious Cake', image: '/1.png' },
        { id: 4, name: 'Mango', price: 1400, discription: 'Delicious Cake', image: '/2.jpg' },
        { id: 5, name: 'Pineapple', price: 1400, discription: 'Delicious Cake', image: '/5.jpg' },
        { id: 6, name: 'Pineapple', price: 1400, discription: 'Delicious Cake', image: '/6.jpg' },
        { id: 7, name: 'Vanilla', price: 1400, discription: 'Delicious Cake', image: '/7.jpg' },
        { id: 8, name: 'Vanilla', price: 1400, discription: 'Delicious Cake', image: '/9.jpg' },
        { id: 9, name: 'Doll Cake', price: 1400, discription: 'Delicious Cake', image: '/8.jpg' },
        { id: 10, name: 'Doll Cake', price: 1400, discription: 'Delicious Cake', image: '/11.jpg' },
    ];

    return (
        <div>
            <div className="cakes">
                {watchData.map((Cakes) => (
                    <div key={Cakes.id} className="cake-card">
                        {/* Use Next.js Image for automatic optimization */}
                        <Image 
                            src={Cakes.image}
                            alt={Cakes.name}
                            width={300}   // Width as number, not string
                            height={300}  // Height as number, not string
                            className="custom-image"  // Optional: add custom styles here
                        />
                        <h3>{Cakes.name}</h3>
                        <p>{Cakes.discription}</p>
                        <div className="price">${Cakes.price}</div>
                        <button>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cakes;

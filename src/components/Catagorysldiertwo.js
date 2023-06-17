import React,{Component} from 'react';
import Slider from "react-slick";

const categoryList = [
    {   
        imageUrl: 'c.png',
        name: 'Meal',
    },
    {   
        imageUrl: 'c.png',
        name: 'Meat',
    },
    {   
        imageUrl: 'c.png',
        name: 'Vegi',
    },
    {   
        imageUrl: 'c.png',
        name: 'Flower',
    },
    {   
        imageUrl: 'c.png',
        name: 'Drinks',
    },
    {   
        imageUrl: 'c.png',
        name: 'Fresh',
    },
    {   
        imageUrl: 'c.png',
        name: 'Frozen',
    },
    {   
        imageUrl: 'c.png',
        name: 'Wine',
    },
    {   
        imageUrl: 'c.png',
        name: 'Barkery',
    },
    {   
        imageUrl: 'c.png',
        name: 'Organic',
    },
    {   
        imageUrl: 'c.png',
        name: 'Beer',
    },
    {   
        imageUrl: 'c.png',
        name: 'Vegi',
    },
    
]

class Catagorysldiertwo extends Component {
    render() {
        const storysettings = {
            arrows: true,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            centerMode: false,
            variableWidth: true
        };
        return (
            <Slider {...storysettings} className="slick-arrow-top">
                {categoryList.map((value , index) => (
                    <div key={index} className="me-1">
                        <div className="category-card style-three shadow-none text-center bg-transparent border-0">
                            <a href="/g-6" className="rounded-circle image-round"><img src={`assets/images/${value.imageUrl}`} className="w-110 rounded-circle" alt="category" /></a>
                            <h4 className="font-xssss text-grey-900 mt-0 fw-700 d-block">{value.name}</h4>
                        </div>
                    </div>
                ))}
            </Slider>
        );
    }
}

export default Catagorysldiertwo;
import React , {useEffect , useState} from 'react';
import Container from '../../utils/Container';
import instance from '../../api/instance';
import { Link } from 'react-router-dom';
import './Categories.scss'



const Categories = () => {

    const [categoriesData , setCategoriesData] = useState([])

    useEffect(() => {
        instance.get("/categories")
        .then(reseponse => setCategoriesData(reseponse.data))
        .catch(err => console.log(err))
    }, []);

    return (
        <section className='categories'>
            <Container>
               <h2 className='categories-title'>Asosiy toifalar</h2>
                <div className="categories-wrapper">
                    {
                        categoriesData.map( category => 
                            <Link key={category.id} className="category-item" to="/category">
                                <div className="category__image--wrapper">
                                    <img src={category.image} alt="category-img" className='category-image' />
                                </div>
                                <h3 className='category-title'>{category.name}</h3>
                            </Link>
                        )
                    }
                </div>
            </Container>
        </section>
    );
};

export default Categories;
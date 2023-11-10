import React, { useState, useEffect } from 'react';
import HeroShop from '../components/HeroShop';
import { Link } from 'react-router-dom';
import '../styles/eShop.css';
import { db } from '../config-firebase';
import { collection, getDocs } from 'firebase/firestore';
import Products from '../components/Products';



function Eshop() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  // Lire les données venant de firebase

  const getProducts = async () => {
    const productsArray = [];
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      productsArray.push({id:doc.id, ...doc.data()});
      setProducts(productsArray);
    })
  }

  useEffect(() => {
    getProducts();
  }, []);

  //Filtre

  const filterResult = (catItem) => {
    const result = products.filter((curData) => {
      console.log(curData);
      return curData.category === catItem;
    })
    setProducts(result);
  }

  return (
    <>
      <HeroShop />
      <section className="container pt-5">
        <div className="float-end">
          <Link to='/cart'>
            <i className="fa-solid fa-2x fa-cart-plus"></i>
          </Link>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h2>FILTRES</h2>
            <h4>Prix</h4>
            <div>
              <h4>Catégorie</h4>
              <select className='dropdown-list'>
                <option value="option1" onClick={() => filterResult('bestsellers')} >Bestsellers</option>
                <option value="option2" onClick={() => filterResult('goodies')}>Goodies</option>
                <option value="option3" onClick={() => filterResult('vetements')}>Vêtements</option>
                <option value="option4" onClick={() => filterResult('affiches/postes')}>Affiches/Posters</option>
                <option value="option5" onClick={() => filterResult('comics')}>Comics</option>
                <option value="option6" onClick={() => filterResult('multimedia')}>Multimédia</option>
                <option value="option7" onClick={() => filterResult('equipement')}>Equipement</option>
                <option value="option8" onClick={() => filterResult('bijoux')}>Bijoux</option>
                <option value="option9" onClick={() => filterResult('vehicules')}>Véhicules</option>
                {/* Ajoute autant d'options que nécessaire */}
              </select>
            </div>
            <div>
              <h4>Couleur</h4>
              <select className='dropdown-list'>
                <option value="option1">Rouge</option>
                <option value="option2">Orange</option>
                <option value="option3">Jaune</option>
                <option value="option4">Vert</option>
                <option value="option5">Bleu</option>
                <option value="option6">Noir</option>
                <option value="option7">Violet</option>
                <option value="option8">Rose</option>
                <option value="option9">Blanc</option>
                <option value="option9">Marron</option>
                {/* Ajoute autant d'options que nécessaire */}
              </select>
            </div>
            <div>
              <h4>Univers</h4>
              <select className='dropdown-list'>
                <option value="option1">Superman</option>
                <option value="option2">Superman 2</option>
                <option value="option3">Superman 2 : The Richard Donner Cut</option>
                <option value="option4">Superman 3</option>
                <option value="option5">Superman 4</option>
                <option value="option6">Batman V Superman : L'aube de la justice</option>
                <option value="option7">Superman : Le retour</option>
                <option value="option8">Justice League</option>
                {/* Ajoute autant d'options que nécessaire */}
              </select>
            </div>
          </div>
          <div className="col-md-9">
            <h3 className='text-center'>Products</h3>
            {
              products.length > 1 && (
                <div className="product-box">
                  <Products products={products} search={search} />

                </div>

              )
            }
            {
              products.length < 1 && (
                <div>
                  <h6>En cours ... </h6>
                </div>
              )
            }
          </div>
        </div>
      </div>

    </>
  )
}

export default Eshop
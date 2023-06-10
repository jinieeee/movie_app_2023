import React from 'react';
import PropTypes from 'prop-types';

// function Food(props) {
//   // ES6 구조 분해 할당
//   const { fav } = props;
//   return <h1>I like {fav}</h1>
// }

function Food({name, picture, rating}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating} / 5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id : 1,
    name : 'Kimchi',
    image : 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
    rating : 5,
  },
  {
    id : 2,
    name : 'Samgyeopsal',
    image : 'https://post-phinf.pstatic.net/MjAyMDAzMDNfMTcg/MDAxNTgzMTkwNjA3ODQ5.kUXPHqGJ2xPDSu_3FiEoFC3kY9QyQ_g9CziCGrFSDuEg.LpCfOTbc5qth9d-GKzGv9jwj2VKhcqmPHp5cp1KJYEsg.JPEG/IM_food02.jpg?type=w1200',
    rating : 4.9,
  },
  {
    id : 3,
    name : 'Bibimbap',
    image: 'https://cdn.shopify.com/s/files/1/0585/8495/7094/products/top_2048x2048.jpg?v=1653600629',
    rating : 4.5,
  },
  {
    id : 4,
    name: 'Doncasu',
    image: 'http://mbcmall.imbc.com/store/__icsFiles/afieldfile/2018/12/27/001_1.jpg',
    rating : 3.5,
  },
  {
    id : 5,
    name: 'Kimbap',
    image: 'http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg',
    rating : 4.6,
  }
];

// function renderFood(dish) {
//   return <Food name={dish.name} picture={dish.image} />;
// }


function App() {
  // console.log(foodILike.map(renderFood));
  return (
    <div>
      {foodILike.map(dish => (<Food name={dish.name} picture={dish.image} key={dish.id} rating={dish.rating}/>))}
      {/* {foodILike.map(renderFood)}} */}
    </div>
)}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
}

export default App;

import '../assets/Card.css';

const Card = ({ name, height, photo, country, continent, isMythic }) => {
  return (
    <div className="card">

      <div className="card-title">
        <h1 className="card-name">{ name }</h1>
        <span className="card-mythic">{ isMythic ? "🏆" : null }</span>
      </div>

      <img src={ photo } alt="photo" className="card-picture" />

      <div className="card-description">
        <span>Altitude : { height }m</span>
        <span>Pays : { country }</span>
        <span>Continent : { continent }</span>
      </div>

    </div>
  )
};

export default Card;
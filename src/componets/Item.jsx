import './item.css'

const Item = ({data}) => {
    let categoryClass = '';
  switch (data.category.toLowerCase()) {
    case 'reaction':
      categoryClass = 'lightRed';
      break;
    case 'memory':
      categoryClass = 'orangeyYellow';
      break;
    case 'verbal':
      categoryClass = 'greenTeal';
      break;
    case 'visual':
      categoryClass = 'cobaltBlue';
      break;
    default:
      categoryClass = '';
  }
  return (
    <div className={`item ${categoryClass}`}>
              <div className='info'>
                <img src={data.icon} alt="icon" />
                <p className="category">{data.category}</p>
              </div>
            <div className='score'>
             <p>{data.score}</p>
              <p> / 100</p>
            </div>
            </div>
  )
}

export default Item
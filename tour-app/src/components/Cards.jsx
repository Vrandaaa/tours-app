import { useState } from 'react'
function Cards({ id, name, info, image, price,removeTourHandler } ) {
    
    const [readmore, changeReadmore] = useState(false);
    const description = readmore ? info :`${info.substring(0, 200)}....`;
    function readmoreHandler() {
        changeReadmore(!readmore);
    }


    return (
        <div className='card'>
            
                <img className='tour-image' src={image}></img>
                <div className='tour-info'>
                    <div className='tour-details'>
                        <h2 className='tour-price'>{price}</h2>
                        <h2 className='place'>{name}</h2>
                    </div>

                    <div className='tour-description'>
                        {description}
                        <span className="readmore" onClick={readmoreHandler}> {readmore ? 'show less' : 'read more'}</span>
                    </div>

                </div>
                <div className="btn-conatiner"><p className="btn-red" onClick={() => removeTourHandler(id)}>not interested</p></div>

        </div>
    );
}
export default Cards;
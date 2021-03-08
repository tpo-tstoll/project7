import React, { useEffect, useContext } from 'react';
import Loading from './Loading';
import Photo from './Photo';
import NotFound from './NotFound'
import SearchContext from './Context';


const PhotoContainer = (props) => {
    const { fetchData, photoData, setPhotoData, noResults }  = useContext(SearchContext);
    const { path } = props;

//Resets photoData(for loading purposes) to an empty array and fetches new data based upon path when path is updated. 
    useEffect( () => {
        setPhotoData([]);
        fetchData(path);
        // eslint-disable-next-line
    }, [path])


    let data = photoData ? photoData : [];

    let urlArr = data.map(item => {
        const { farm, server, id, secret, title } = item;
        const url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
        return {
            id,
            src: url,
            alt: title
        }
    })


//If there is photoData, pass the photoData to photo component as props otherwise display not found. Also displays loading page in between renders. 
    return ( 
        <div className="photo-container">
            { urlArr.length > 0 && noResults === false ? <h2>Results for "{path}"</h2> : null}
        <ul>
            { urlArr.length === 0  && noResults === false ? <Loading /> : null}
            
            { urlArr.length > 0 && noResults === false ? urlArr.map(photo => {
                return <Photo key={photo.id} src={photo.src} alt={photo.alt} />})  : null
            }

            { noResults ? <NotFound /> : null }
        </ul>
      </div>
     );
}
 
export default PhotoContainer;
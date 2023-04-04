import React, { useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadCharacters } from '../store/actions';
import { searchCharacter } from '../store/actions';

import Pagination from '../components/Pagination';
import Search from '../components/Search';
import LogError from '../components/LogError';
import BoxCharacterContent from '../components/BoxCharacterContent';
import { Link } from "react-router-dom";
import './styles.scss';

const CharactersPage = () => {
  const images = useSelector((state) => state.images);
  const searchName = useSelector((state) => state.searchName);
  const error = useSelector((state) => state.error);
  const page = useSelector((state) => state.page);
  const dispatch = useDispatch();
  console.log(images);
  // Fetch data when first load or when paginates
  useEffect(() => {
    if (searchName) {
      dispatch(searchCharacter(searchName));
    } else {
      dispatch(loadCharacters());
    }
  }, [page]);

  return (
    <div className="charsPage">
      {error ? <LogError className="error" message={error} /> : ''}

      <Search textLabel="Buscar Personaje (presiona enter)" action={searchCharacter} />
      <Pagination />
      <section className="grid">
        {images.map((image) => (

          <BoxCharacterContent
            name={image.name}
            status={image.status}
            species={image.species}
            gender={image.gender}
            type={image.type}
            imageSource={image.image}
            originLocation={image.origin.name}
            actualLocation={image.location.name}
            moreInfo={image.id}
          />
        ))}
      </section>
    </div>
  );
};

export default CharactersPage;

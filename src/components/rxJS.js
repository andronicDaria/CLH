import React, { useEffect, useState } from 'react';
import { from, BehaviorSubject } from 'rxjs';
import {
  filter,
  mergeMap,
  debounceTime,
  distinctUntilChanged,
} from 'rxjs/operators';

const getPokemonByName = async (name) => {
  const { results: allPokemons } = await fetch(
    'https://pokeapi.co/api/v2/pokemon/?limit=1000'
  ).then((result) => result.json());
  return allPokemons.filter((pokemon) => pokemon.name.includes(name));
};

let searchSubject = new BehaviorSubject('');
let searchResultObservable = searchSubject.pipe(
  filter((val) => val.length > 1),
  debounceTime(750),
  distinctUntilChanged(),
  mergeMap((val) => from(getPokemonByName(val)))
);

const useObservable = (observable, setter) => {
  useEffect(() => {
    let subscription = observable.subscribe((result) => {
      setter(result);
    });
    return () => subscription.unsubscribe();
  }, [observable, setter]);
};

function PokemonSearch() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  useObservable(searchResultObservable, setResults);

  const handleSearchChange = (e) => {
    const newValue = e.target.value;
    setSearch(newValue);
    searchSubject.next(newValue);
  };

  return (
    <div>
      <h1>Name on Pokemon</h1>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleSearchChange}
      />
      <p>Results searching: </p>
      {results.map((pokemon) => (
        <div key={pokemon.name}>{pokemon.name}</div>
      ))}
    </div>
  );
}

export default PokemonSearch;

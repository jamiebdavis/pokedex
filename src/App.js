import React, {useEffect, useState} from "react";
import Header from "./components/header";
import SubHeader from "./components/subHeader";
import Button from "./components/button";
import Card from "./components/card";
import Search from "./components/search";
import Image from "./components/image";
import ListItem from "./components/listItem";

import "./styles.css";

import axios from "axios";
import Spinner from "./components/spinner/spinner";

export default function App() {
    //  Master list of pokemon
    const [pokemon, setPokemon] = useState();

    // List displayed to user
    const [list, setList] = useState([]);

    //  Pokemon Data
    const [imgSrc, setImgSrc] = useState('https://www.pngitem.com/pimgs/m/163-1634065_master-ball-sprite-png-png-download-pokeball-pixel.png');
    const [name, setName] = useState();
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [ability, setAbility] = useState([]);

    // How many list items to display
    const [postsPerPage] = useState(17);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    // Sets master list of pokemon
    useEffect(() => {
        const fetchPokemon = async () => {
            setLoading(true);
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=963");
            setPokemon(res.data.results);
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=963');
            setList(response.data.results.map(char => {
                    return (
                        <ListItem
                            showInfo={showInfo}
                            key={char.name}
                            name={char.name}
                        />
                    )
                }
            ));
            setLoading(false);
        };
        fetchPokemon();
        initialLoad();
    }, []);

    // Find name matches
    const findMatches = (wordToMatch, pokemon) => {
        return pokemon.filter(char => {
            const regex = new RegExp(wordToMatch, "gi");

            return char.name.match(regex);
        });
    };

    //  Display matches to user.
    const displayMatches = e => {
        const matchArray = findMatches(e.target.value, pokemon);

        const jsx = matchArray.map(char => {
            return (
                <ListItem
                    showInfo={showInfo}
                    key={char.name}
                    name={char.name}
                />
            );
        });

        setList(jsx);
        setCurrentPage(1);
    };

    //  On click get pokemon data for card.
    const showInfo = async (name) => {
        const abilities = [];
        setLoading(true);
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`);

        setName(res.data.name);
        setHeight(res.data.height * 10);
        setWeight((res.data.weight * 0.01).toFixed(2));
        setImgSrc(res.data.sprites.front_default);

        res.data.abilities.forEach(ability => {
            abilities.push(<button key={ability.ability.name}>{ability.ability.name}</button>)
        });

        setAbility(abilities);
        setLoading(false);
    };

    //  What to do on first load.
    const initialLoad = () => {
        showInfo("bulbasaur")
    };

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = list.slice(indexOfFirstPost, indexOfLastPost);

    const prevPage = () => setCurrentPage(currentPage - 1);
    const nextPage = () => {
        setCurrentPage(currentPage + 1);
        console.log(currentPage)
    }

    return (
        <>
            <div className="App">
                <div className="masterContainer">
                    <div className="pokedex">
                        <Header/>
                        <SubHeader/>
                        {list.length > 0 ? currentPosts : <p>No results found!</p>}
                        <Button
                            postsPerPage={postsPerPage}
                            totalPosts={list.length}
                            currentPage={currentPage}
                            prevPage={prevPage}
                            nextPage={nextPage}
                        />
                    </div>

                    <div className="container searchContainer">
                        <Search displayMatches={displayMatches}/>

                        {loading ? <Spinner/> : <div className="pokeData">
                            <Image src={imgSrc}/>
                            <Card
                                name={name}
                                height={height}
                                weight={weight}
                                ability={ability}
                            />
                        </div>}
                    </div>
                </div>
            </div>
        </>
    );
}

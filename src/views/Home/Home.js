import React, {useEffect, useState} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {useDispatch, useSelector} from "react-redux";
import {findWords} from "../../redux/actions/words";
import Typography from "@material-ui/core/Typography";

const Home = () => {

    const dispatch = useDispatch();
    const [scrabbleHand, setScrabbleHand] = useState('');
    const words = useSelector( state => state.words);


    useEffect( () => {
        dispatch(findWords(scrabbleHand));
    }, [scrabbleHand])

    return (
        <div>
            <form noValidate autoComplete="off">
                <TextField
                    id="standard-basic"
                    label="scrabble hand"
                    onChange={ (e) => setScrabbleHand(e.target.value)}
                />
            </form>
            <Button onClick={ () => {dispatch(findWords(scrabbleHand))}}>Show</Button>

            <div>
                {words.map( word => (
                    <Typography>{word.value} : {word.points}</Typography>
                ))}
            </div>

        </div>
    );
};

export default Home;
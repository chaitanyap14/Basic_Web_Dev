//Dad Joke API requires setting a header

const getDadJoke = async () => {
    const config = { headers: {Accept: 'application/json' } };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
}

const displayJoke = async () => {
    const joke = document.querySelector('#joke');
    const jokeText = await getDadJoke();
    joke.innerText = jokeText;
}

const btn = document.querySelector('button')
btn.addEventListener('click', () => {
    displayJoke();
});
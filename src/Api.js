import axios from 'axios';

const fetchUser = () => {
    console.log('Featching User...');
    return axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.data)
        .catch(err => console.log(err));
};

const fetchPosts = () => {
    console.log('Featching Posts...');
    return axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
        .then(res => res.data)
        .catch(err => console.log(err));
};
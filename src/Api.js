import axios from 'axios';

export const fetchData = () => {
    const userPromise = fetchUser();
    const postsPromise = fetchPosts();
    return {
        users: wrapPromise(userPromise),
        posts: wrapPromise(postsPromise)
    }
}

const wrapPromise = (prommise) => {
    // Set initial status
    let status = 'pending';
    // Store result
    let result;
    // Wait for promise
    let suspender = promise.then(
        res => {
            status = 'success',
            result = res;
        },
        err => {
            status = 'error',
            result = err
        }
    );

    return {
        read() {
            if (status === 'pending') {
                throw suspender;
            } else if (status === 'error') {
                throw result;
            } else if (status === 'success') {
                return result;
            }
        }
    }
}

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
import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer xg0mPiiMLBaafjzktboebUs_flTYSAtllmX1en7NfcBdxKgN5lIPBiuQpoD9o3zGVV00JsMnhaNFWKvb9catUUtC9Vro2pKtXKfhmK1pVD126_zmPZGLzLnCxltNXnYx'
    }
});
import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer OPAVg6gx6VSqb2BrHNjCTu6D0pqliG2gmVnbYcP1Uw9LYVwpR76mR5m03AI9o78tlarbEK321ORt2e6vLn7uROk7MqH1WLwC-wyk5zopdXSkamBVSewXDjWiY8xOXnYx'
    }
});
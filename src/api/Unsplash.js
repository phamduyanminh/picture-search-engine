import axios from 'axios';


export default axios.create({
    basedURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            'Client-ID miKs2tuv_hZ7DxRvXNohVU9rt82lA77k-rtoU3bScLQ'
    }
});
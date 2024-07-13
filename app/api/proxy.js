import axios from 'axios';

export default async function handler(req, res) {
    const { method } = req;

    if (method !== 'GET') {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${method} Not Allowed`);
        return;
    }

    try {
        const response = await axios.get('https://api.timbu.cloud/products', {
            params: {
                organization_id: 'b5163eb7a959483f90a7df7cd29f8599',
                Appid: 'NJMPAIMIPFE2HPZ',
                Apikey: 'd238528d95c840dfae914c67c3f988b620240712230211366946',
            },
        });

        res.status(200).json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ message: error.message });
    }
}

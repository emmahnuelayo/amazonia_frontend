const prod = {
  url: {
    API_URL: 'https://si-amazonia.herokuapp.com/api',
  }
};
const dev = {
  url: {
    API_URL: 'http://localhost:5000/api'
  }
};
export const config = process.env.NODE_ENV === 'development' ? dev : prod;
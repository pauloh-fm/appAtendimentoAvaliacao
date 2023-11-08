import axios from 'axios';

const enviarAvaliacao = (avaliacao) => {
  return axios.post('http://localhost:3002/avaliar', {
    avaliacao: avaliacao,
    dataAvaliacao: new Date(),
  });
};

export default enviarAvaliacao;

import axios from 'axios';

// Adicione esses interceptadores para depurar as solicitações
axios.interceptors.request.use(request => {
  console.log('Starting Request', request);
  return request;
});

axios.interceptors.response.use(response => {
  console.log('Response:', response);
  return response;
});

const enviarAvaliacao = async (avaliacao) => {
  const requestData = {
    avaliacao: avaliacao,
    dataAvaliacao: new Date(),
  };

  try {
    const response = await axios.post('http://192.168.0.65:3002/api/avaliar', requestData);
    console.log('Resposta do backend:', response.data);
    return response.data; // ou qualquer outra manipulação de resposta necessária
  } catch (error) {
    if (error.response) {
      // Tratamento de erro
      console.error('Erro na resposta do servidor:', error.response.data);
    } else if (error.request) {
      // A solicitação foi feita, mas não houve resposta do servidor
      console.error('Erro na solicitação, não houve resposta do servidor');
    } else {
      // Algo aconteceu durante a configuração da solicitação que acionou um erro
      console.error('Erro durante a configuração da solicitação:', error.message);
    }
    console.error('Erro completo:', error);

    throw error; // Rejoga o erro para que o chamador possa tratá-lo, se necessário
  }
};

export default enviarAvaliacao;

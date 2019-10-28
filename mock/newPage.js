const data = {
  success: true,
  data: {
    username: 'davi@agil.com.br',
    password: 'a2d1as56d1as2das4d56',
  },
};
const getdata = {
  success: true,
  data: {
    page: 1,
    perPage: 1,
    total: 20,
    data: [
      {
        username: 'davi@agil.com.br',
        password: 'a2d1as56d1as2das4d56',
      },
      {
        username: 'davi@agil.com.br',
        password: 'a2d1as56d1as2das4d56',
      },
    ],
  },
};
export default {
  'POST /api/newpage/test': data,
  'GET /api/newpage/test': getdata,
};

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
    perPage: 20,
    total: 20,
    data: [
      { id: 1, username: 'davi@agil.com.br', password: 'a2d1as56d1as2das4d56' },
      {
        id: 2,
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

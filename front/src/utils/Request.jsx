import request from 'superagent';

export function getTitles (page = 1) {
  return request.get(`http://localhost:3000/api/titles?page=${page}`).then((data) => {
    if (data && data.body && data.body.data) {
      return data.body.data;
    }
  });
}

export function getTitle (id) {
  return request.get(`http://localhost:3000/api/titles/${id}`).then((data) => {
    if (data && data.body && data.body.data) {
      return data.body.data;
    }
  });
}
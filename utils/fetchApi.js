import axios from "axios";

export const baseUrl = "https://valorant-agents-maps-arsenal.p.rapidapi.com";

export const fetchApi = async (url) => {
  const res = await axios
    .get(url, {
      headers: {
        "X-RapidAPI-Host": "valorant-agents-maps-arsenal.p.rapidapi.com",
        "X-RapidAPI-Key": "97f5fb2371msh13418064deaab46p19059cjsn9a10a2d58626",
      },
    })
    .then(function (res) {
      console.log(res);
    })
    .catch(function (error) {
      console.log(error);
    });
  return res;
};

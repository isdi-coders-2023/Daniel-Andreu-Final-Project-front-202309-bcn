import { http, HttpResponse } from "msw";

const apiUrl = import.meta.env.VITE_API_URL;

export const errorHandlers = [
  http.get(`${apiUrl}/shoes`, async () => HttpResponse.error()),

  http.delete(`${apiUrl}/shoes/:shoeId`, async () => HttpResponse.error()),

  http.post(`${apiUrl}/shoes`, async () => HttpResponse.error()),
];

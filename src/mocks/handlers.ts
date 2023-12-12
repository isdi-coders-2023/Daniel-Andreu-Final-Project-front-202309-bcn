import { http, HttpResponse } from "msw";
import { shoesMock } from "./shoesMock";

const apiUrl = import.meta.env.VITE_API_URL;
const mock = shoesMock;

export const handlers = [
  http.get(`${apiUrl}/shoes`, async () => HttpResponse.json({ shoes: mock })),

  http.delete(`${apiUrl}/shoes/6566146eb17321660f118c7b`, async () =>
    HttpResponse.json({}),
  ),

  http.post(`${apiUrl}/shoes`, async () =>
    HttpResponse.json({ shoe: mock[0] }),
  ),

  http.get(`${apiUrl}/shoes/6566146eb17321660f118c7b`, async () =>
    HttpResponse.json({ shoe: mock[0] }),
  ),
];

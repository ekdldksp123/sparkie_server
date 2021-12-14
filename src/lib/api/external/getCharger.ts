import { Request, Response } from 'express';
import axios, { AxiosResponse } from 'axios';

const API_URL = `http://apis.data.go.kr/B552584/EvCharger/getChargerInfo`;

export default async ({ query }: Request, res: Response) => {
  await axios
    .get(API_URL, {
      params: {
        ...query,
      },
    })
    .then(({ data }: AxiosResponse) => {
      res.send(data);
    });
};

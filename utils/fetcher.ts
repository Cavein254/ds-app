import axios from 'axios';
import { NextResponse } from 'next/server';

export const GetData = async (url: string, data: any, method: string) => {
  if (method === 'POST') {
    console.log('on route post');
    try {
      axios
        .post(url, data)
        .then((response) => response)
        .catch((err) => console.log(err));
    } catch (err) {
      return NextResponse.json(err);
    }
  }
  fetch(url)
    .then((resData) => resData.json())
    .then((data) => {
      return NextResponse.json(data);
    })
    .catch((err) => {
      return NextResponse.json(err);
    });
};

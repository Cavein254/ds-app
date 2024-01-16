import { NextResponse } from 'next/server';

export const GetData = async (url: string, data: any, method: string) => {
  if (method === 'POST') {
    console.log('on route post');
    try {
      fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((resData) => resData.json())
        .then((data) => {
          return NextResponse.json(data);
        })
        .catch((err) => {
          return NextResponse.json(err);
        });
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

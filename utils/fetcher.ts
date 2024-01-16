export const GetData = async (url: string, data: any, method: string) => {
  const newUrl = `${process.env.NEXT_APP_URL}` + url;
  if (method === 'POST') {
    const response = await fetch(newUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: data,
    })
      .then((resData) => resData.json())
      .then((data) => data)
      .catch((err) => console.log(err));
    return response;
  }
  const response = await fetch(newUrl)
    .then((resData) => resData.json())
    .then((data) => data)
    .catch((err) => console.log(err));
  return response;
};

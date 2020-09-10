
export default class BookstoreService {

  _apiBase = 'http://localhost:3000';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  };

  getAllBooks = async () => {
    return await this.getResource(`/data`);
  };

  // getBooks = async (id) => {
  //   const book = await this.getResource(`/data/${id}`);
  //   return this._transformBooks(book);
  // };

  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  };

  _transformBooks = (data) => {
    return {
      id: this._extractId(data),
      title: data.title,
      author: data.author,
      price: data.price,
      coverImage: data.coverImage
    };
  };
}
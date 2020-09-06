class SwapiService {
  _apiBase = 'https://swapi.dev/api';

  async getResourse(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) throw new Error (`Could not fetch ${this._apiBase}${url}, received ${res.status}`);

    return await res.json();
  }

  getAllPeople() {
    return this.getResourse('/people');
  }

  getPerson(id) {
    return this.getResourse(`/people/${id}`);
  }

  getAllPlanets() {
    return this.getResourse('/planets');
  }

  getPlanet(id) {
    return this.getResourse(`/planets/${id}`);
  }

  getAllStarships() {
    return this.getResourse('/starships');
  }

  getStarship(id) {
    return this.getResourse(`/starships/${id}`);
  }
}

const API = new SwapiService();

export default API;

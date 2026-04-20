import Movie from "./Movie/Movie";
import css from "./Movies.module.css";

const arrMovie = [
  {
    _id: "69bf041dd36b5f40e180d0fd",
    title: "string",
    director: "string",
    genre: "string",
    releaseYear: 1,
    rating: 10,
    durationMinutes: 20,
    language: "English",
    summary: "string",
    createdAt: "2026-03-21T20:48:29.629Z",
    updatedAt: "2026-03-21T20:48:29.629Z",
  },
  {
    _id: "69bf03fb3518b71207b05b6a",
    title: "string",
    director: "string",
    genre: "string",
    releaseYear: 1,
    rating: 10,
    durationMinutes: 20,
    language: "string",
    summary: "string",
    createdAt: "2026-03-21T20:47:55.871Z",
    updatedAt: "2026-03-21T20:47:55.871Z",
  },
  {
    _id: "69ae999e66b03caed8cf30fb",
    title: "TEST MOVIE",
    director: "awdawd",
    genre: "sci-fi",
    releaseYear: 2026,
    rating: 5,
    durationMinutes: 160,
    language: "en",
    summary: "awdawd",
    createdAt: "2026-03-09T09:57:50.119Z",
    updatedAt: "2026-03-09T09:57:50.119Z",
  },
  {
    _id: "69ae987666b03caed8cf30f5",
    title: "Test2",
    director: "awdawd",
    genre: "awdawd",
    releaseYear: 2026,
    rating: 5,
    durationMinutes: 160,
    language: "aawdaw",
    summary: "awawawd",
    createdAt: "2026-03-09T09:52:54.199Z",
    updatedAt: "2026-03-09T09:52:54.199Z",
  },
  {
    _id: "69ae985b66b03caed8cf30f2",
    title: "Test Movie",
    director: "Volodymyr",
    genre: "Sci-fi",
    releaseYear: 2026,
    rating: 5,
    durationMinutes: 160,
    language: "en",
    summary: "Interesting Movie",
    createdAt: "2026-03-09T09:52:27.646Z",
    updatedAt: "2026-03-09T09:52:27.646Z",
  },
  {
    _id: "69ae943693981141b53c099a",
    title: "string",
    director: "string",
    genre: "string",
    releaseYear: 2020,
    rating: 5,
    durationMinutes: 160,
    language: "string",
    summary: "string",
    createdAt: "2026-03-09T09:34:46.985Z",
    updatedAt: "2026-03-09T09:34:46.985Z",
  },
  {
    _id: "699323b69c712ca182a3a6a7",
    title: "dfgdf",
    director: "dfgdfg",
    genre: "dfgdfg",
    releaseYear: 43534,
    rating: 2,
    durationMinutes: 432432,
    language: "fdsfsd",
    summary: "dsfdsf",
    createdAt: "2026-02-16T14:03:34.655Z",
    updatedAt: "2026-02-16T14:03:34.655Z",
  },
  {
    _id: "698729184946769d34f3e1ff",
    title: "Seeded Movie 22",
    director: "Kira Patel",
    genre: "thriller",
    releaseYear: 2018,
    rating: 8.3,
    durationMinutes: 107,
    language: "English",
    summary: "A sample summary for movie 22.",
  },
  {
    _id: "698729184946769d34f3e1eb",
    title: "Seeded Movie 2",
    director: "Marcelo Diaz",
    genre: "thriller",
    releaseYear: 2014,
    rating: 8.2,
    durationMinutes: 89,
    language: "English",
    summary: "A sample summary for movie 2.",
  },
  {
    _id: "698729184946769d34f3e1f1",
    title: "Seeded Movie 8",
    director: "Kira Patel",
    genre: "thriller",
    releaseYear: 2018,
    rating: 7.9,
    durationMinutes: 89,
    language: "English",
    summary: "A sample summary for movie 8.",
  },
];

const Movies = () => {
  return (
    <div className={css["movies"]}>
      <h1>Movies</h1>

      <ul>
        {arrMovie.map((el) => {
          return (
            <Movie
              title={el.title}
              releaseYear={el.releaseYear}
              rating={el.rating}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Movies;

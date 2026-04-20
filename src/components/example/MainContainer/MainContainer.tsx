import CarList from "./CarList/CarList";
import RepoList from "./RepoList/RepoList";
import SearchForm from "./SearchForm/SearchForm";

const MainContainer = () => {
  return (
    <main>
      <CarList />
      <SearchForm />
      <RepoList />
    </main>
  );
};

export default MainContainer;

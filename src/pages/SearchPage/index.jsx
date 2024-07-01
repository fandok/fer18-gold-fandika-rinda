import Header from "../../Header";
import Hero from "../../components/Hero";
import Search from "../../components/Search";
import Footer from "../../Footer";

const SearchPage = () => {
  return (
    <div>
      <Header />
      <Hero showBtn={false} />
      <Search />
      <Footer />
    </div>
  );
};

export default SearchPage;

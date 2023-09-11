import { useEffect } from "react";
import Artworks from "./components/Artworks";
import CreateNFT from "./components/CreateNFT";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Loading from "./components/Loading";
import ShowNFT from "./components/ShowNFT";
import Transactions from "./components/Transactions";
import UpdateNFT from "./components/UpdateNFT";
import { getAllNFTs, isWallectConnected } from "./Blockchain.Services";
import Alert from "./components/Alert";

// REACT_APP_INFURIA_PID=2Gg95YqQ672apEtGQbewfwGQANc
// REACT_APP_INFURIA_API=b2c85789868e83772bfbc59ddd6d09bb

const App = () => {
  useEffect(async () => {
    await isWallectConnected();
    await getAllNFTs();
  }, []);
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero">
        <Header />
        <Hero />
      </div>
      <Artworks />
      <Transactions />
      <Footer />
      <CreateNFT />
      <ShowNFT />
      <UpdateNFT />
      <Loading />
      <Alert />
    </div>
  );
};

export default App;

//Stating user guide
//1. npm install -g truffle , truffle version command will shows you all all versions
//2. npm install -g ganache-cli , ganache-cli --v
//3.ganache-cli -d (used to create account with eth)
//4.truffle migrate (used to deploy contract)

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Tutolrial from "./components/Tutolrial/Tutolrial";
import CardLayout from "./components/CardLayout/CardLayout";
import Card from "./components/card/Card";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Nav></Nav>

      <CardLayout></CardLayout>

      <Tutolrial></Tutolrial>

      <div className="card_ft">
        <Card
          title={"sunt aut facere repellat provident occaecati excepturi optio reprehenderit"}
          thumbnail={
            "https://cdn.zeplin.io/5ea19ccec5f94454ebb7ad5c/assets/7287BFE6-91D0-4E81-8E9A-1E8D681A80AF-optimized.png"
          }
          userName="Nguyễn văn A"
          avatar={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYEO7kaixpowZ3LT-cg58J3LFqUVZU_d8iAw&usqp=CAU"
          }
          like={"10"}
          view={"32"}
        ></Card>

        <Card
          title={"sunt aut facere repellat provident occaecati excepturi optio reprehenderit"}
          thumbnail={
            "https://cdn.zeplin.io/5ea19ccec5f94454ebb7ad5c/assets/E798F7EA-1A92-4D86-8685-8EF31328BFAF.png"
          }
          userName="Nguyễn văn A"
          avatar={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYEO7kaixpowZ3LT-cg58J3LFqUVZU_d8iAw&usqp=CAU"
          }
          like={"10"}
          view={"32"}
        ></Card>

        <Card
          title={"sunt aut facere repellat provident occaecati excepturi optio reprehenderit"}
          thumbnail={
            "https://cdn.zeplin.io/5ea19ccec5f94454ebb7ad5c/assets/7287BFE6-91D0-4E81-8E9A-1E8D681A80AF-optimized.png"
          }
          userName="Nguyễn văn A"
          avatar={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYEO7kaixpowZ3LT-cg58J3LFqUVZU_d8iAw&usqp=CAU"
          }
          like={"10"}
          view={"32"}
        ></Card>

        <Card
          title={"sunt aut facere repellat provident occaecati excepturi optio reprehenderit"}
          thumbnail={
            "https://cdn.zeplin.io/5ea19ccec5f94454ebb7ad5c/assets/2D6D1787-A394-4993-B42D-AA9FE721A81C-optimized.png"
          }
          userName="Nguyễn văn A"
          avatar={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYEO7kaixpowZ3LT-cg58J3LFqUVZU_d8iAw&usqp=CAU"
          }
          like={"10"}
          view={"32"}
        ></Card>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;

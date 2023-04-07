// import from react
import  {useState} from 'react';

// import components
import Header from './components/Header';
import Nav from './components/Nav';
import Page from './components/Page';
import Footer from './components/Footer';



function App() {
 const [pages] = useState([
    {
      name: 'About Me'
    },
    { 
      name: 'Portfolio' 
    },
    {
      name: 'Contact'
    },
    { 
      name: 'Resume'
    }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);


  return (
    <div className="App">
      <Header>
        <Nav 
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Nav>
      </Header>

      <main>
        <Page currentPage={currentPage}></Page>
      </main>

      <Footer />
      
    </div>
  );
}

export default App;

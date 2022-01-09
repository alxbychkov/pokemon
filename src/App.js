import Header from './components/Header/Header.js';
import Layout from './components/Layout/Layout.js';
import Footer from './components/Footer/Footer.js';
import bg1 from './assets/img/bg1.jpg';
import bg2 from './assets/img/bg2.jpg';

function App() {
  return (
    <>
      <Header 
        title="This is title"
        desc="This is description!"  
      />
      <Layout
        id="rules"
        title="First layout"
        desc="First desc"
        urlBg={bg1}
      />
      <Layout
        id="cards"
        title="Second layout"
        desc="Second desc"
        colorBg='#e2e2e2'
      />
      <Layout
        id="about"
        title="Third layout"
        desc="Third desc"
        urlBg={bg2}
      />
      <Footer />
    </>
  );
}

export default App;

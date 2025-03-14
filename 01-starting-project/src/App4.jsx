
import { CORE_CONCEPTS } from "./data";
import Header2 from "./components/Header/Header2";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import TabButton from "./components/TabButtons";
import { EXAMPLES } from "./data_updated";
import { useState } from "react";

function App() {

  const [ selectedTopic, setSelectedTopic ] = useState();
  

  function handSelect(selectedTopic) {
    // selectedButton = 'components', 'jsx', 'props', 'state'
    console.log(selectedTopic);
    setSelectedTopic(selectedTopic);
  }

  return (
    <div>
      <Header2 />
      <main>
        <section id="core-concepts">
          <h2>핵심 개념들 of React</h2>
          <ul>
            <CoreConcepts 
              image={CORE_CONCEPTS[0].image} 
              title={CORE_CONCEPTS[0].title} 
              description={CORE_CONCEPTS[0].description} />
            <CoreConcepts {...CORE_CONCEPTS[1]}/>
            <CoreConcepts {...CORE_CONCEPTS[2]}/>
            <CoreConcepts {...CORE_CONCEPTS[3]}/>
            <CoreConcepts />
            <CoreConcepts />
          </ul>
        </section>
        <section id="examples">
          <h2>예시들</h2>
          <menu>
            <TabButton onSelect={() => handSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handSelect('state')}>State</TabButton>
          </menu>
          {selectedTopic === undefined ? <h3>버튼을 클릭하세요</h3> :
          <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic]['title']}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
              {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
        </div>}
          

        </section>
      </main>
    </div>
  );
}

export default App;
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
  // React에서는 변수의 데이터에 HTML 코드를 삽입할 수 있음
  let tabContent = ( 
    <>
      <p>Please Select a Topic!</p>
    </>);

  // 버튼을 클릭했을 때 해당 내용을 참조하여 내용이 출력되어야 함.

  if(selectedTopic) { // selectedTopic에 값이 무엇이라도 있기만 하면 이하의 코드가 실행됨
    tabContent = (
      <>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </>
    );
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
        
        <div id="tab-content">
          {tabContent}
        </div>

        </section>
      </main>
    </div>
  );
}

export default App;
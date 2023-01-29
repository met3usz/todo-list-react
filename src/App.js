import { useState } from 'react';
import Container from './Container';
import Wrapper from './Wrapper';
import Section from './Section';
import List from './List';
import Buttons from './Buttons';
import Form from './Form';

function App() {
  let [hideDone, setHide] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: 'zrobić zakupy', done: false },
    { id: 2, content: 'zjeść kolację', done: true },
    { id: 3, content: 'iść spać wcześnie', done: false },
  ]);

  const toggleHide = () => setHide((hideDone) => !hideDone);
  const removeTask = (id) =>
    setTasks((tasks) => tasks.filter((task) => task.id !== id));

  return (
    <Container>
      <Wrapper body={<Form />} title={'Lista zadań'} />
      <Section
        tasks={tasks}
        hideDone={hideDone}
        contentControlButtons={
          <Buttons tasks={tasks} hideDone={hideDone} toggleHide={toggleHide} />
        }
        tasksList={
          <List
            tasks={tasks}
            hideDone={hideDone}
            key={tasks.id}
            removeTask={removeTask}
          />
        }
      />
    </Container>
  );
}

export default App;

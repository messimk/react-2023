import PostsList from "./components/PostsList";
import { useState } from "react";
import MainHeader from "./components/MainHeader";
function App() {
  const [modalIsVisible, setModalVisible] = useState(true);

  function showModalHandler()
  {
    setModalVisible(true);
  }
  
  function hideModalHandler() {
    setModalVisible(false);
}

  return(
    <>
    <MainHeader onCreatePost={showModalHandler} />
       <main>
    <PostsList isPosting={ modalIsVisible }
    onStopPosting={hideModalHandler}
    />
  
       </main>
       </>
  );
}
export default App;


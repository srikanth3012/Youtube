import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";

import MainComponent from "./components/maincomponent";
import Watch from "./components/watch";
import { Provider } from "react-redux";
import store from "./store";
import SearchResults from "./components/searchResults";
import History from "./components/History";

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainComponent />,
      },
      {
        path: "/watch",
        element: <Watch />,
      },
      {
        path: "/results",
        element: <SearchResults />,
      },
      {
        path: "/feed/history",
        element: <History />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={approuter} />
      </div>
    </Provider>
  );
}

export default App;

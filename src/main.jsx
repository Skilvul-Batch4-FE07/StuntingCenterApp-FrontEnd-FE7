import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./configurations/store";
import RouterComponent from "./configurations/router";
import "./styles/index.css";
import { ArticleProvider } from "./contexts/ArticleContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { ForumProvider } from "./contexts/ForumContext";

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <ArticleProvider>
        <ForumProvider>
          <RouterComponent />
        </ForumProvider>
      </ArticleProvider>
    </Provider>
  </QueryClientProvider>,
  document.getElementById("root")
);

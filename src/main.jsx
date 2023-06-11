// main.js
import './index.css'


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
)

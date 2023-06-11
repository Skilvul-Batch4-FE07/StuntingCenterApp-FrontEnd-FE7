import { createContext } from 'react';
import { fetchArticles } from '../utils/api';
import { useQuery } from 'react-query';


export const ArticleContext = createContext();

export const ArticleProvider = ({ children }) => {
const {data:articles, isLoading} = useQuery("articles", fetchArticles)
const value = {articles, isLoading}

  return (
    <ArticleContext.Provider value={value}>
      {children}
    </ArticleContext.Provider>
  );
};

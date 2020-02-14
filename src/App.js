import React, {useState, useEffect, Fragment} from 'react';
import { Container } from '@material-ui/core';
import NavBar from './components/Navbar'
import TopStoriesList from './components/TopStoriesList'
import SearchArticleList from './components/SearchedArticleList'
import nytimes from './api/nytimes'


const API_KEY =`${process.env.REACT_APP_API_KEY}`


const App = () => {
  const [articles, setArticles] = useState([])
  const [topStories, setTopStories] = useState([])


  const onSearchSubmit = async(searchTerm) => {
    const response = await nytimes.get(`/search/v2/articlesearch.json?q=${searchTerm}&api-key=${API_KEY}`)
    setArticles(response.data.response.docs)
  }

  useEffect(() => {
    const getTopArticles = async () => {
      const response = await nytimes.get(`/topstories/v2/world.json?api-key=${API_KEY}`)
      setTopStories(response.data.results)
    }
    getTopArticles()
  },[])

  
  
  return (
    <Fragment>
      <NavBar onInvokingSearchTerm={onSearchSubmit}></NavBar>
      <Container>
        {
          articles.length === 0 || articles === undefined? 
          <TopStoriesList topStories={topStories}></TopStoriesList>: 
          articles.length === 0 || articles === undefined? <div>Error</div>: 
          <SearchArticleList articles={articles}></SearchArticleList>}
      </Container>
    </Fragment>
  );
}

export default App;

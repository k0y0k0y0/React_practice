//Action creator
export const selectMovie=(movie)=>{
  //Action
  return{
    type: 'MOVIE_SELECTED',
    playload: movie,
  };
};
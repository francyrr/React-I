import {MyCard} from './Mycard'
export const Galery = ({ posts }) => {
  return (
    <>
     <div className='flex'>
        {posts.length ? (
            posts.map((post) => <MyCard {...post}/>)
          )  :  (
                  <h1>No hay perritos disponibles</h1>
                )}
        </div>
    </>
   
  );
}
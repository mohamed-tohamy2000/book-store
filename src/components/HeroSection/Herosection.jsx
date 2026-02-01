import Hero from "./Hero";


export default function Herosection({ h , showSearch}) {
  return (
    <>
      
      <div className={`${h}`}>
        <Hero showSearch ={showSearch}/>
        
      </div>
    </>
  )
}

import { useEffect, useState } from "react"

import { useHero } from '../hooks/useHero'

const Home = () => {

  const { fetchTodos } = useHero()

  const [heroes, setHeroes] = useState([])

  useEffect(() => {
    fetchTodos()
    .then(setHeroes)
  }, [])

  return (
    <div className="container mx-auto flex gap-40">

      { /*JSON.stringify(form) */}     

      {/* <pre>{JSON.stringify(heroes, null, 2)}</pre> */}

      <section className="w-8/12 mx-auto flex justify-between py-3 px-6">
        <h2 className="text-3xl">Hero list</h2>
        <Link to="/new.hero" >
          <button className="py-2 px-3 bg-green-600 hover:bg-green-700 duration-300 text-white w-[120px]">

          </button>
        </Link>
      </section>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mx-auto">
        {heroes.map(heroe => {
          return (
            <div key={heroe.docId}>
              {heroe.name}
              <img src={heroe.image} width={150} 
              />

              <div className="absolutebottom-0 left-0 rigth-0 h-0 bg-green-400/40 px-3 font-semibold text-center cursos-default hover:h-full hover:text-2xl overflow-hidden overflow-ellipsis">
                <span className="text-white drop-shadow">{heroe.name ? heroe.name : "-"}</span>

                <button className="py-2 px-3 bg-blue-600 text-base duration-300 text-white hover:bg-blue-700">Edit</button>
                <button className="py-2 px-3 bg-red-600 text-base duration-300 text-white hover:bg-red-700">Delete</button>

              </div>
              <img src={heroe.image}
              width={150}
              onError={(e) => e.target.src="https://placehold.co/480x640/555/FFF?text=?"}
              />
            </div>
          )
        })}

      </div>

    </div>
  )
}

export default Home
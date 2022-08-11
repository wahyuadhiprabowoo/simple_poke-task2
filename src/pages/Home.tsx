
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";



const Home = () => {
       const [page, setPage] = useState<number>(1);
       const { isLoading, error, data } = useQuery(["repoData", page], () =>
              fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${page}&limit=24`).then((r) => r.json())
       );

       if (isLoading) {
              return <div className="mx-auto loader"></div>
       }

       if (error) {
              return <span>Error</span>
       }


       const getId = (value: string) => {
              const splitUrl = value.split("https://pokeapi.co/api/v2/pokemon/");
              const id = splitUrl[1].slice(0, -1);
              return id;
       };
       console.log(page, data)
       return (

              <div className="w-full h-full">
                     <h1 className="px-4 my-12 text-4xl font-bold text-center">Simple Pokedex With <span className="block ">ReactQuery dan ReactRouter</span></h1>

                     <div className="flex flex-wrap justify-center mx-12 my-12">

                            {data?.results.map((value: { name: string, url: string }) => (<ul className="px-0 w-44">
                                   <div>
                                          <li className="px-3 py-3 mx-5 mt-6 text-lg font-semibold text-center border shadow-md rounded-xl border-slate-600 shadow-slate-800 hover:shadow-xl hover:shadow-slate-400">
                                                 <Link to={"detail-pokemon/" + getId(value?.url)}>
                                                        {value.name}
                                                 </Link>
                                          </li>
                                   </div>

                            </ul>))}
                     </div >

                     <div className="flex items-end justify-end mx-4 my-5">

                            <button className="mr-4 btn btn-accent" onClick={() => setPage(page <= 1 ? 1 : page - 25)}>Prev</button>
                            <button className="font-bold btn btn-disabled">{page} </button>
                            <button className="ml-4 btn btn-primary" onClick={() => setPage(page <= 1150 ? page + 25 : page)}>Next</button>
                     </div>
              </div >
       );
};

export default Home;

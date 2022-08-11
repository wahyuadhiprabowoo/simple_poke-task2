import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
// import { DetailPokemonResponse } from "../types";

function Detail() {
       const { id } = useParams();
       const { isLoading, error, data } = useQuery(["repoData", id], () =>
              fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((r) => r.json())
       );

       if (isLoading) { return <span>Loading . . .</span> }

       if (error) {
              return <span>An error has occurred: </span>
       }
       // + {error.message}};

       // console.log(JSON.stringify(data, null, 2));
       return (

              <div className="w-full h-2/5">
                     <h1 className="pt-12 text-4xl font-bold text-center">Detail Pokemon</h1>
                     <div className="mx-auto mt-4 mb-24 shadow-xl w-96 card bg-base-100 hover:shadow-xl hover:shadow-slate-300">


                            <figure className=""><img src={data.sprites.front_default} alt="Pokemon" width="220" /> </figure>
                            <div className="card-body">
                                   <h2 className="justify-center mb-4 font-bold card-title">
                                          {data.name.toUpperCase()}
                                   </h2>
                                   <div className="justify-end card-actions">
                                          <div className="px-5 py-4 mb-2 font-semibold badge badge-primary ">Tinggi</div>
                                          <div className="px-5 py-4 mb-2 font-semibold badge badge-outline">{data.height}</div>
                                          <div className="px-5 py-4 mb-2 font-semibold badge badge-primary">Lebar</div>
                                          <div className="px-5 py-4 mb-2 font-semibold badge badge-outline">{data.weight}</div>
                                   </div>
                                   <div className="justify-center card-actions">
                                          <div className="px-5 py-4 mb-2 badge badge-accent ">Tipe</div>


                                          {data.types.map((value: { slot: number, type: { name: string, url: string } }, key: number) => (
                                                 <div className="px-5 py-4 mb-2 font-semibold badge badge-outline">{value.type.name}</div>
                                          ))}



                                   </div>

                            </div>
                     </div>
              </div>




              //        <div className="container p-10 Appflex item-center">

              //               <div className="max-w-sm overflow-hidden rounded shadow-lg ">
              //                      <h1 className="pb-4 text-xl font-bold text-center">Simple Pokemon</h1>
              //                      <img className="items-center w-full" src={data.sprites.front_default} alt="Mountain" />
              //                      <div className="px-6 py-2">
              //                             <div className="mb-2 text-xl font-bold text">{data?.name}</div>
              //                      </div>
              //                      <div className="px-6 pt-2 pb-2 ">

              //                             <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">Height= {data.height}</span>
              //                             <span className="inline-block px-5 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">Weight = {data.weight}</span>
              //                             <p className="pb-2 text-lg font-bold">Tipe</p>
              //                             <div>

              //                                    {data.types.map((value: { slot: number, type: { name: string, url: string } }, key: number) => (
              //                                           <span className="inline-block px-5 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full " key={key}>{value.type.name}</span>
              //                                    ))}

              //                             </div>

              //                      </div>
              //               </div>
              //        </div>
              // </div>
       );
}
export default Detail;

//                      <h3>Use React Query to Detail</h3>

//                      <img src={data.sprites.front_default} alt="" />
//                      <h3>Height: {data.height}</h3>
//                      <h3>Weight: {data.weight}</h3>
// {
//        data.types.map((value: any, key: number) => (
//               <li key={key}>{value.type.name}</li>
//        ))
// }
// <hr />
import React from 'react'

function Footer() {
       return (

              <footer className="p-8 rounded-lg shadow bg-base-300 md:px-6 md:py-8 dark:bg-gray-900">
                     <div className="sm:flex sm:items-center sm:justify-between">
                            <a href="https://nore.web.id/" className="flex items-center mb-4 sm:mb-0 hover:underline">
                                   {/* <img src="https://nore.web.id/wp-content/uploads/2020/02/07.png" className="h-8 mr-3" alt="Nore Logo" /> */}
                                   <span className="self-center text-xl whitespace-nowrap dark:text-gray-400">Nore Inovasi</span>
                            </a>
                            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://nore.web.id/internship/" className="hover:underline">Magang Nore™</a>. Politeknik Negeri Semarang
                            </span>
                            <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                                   <li>
                                          <a href="https://www.linkedin.com/in/wahyuadhiprabowo/" className="mr-4 hover:underline md:mr-6 ">LinkedIn</a>
                                   </li>
                                   <li>
                                          <a href="https://github.com/wahyuadhiprabowoo" className="mr-4 hover:underline md:mr-6">Github</a>
                                   </li>
                                   <li>
                                          <a href="https://www.instagram.com/wahyuadhiprabowoo/" className="mr-4 hover:underline md:mr-6 ">Instagram</a>
                                   </li>

                            </ul>

                     </div>

              </footer>

       )
}

export default Footer
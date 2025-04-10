import React from 'react'
import { filterData } from '../../dummyData/filter'
const PortfolioBar = () => {
  return (
     <div>
                <ul className="flex gap-x-[45px]">
                  {filterData.map((filter) => (
                    <li key={filter.id}>
                      <a
                        href={filter.url}
                        className="text-navlink text-base font-Montserrat font-semibold leading-normal capitalize transition-all duration-200 hover:text-secondary"
                      >
                        {filter.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
  )
}

export default PortfolioBar
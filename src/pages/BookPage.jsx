import Herosection from "../components/HeroSection/Herosection";
import BookCard from '../components/ui/BookCard'
import Dropdown from '../components/ui/Dropdown'

import FilterSidebar from '../components/ui/FilterSidebar'
import Navbtn from '../components/ui/Navbtn'
import Pagination from '../components/ui/Pagination'
import Search from '../components/ui/Search'

export default function BookPage() {
  return (
    <div className=' '>
      <div>
        <Herosection h={"h-[120px]"} />
      </div>
      <div>

      </div>
      <div className='flex gap-6'>

        <FilterSidebar />
        <div >
          <div className='flex gap-7 p-6 mt-9  justify-around'>
            <div className='   w-139.5'>
              <Search />

            </div>
            <div className='w-50 '>
              <Dropdown title="Sort by" className={"bg-[#0000001A]"}>
                
              </Dropdown>
            </div>
          </div>
          <div className='w-full flex items-center justify-between flex-col'>
            <Navbtn />
            <div className='p-10 flex flex-col gap-2 mt-6 container'>

              <BookCard />
              <BookCard />
              <BookCard />
            </div>
            <div className='flex items-center justify-center p-7 mt-7'>
              <Pagination />
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

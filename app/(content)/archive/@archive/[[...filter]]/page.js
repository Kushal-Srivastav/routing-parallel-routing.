import NewsList from "../../../../components/news-list";
import Link from "next/link";
import {  getAvailableNewsMonths,
     getAvailableNewsYears, getNewsForYear,
      getNewsForYearAndMonth } from 
      "../../../../lib/news";
      import { Suspense } from "react";

      async function FilterHeader({year, month}){
        const availableYears = await getAvailableNewsYears()
        let links = availableYears

        
    if((selectedYear && !availableYears.includes(year)) || 
    (month
        && !getAvailableNewsMonths(year).includes(month)))
        {
            throw new Error('Invalid Filter')
        }
    
        if(year && !month){
      
            links =  getAvailableNewsMonths(selectedYear)
        }
    
        if(year && month){
            links = [];
        }
        <header id="archive-header">
        <nav>
           <ul>
         {links.map((link) =>{
            const href = year ? `/archive/${year}/${link}` 
            : `/archive/${link}`
            return (
                 <li key={link}>
                    <Link href={`/archive/${link}`}>{link}</Link>
                  </li>
            )
    })}
           </ul>
                 </nav>
                </header>
        }

    async function FilteredNews({year, month}){
        let news;

        if(year && !month){
            news = await getNewsForYear(selectedYear)
        }
        else if(year && month){
        news = await getNewsForYearAndMonth(year,month)
        }
  
        let newsContent = <p>No news found for the selected period.</p>

        if(news && news.length >0 ){
            newsContent = <NewsList news={news}/>
        }

        return newsContent;
      
      }

export default async function filteredNewsPage({params}){
    const filter = params.filter

    const selectedYear = filter? filter[0] : undefined
    const selectedMonth = filter? filter[1] : undefined


    return(
        <>
        <Suspense fallback = {<p>Loading...</p>}>
         <FilterHeader year={selectedYear} month={selectedMonth} />
         </Suspense>

         <Suspense fallback={<p>Loading news...</p>}>
            <FilteredNews year={selectedYear} month={selectedMonth} />
         </Suspense>
    </>    
        )
     } 

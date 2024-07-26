import { listimages, SliderBlock } from "./components/slider/slider"
import { CalendarEvents } from "./components/calendar/calendar"
import { BlockSearch } from "./components/block_search/search"
import { FootSite, HeadSite } from "./components/layout/layout"
import { useState } from "react"
import { BlockContent } from "./components/asides/block_content"



function App() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

selectedDate
  function handleDateChange(date: Date) {
    setSelectedDate(date)
  }

  return (
    <>
      <HeadSite />
        <SliderBlock images={listimages}/>
        <BlockSearch/>
        <CalendarEvents onDateChange={handleDateChange}/>
        <BlockContent />
      <FootSite />
    </>
  )
}

export default App

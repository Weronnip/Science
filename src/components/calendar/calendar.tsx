import { useState } from "react"
import "./calendar.css"

interface CalendarProps {
    onDateChange: (date: Date) => void
}

export function CalendarEvents({onDateChange}: CalendarProps) {
    const [currentDate, setCurrentDate] = useState(new Date());

    function daysInMonth(year: number, month: number) {
        return new Date(year, month + 1, 0).getDate();
    };

    function startDayOfMonth(year: number, month: number) {
        return new Date(year, month, 1).getDate();
    };

    function handleDateClick(day: number) {
        const selectedDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
        setCurrentDate(selectedDay);
        onDateChange(selectedDay);
    };

    function renderCalendarDays() {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const daysInCurrentMonth = daysInMonth(year, month);
        const startDay = startDayOfMonth(year, month);
        const calendarDays = [];

        for (let i = 0; i < startDay; i++) {
            calendarDays.push(<div key={`empty-${i}`} className="calendar-day empty"></div>)
        }

        for (let day = 1; day <= daysInCurrentMonth; day++) {
            calendarDays.push(
              <div
                key={day}
                className={`calendar-day ${day === currentDate.getDate() ? 'selected' : ''}`}
                onClick={() => handleDateClick(day)}
              >
                {day}
              </div>
            );
          }
        return calendarDays;
    };
    return (
       <>
          <div className="calendar">
          <h3 className="title-events">Мероприятия на {currentDate.toLocaleString('default', {day: '2-digit'})} {currentDate.toLocaleString('default', {month: 'long'})}</h3>
              <div className="calendar-header">
                <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}>
                  ‹
                </button>
                <div>{currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}</div>
                <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}>
                  ›
                </button>
              </div>
              <div className="calendar-body">
                {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map(day => (
                  <div key={day} className="calendar-weekday">{day}</div>
                ))}
                {renderCalendarDays()}
              </div>
          </div>
       </>
      );
}
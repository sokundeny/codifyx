import { useState } from "react";
import {
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  format,
  isSameMonth,
  isSameDay,
  isToday,
  isBefore,
} from "date-fns";

const Calendar: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handlePrevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const handleNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 0 }); 
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 0 });

  const days = eachDayOfInterval({ start: startDate, end: endDate });

  // const weekDays = ["Mo", "Tu", "We", "Th", "Fr", "Sat", "Su"];
  const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sat"];


  const handleSelect = (day: Date) => {
    if (!isBefore(day, new Date())) setSelectedDate(day);
  };

  const weeks: Date[][] = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  return (
    <div className="flex flex-col gap-4 w-full items-center">
      <div className="flex items-center justify-between w-full mb-2">
        <button
          onClick={handlePrevMonth}
          className="p-2.5 cursor-pointer hover:bg-background-muted rounded-full transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M12.5 15L7.5 10L12.5 5"
              stroke="#717680"
              strokeWidth="1.67"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <h3 className="font-semibold text-text-secondary leading-6">{format(currentMonth, "MMMM yyyy")}</h3>
        <button
          onClick={handleNextMonth}
          className="p-2.5 cursor-pointer hover:bg-background-muted rounded-full transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M7.5 15L12.5 10L7.5 5"
              stroke="#717680"
              strokeWidth="1.67"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="flex flex-row justify-between w-full">
        {weekDays.map((day) => (
          <div key={day} className="w-10 h-10 flex items-center justify-center text-sm font-medium text-text-secondary">
            {day}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-y-1 w-full">
        {weeks.map((week, idx) => (
          <div key={idx} className="flex flex-row justify-between w-full">
            {week.map((day) => {
              const disabled = !isSameMonth(day, currentMonth) || isBefore(day, new Date());
              const selected = selectedDate && isSameDay(day, selectedDate);

              return (
                <button
                  key={day.toISOString()}
                  onClick={() => handleSelect(day)}
                  disabled={disabled}
                  className={`
                    w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium
                    transition-colors
                    ${disabled ? "text-text-disabled cursor-not-allowed" : "cursor-pointer"}
                    ${selected ? "bg-primary-soft text-primary-hover" : "text-text-secondary"}
                    ${isToday(day) && !selected ? "bg-background-muted" : ""}
                    ${!disabled && !selected ? "hover:text-primary-hover hover:bg-primary-soft" : ""}
                  `}
                >
                  {format(day, "d")}
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;

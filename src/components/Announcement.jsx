import { Link } from 'react-router-dom';
import { announcementEvents } from '../data/announcementEvents.js';
import '../scss/Announcement.scss';

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const startYear = 2025;
const startMonth = 11;
const monthCount = 37;

const calendarMonths = Array.from({ length: monthCount }, (_, index) => (
  new Date(startYear, startMonth + index, 1)
));

const formatDateKey = (date) => (
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
);

function Announcement() {
  const today = new Date();
  const todayKey = formatDateKey(today);
  const upcomingEvents = Object.entries(announcementEvents)
    .filter(([date]) => date >= todayKey)
    .flatMap(([date, events]) => events.map((event) => ({ date, ...event })))
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 6);

  return (
    <div className="announcement-page">
      <section className="announcement-hero">
        <h1>Announcements</h1>
        <p>National and state observances, public holidays, and major festivals.</p>
        <p className="calendar-note">
          Movable festival dates in 2027 and 2028 are estimates, not official holiday notifications.
          Islamic dates may shift with moon sightings; confirm dates with Karnataka&apos;s annual holiday list.
        </p>
        <nav className="announcement-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>Announcements</span>
        </nav>
      </section>

      <div className="upcoming-programs-ticker" aria-label="Upcoming events">
        <div className="ticker-content">
          {upcomingEvents.length > 0 ? upcomingEvents.map((event) => (
            <span key={`${event.date}-${event.title}`}>
              <strong>{event.type === 'holiday' ? 'HOLIDAY' : 'FESTIVAL'}:</strong> {event.title} (
              {new Date(`${event.date}T00:00:00`).toLocaleDateString('en-IN', {
                day: 'numeric',
                month: 'short',
              })}
              ){event.estimated ? ' (estimated)' : ''}
            </span>
          )) : (
            <span>No upcoming events have been posted.</span>
          )}
        </div>
      </div>

      <section className="calendar-container" aria-label="Monthly event calendars">
        {calendarMonths.map((month) => {
          const year = month.getFullYear();
          const monthIndex = month.getMonth();
          const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
          const leadingEmptyDays = new Date(year, monthIndex, 1).getDay();
          const cells = [
            ...Array(leadingEmptyDays).fill(null),
            ...Array.from({ length: daysInMonth }, (_, index) => index + 1),
          ];

          while (cells.length % 7 !== 0) {
            cells.push(null);
          }

          const weeks = Array.from(
            { length: cells.length / 7 },
            (_, index) => cells.slice(index * 7, index * 7 + 7),
          );

          return (
            <section className="calendar-month" key={`${year}-${monthIndex}`}>
              <h2 className="month-title">
                {month.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </h2>
              <div className="calendar-grid-wrapper">
                <table className="calendar-grid">
                  <thead>
                    <tr>
                      {weekdays.map((weekday) => (
                        <th scope="col" key={weekday}>{weekday}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {weeks.map((week, weekIndex) => (
                      <tr key={`${year}-${monthIndex}-week-${weekIndex}`}>
                        {week.map((day, dayIndex) => {
                          if (day === null) {
                            return <td className="empty-day" key={`empty-${dayIndex}`} aria-hidden="true" />;
                          }

                          const dateKey = formatDateKey(new Date(year, monthIndex, day));
                          const events = announcementEvents[dateKey] || [];

                          return (
                            <td
                              className={dateKey === todayKey ? 'current-day' : undefined}
                              key={dateKey}
                            >
                              <span className="day-number">{day}</span>
                              {events.map((event) => (
                                <div
                                  className={`event ${event.type}`}
                                  key={`${event.type}-${event.title}`}
                                  title={event.title}
                                >
                                  {event.title}
                                  {event.estimated && <span className="event-estimate"> (est.)</span>}
                                </div>
                              ))}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          );
        })}
      </section>
    </div>
  );
}

export default Announcement;

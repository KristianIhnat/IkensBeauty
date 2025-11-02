import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'tailwindcss/tailwind.css';

// Simulovaná obsadenosť
const bookedDates = {
  '2025-11-04': ['10:00', '12:00'],
  '2025-11-05': ['09:00', '11:00', '15:00'],
};

// Pomocná funkcia na kontrolu, či je dátum obsadený
const isDateBooked = (date) => {
  const dateStr = date.toISOString().split('T')[0];
  return bookedDates[dateStr] !== undefined;
};

export default function BookingForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');

  const getAvailableTimes = (date) => {
    if (!date) return [];
    const dateStr = date.toISOString().split('T')[0];
    const allTimes = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'];
    const booked = bookedDates[dateStr] || [];
    return allTimes.filter(time => !booked.includes(time));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !selectedDate || !selectedTime) {
      alert('Vyplňte všetky polia');
      return;
    }
    alert(`Rezervácia úspešne odoslaná!\n${name}, ${selectedDate.toLocaleDateString()} o ${selectedTime}`);
    // Tu by sa posielal formulár na server
  };

  const availableTimes = getAvailableTimes(selectedDate);

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8 mt-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Rezervujte si termín</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1">Meno</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="Vaše meno"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="Váš email"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Telefón</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="Váš telefón"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Dátum</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => {
              setSelectedDate(date);
              setSelectedTime(''); // reset času pri zmene dátumu
            }}
            minDate={new Date()}
            dateFormat="dd.MM.yyyy"
            className="w-full border rounded px-3 py-2"
            placeholderText="Vyberte dátum"
            dayClassName={(date) =>
              isDateBooked(date)
                ? 'text-red-500 line-through' // obsadené dni
                : 'text-gray-800'
            }
            filterDate={(date) => !isDateBooked(date)} // zablokovanie obsadených dní
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Čas</label>
          <select
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="w-full border rounded px-3 py-2"
            required
            disabled={!selectedDate}
          >
            <option value="">Vyberte čas</option>
            {availableTimes.map(time => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-amber-800 text-white py-2 rounded hover:bg-amber-700 transition-colors duration-300"
        >
          Rezervovať
        </button>
      </form>
    </div>
  );
}
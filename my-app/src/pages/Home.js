import React, { useState, useEffect, useRef } from "react";

const Home = () => {
  const [days, setDays] = useState('00');
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date('February 4, 2024 00:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        //stop timer
        clearInterval(interval.current)
      } else {
        //update timer
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000)
  }

useEffect(() => {
  startTimer();
  return() => {
    clearInterval(interval.current);
  }
})

  return (
    <div className="home">
    <section className="timer-container">
      <section className="timer">
        <div>
        <span  className="timer-icon"></span>
          <h1>Countdown until Wedding Day!</h1>
        </div>
        <div>
          <section>
            <p>{days}</p>
            <p>Days</p>
          </section>
          <span>:</span>
          <section>
            <p>{hours}</p>
            <p>Hours</p>
          </section>
          <span>:</span>
          <section>
            <p>{minutes}</p>
            <p>Minutes</p>
          </section>
          <span>:</span>
          <section>
            <p>{seconds}</p>
            <p>Seconds</p>
          </section>
        </div>
      </section>
    </section>
    </div>
  );
}

export default Home;




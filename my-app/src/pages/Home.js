import React, { useState, useEffect, useRef } from "react";
import { GiBigDiamondRing } from "react-icons/gi";

const Home = () => {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date('February 3, 2024 00:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date ().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        //stop timer
        clearInterval(interval.current)
      }else {
        //update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000)
  }

useEffect(() => {
  
})

  return (
    <div className="home">
      <h3>Mona & Dixon's Wedding</h3>
    <section className="timer-container">
      <section className="timer">
        <div>
        <span  className="timer-icon"></span>
          <h2 className="countdown-title">Countdown Timer</h2>
          <GiBigDiamondRing className="timer-icon"/>
          <p>Countdown until Wedding Day!</p>
        </div>
        <div>
          <section>
            <p>100</p>
            <p><small>Days</small></p>
          </section>
          <span>:</span>
          <section>
            <p>15</p>
            <p><small>Hours</small></p>
          </section>
          <span>:</span>
          <section>
            <p>19</p>
            <p><small>Minutes</small></p>
          </section>
          <span>:</span>
          <section>
            <p>40</p>
            <p><small>Seconds</small></p>
          </section>
        </div>
      </section>
    </section>
    </div>
  );
}

export default Home;




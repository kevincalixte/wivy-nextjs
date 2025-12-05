  {/* <li><Link href={('')} ><FiSearch />Meet</Link></li>
          <li><Link href={('')} ><FiUsers />Friends</Link></li>
          <li><Link href={('')} ><FiHeart />Love</Link></li> */}

            <ul className='flex gap-3 z-10 [&>li>a]:flex [&>li>a]:items-center [&>li>a]:gap-1 '>
         navbartop
        </ul>

        "use client";
import React, { useState, useEffect } from "react";

function Feedback() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    fetch('/data/feedbacks.json')
      .then(res => res.json())
      .then(data => setFeedbacks(data));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % feedbacks.length);
    }, 3000); // 3s entre chaque card
    return () => clearTimeout(timer);
  }, [current, feedbacks.length]);

  return (
    <section className="relative w-full h-40 flex items-center justify-center overflow-hidden">
      {feedbacks.map((fb, idx) => (
        <div
          key={fb.id}
          className={`absolute w-3/4 transition-all duration-700
            ${idx === current ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
          `}
        >
          <FeedbackCard feedback={fb} />
        </div>
      ))}
    </section>
  );
}
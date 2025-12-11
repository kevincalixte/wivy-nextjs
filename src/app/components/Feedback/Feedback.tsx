"use client"
import React, { useEffect, useState } from 'react'
import { MdQuestionAnswer } from "react-icons/md";

// Avis utilisateurs
type Feedback = {
    id: number;
    name: string;
    mail: string;
    subject: string;
    message: string;
    date: string;
    hour: string;
};

function FeedbackCard({ feedback }: { feedback: Feedback }) {
    return (
        <div className='relative flex justify-center'>
            <article className='absolute flex flex-col items-center w-[80%] gap-1 p-5 rounded-xs bg-gray-300 text-black hover:bg-white hover:cursor-pointer'>
                <h3>{feedback.name}</h3>
                <p className='text-xs text-black-300'>About : {feedback.subject}</p>
                <p>{feedback.message}</p>
                <p className='flex items-center self-end gap-1 pt-3 text-xs'>Show response<MdQuestionAnswer /></p>
            </article>
        </div>
    );
}

function Feedback() {

    const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
    useEffect(() => {
        fetch('/data/feedbacks.json')
            .then(response => response.json())
            .then(data => setFeedbacks(data));
    }, []);
    return (
        <section className='w-full min-h-40'>
            <h2 className='text-2xl mb-10 text-center'>Ask Us Anything</h2>
            {feedbacks.map((feedback) => (
                <FeedbackCard key={feedback.id} feedback={feedback} />
            ))}
        </section>
    )
}

export default Feedback
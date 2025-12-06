"use client"
import React, { useEffect, useState } from 'react'
import { MdQuestionAnswer } from "react-icons/md";

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
        <div className='relative flex justify-center '>
            <article className='absolute bg-white hover:bg-white hover:cursor-pointer text-black flex flex-col gap-1 items-center rounded-lg p-5 w-3/4'>
                <h3>{feedback.name}</h3>
                <p className='text-xs text-black-300'>About : {feedback.subject}</p>
                <p>{feedback.message}</p>
                <p className='flex pt-3 text-xs gap-1 items-center self-end'>Show response<MdQuestionAnswer /></p>
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
        <section className='min-h-40 w-full '>
            {/* flex flex-col gap-2 */}
            <h2 className='text-2xl mb-10 text-center'>Ask Us Anything</h2>

            {/* Faire defiler les avis de droite a gauche en continu */}
            {feedbacks.map((feedback) => (
                <FeedbackCard key={feedback.id} feedback={feedback} />
            ))}
        </section>
    )
}

export default Feedback
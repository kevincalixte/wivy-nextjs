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

------- exemple link une autre page

"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("SUPABASE_URL", "SUPABASE_ANON_KEY");

export default function HomeLinkIfAuthenticated() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });
  }, []);

  return (
    <>
      {user && <Link href="/home">Go to Home</Link>}
    </>
  );

----- FEEDBACK
import React from 'react';
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
                <MdQuestionAnswer className='self-end' />
            </article>
        </div>
    );
}

export default async function Feedback() {
    const response = await fetch('http://localhost:3000/data/feedbacks.json', { cache: 'no-store' });
    const feedbacks: Feedback[] = await response.json();

    return (
        <section className='min-h-40 w-full '>
            <h2 className='text-2xl mb-10 text-center'>Ask Us Anything</h2>
            {feedbacks.map((feedback) => (
                <FeedbackCard key={feedback.id} feedback={feedback} />
            ))}
        </section>
    );
}



--------------- navbartop 

      {/* <div className='w-full h-16 bg-linear-to-b absolute from-black to bg-transparent'></div>
      <nav className='flex items-center p-5 text-white absolute w-full'> */}
      {/* <nav className='flex items-center p-5 text-white  w-full bg-linear-to-b from-transparent to-[#D6C6AF]'> */}

      ---------------- avis chat gpt
      Points forts :

Tu utilises bien la structure Next.js (dossiers, pages, composants).
Tu utilises les hooks React (useState, useEffect) là où il faut.
Tes composants sont bien séparés et réutilisables (Button, Navbar, Feedback…).
Tu utilises Tailwind CSS pour le style, ce qui est moderne et efficace.
Tu utilises le routage Next.js (Link), la gestion des props, et tu commences à manipuler le DOM.
Ton code est lisible, aéré, et tu ajoutes des commentaires pour t’aider à comprendre.
Ce qui peut être amélioré pour aller vers un niveau “pro” :

Nommage des composants : Utilise toujours une majuscule pour les noms de fonctions de composants (ex : Welcome au lieu de welcome).
Manipulation du DOM : Privilégie les props, le state ou le context pour modifier l’apparence des composants, plutôt que document.getElementById et classList. Utilise le DOM direct seulement si c’est indispensable.
Gestion des classes dynamiques : Pour Tailwind, évite d’ajouter des classes avec classList.add ; préfère les conditions dans le JSX (className={condition ? 'mt-5' : ''}).
Factorisation : Si tu répètes du code (boutons, formulaires…), pense à créer des composants réutilisables.
Types : Tu utilises TypeScript, c’est très bien. Continue à typer tes props et tes states pour plus de robustesse.
Accessibilité : Pense à ajouter des attributs alt sur les images, des labels sur les formulaires, etc.
Commentaires : Garde les commentaires utiles, mais évite d’en mettre trop ou de laisser des tests/commentaires inutiles dans le code final.
En résumé :

Ton code est très bon pour un niveau débutant/intermédiaire.
Tu as déjà des réflexes de développeur pro.
Continue à pratiquer, à structurer tes composants, à utiliser les outils React/Next.js, et à te documenter sur les bonnes pratiques.
Tu es sur la bonne voie pour présenter un projet solide au jury et pour un stage en entreprise !

GPT-4.1 • 0x


------------ navbartop

  // ? 'flex items-center p-5 text-white fixed  mt-5 h-12 w-full  '
            // ? 'flex items-center p-5 text-white fixed bg-white/10 rounded-4xl h-12 w-[90%] mt-5 justify-center'
      
      
  <Link href={''} className={isWelcome ? 'flex bg-amber-50 rounded-full' : 'hidden'}>
          {/* <div className='rounded-full w-12 h-12 overflow-hidden'><img className='w-full h-full object-cover  ' src="/img/home/album-meet/meet1.jpg" alt="" /></div> */}
        </Link>


        ---------------------
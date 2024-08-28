'use client'
import {useUser} from '@clerk/nextjs'
import {useEffect, useState} from 'react'
import {CollectionReference, doc, getDoc, setDoc} from 'firebase/firestore'
import {db} from '@/firebase'
import {useRouter} from 'next/navigation'

export default function Flashcards() {
    const {isLoaded, isSignedIn, user} = useUser()
    const [flashcards, setFlashcards] = useState([])
    
    useEffect(() => {
        async function getFlashcards() {
            if(!user) return
            const docRef = doc(db, 'users', user.id)
            const docSnap = await getDoc(docRef)
            if(docSnap.exists()) {
                const collections = docSnap.data().flashcards || []
                setFlashcards(collections)
            }
            else {
                await setDoc(docRef, {flashcards: []})
            }
        }
        getFlashcards()
    }, [user])

    if(!isLoaded || !isSignedIn) 
        return <></>

    const handleCardClick = (id) => {
        Router.push(`/flashcards?id=${id}`)
    }
}
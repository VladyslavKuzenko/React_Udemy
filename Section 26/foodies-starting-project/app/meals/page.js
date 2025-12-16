import Link from 'next/link'
import classes from './page.module.css'
import MealsGrid from '@/components/meals/meals-grid'
import { getMeals } from '@/lib/meals'
import { Suspense } from 'react'

export const metadata = {
    title: 'All Meals',
    description: 'Browse the delicious meals shared by our vibrant community.',
};

async function Meals() {
    const meals = await getMeals()
    return (<MealsGrid meals={meals} />)
}

export default function MealsPage() {
    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious meals, created{' '}
                    <span className={classes.highlight}>by you</span>
                </h1>
                <p>
                    Choose your favorite recipe and cook it yourself. It is easy and fun!
                </p>
                <p className={classes.cta}>
                    <Link href='/meals/share'>Share Your Favorite Recipe</Link>
                </p>
            </header>
            <main className={classes.main}>
                <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
                    <Meals />
                </Suspense>
            </main>
        </>
    )
}

// import Image from 'next/image'
// import classes from './page.module.css'
// import Link from 'next/link'
// import { getMeal } from '@/lib/meals'
// import { notFound } from 'next/navigation'

// export default function MealDetailsPage({ params }) {
//     const meal = getMeal(params.mealSlug)

//     if (!meal) {
//         notFound()
//     }

//     meal.instructions = meal.instructions.replace(/\n/g, '<br />')

//     return (
//         <>
//             <header className={classes.header}>
//                 <div className={classes.image}>
//                     <Image src={meal.image} alt='Burger' fill />
//                 </div>
//                 <div className={classes.headerText}>
//                     <h1>{meal.title}</h1>
//                     <p className={classes.creator}>
//                         by <Link href={`mailto:${meal.creator_email}}`}>{meal.creator}</Link>
//                     </p>
//                     <p className={classes.summary}>
//                         {meal.summary}
//                     </p>
//                 </div>
//             </header>
//             <main>
//                 <p className={classes.instructions} dangerouslySetInnerHTML={{
//                     __html: meal.instructions
//                 }}></p>
//             </main>
//         </>
//     )
// }

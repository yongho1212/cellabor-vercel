/**
 * v0 by Vercel.
 * @see https://v0.dev/t/BKT3BjqfYkP
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import React from 'react';
import {Link} from 'react-router-dom';
import LandingItem from '../@organism/LandingItem';
import {landingData} from '../../mockups/landingData';
import RootContainer from '../@layouts/RootContainer';

export default function LandingPage() {

    const aaa = [1,2,3];

    return (
        <div className="flex min-h-[100dvh]">
            <main className="flex-1">
                {landingData.map((item) => (
                    <RootContainer>

                        <LandingItem
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                        />
                    </RootContainer>
                ))}
                {/*<section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">*/}
                {/*    <div className="px-4 md:px-6 w-full">*/}
                {/*        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px] w-full">*/}
                {/*            <div className="flex flex-col justify-center space-y-4 lg:justify-self-start">*/}
                {/*                <div className="space-y-2">*/}
                {/*                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">*/}
                {/*                        Unlock the Power of Influencer Marketing*/}
                {/*                    </h1>*/}
                {/*                    <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">*/}
                {/*                        Our platform connects brands with the right influencers to drive authentic*/}
                {/*                        engagement and measurable results.*/}
                {/*                    </p>*/}
                {/*                </div>*/}
                {/*                <div className="flex flex-col gap-2 min-[400px]:flex-row">*/}
                {/*                    <Link to={'/'}>*/}
                {/*                        Get Started*/}
                {/*                    </Link>*/}
                {/*                    <Link to={'/'}>*/}
                {/*                        Learn More*/}
                {/*                    </Link>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <img*/}
                {/*                alt="Hero"*/}
                {/*                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last lg:justify-self-end"*/}
                {/*                height="400"*/}
                {/*                src="https://placehold.co/400"*/}
                {/*                width="600"*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}

                {/*<section className="w-full py-12 md:py-24 lg:py-32">*/}
                {/*    <div className="  px-4 md:px-6">*/}
                {/*        <div*/}
                {/*            className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">*/}
                {/*            <div className="space-y-2">*/}
                {/*                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">*/}
                {/*                    Influencer Discovery*/}
                {/*                </div>*/}
                {/*                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Find the Perfect*/}
                {/*                    Influencers</h2>*/}
                {/*                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">*/}
                {/*                    Our advanced search and filtering tools help you discover influencers that perfectly*/}
                {/*                    align with your*/}
                {/*                    brand and campaign goals.*/}
                {/*                </p>*/}
                {/*                <ul className="grid gap-2 py-4">*/}
                {/*                    <li>*/}
                {/*                        <CheckIcon className="mr-2 inline-block h-4 w-4" />*/}
                {/*                        Comprehensive influencer profiles*/}
                {/*                    </li>*/}
                {/*                    <li>*/}
                {/*                        <CheckIcon className="mr-2 inline-block h-4 w-4" />*/}
                {/*                        Advanced search and filtering*/}
                {/*                    </li>*/}
                {/*                    <li>*/}
                {/*                        <CheckIcon className="mr-2 inline-block h-4 w-4" />*/}
                {/*                        Detailed audience analytics*/}
                {/*                    </li>*/}
                {/*                </ul>*/}
                {/*            </div>*/}
                {/*            <img*/}
                {/*                alt="Influencer Discovery"*/}
                {/*                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"*/}
                {/*                height="310"*/}
                {/*                src="https://placehold.co/400"*/}
                {/*                width="550"*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}
                {/*<section className="w-full py-12 md:py-24 lg:py-32">*/}
                {/*    <div className="  px-4 md:px-6">*/}
                {/*        <div className="grid items-center gap-6 lg:grid-cols-[500px_1fr] lg:gap-12 xl:grid-cols-[550px_1fr]">*/}
                {/*            <img*/}
                {/*                alt="Campaign Management"*/}
                {/*                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"*/}
                {/*                height="310"*/}
                {/*                src="https://placehold.co/400"*/}
                {/*                width="550"*/}
                {/*            />*/}
                {/*            <div className="space-y-2">*/}
                {/*                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">*/}
                {/*                    Campaign Management*/}
                {/*                </div>*/}
                {/*                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Streamline Your Campaigns</h2>*/}
                {/*                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">*/}
                {/*                    Our platform provides all the tools you need to manage your influencer marketing campaigns from start*/}
                {/*                    to finish.*/}
                {/*                </p>*/}
                {/*                <ul className="grid gap-2 py-4">*/}
                {/*                    <li>*/}
                {/*                        <CheckIcon className="mr-2 inline-block h-4 w-4" />*/}
                {/*                        Automated campaign workflows*/}
                {/*                    </li>*/}
                {/*                    <li>*/}
                {/*                        <CheckIcon className="mr-2 inline-block h-4 w-4" />*/}
                {/*                        Real-time campaign monitoring*/}
                {/*                    </li>*/}
                {/*                    <li>*/}
                {/*                        <CheckIcon className="mr-2 inline-block h-4 w-4" />*/}
                {/*                        Seamless influencer collaboration*/}
                {/*                    </li>*/}
                {/*                </ul>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}
                {/*<section className="w-full py-12 md:py-24 lg:py-32">*/}
                {/*    <div className="  px-4 md:px-6">*/}
                {/*        <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">*/}
                {/*            <div className="space-y-2">*/}
                {/*                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Analytics</div>*/}
                {/*                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Measure Your Success</h2>*/}
                {/*                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">*/}
                {/*                    Our advanced analytics tools provide deep insights into your influencer marketing campaigns, helping*/}
                {/*                    you make data-driven decisions.*/}
                {/*                </p>*/}
                {/*                <ul className="grid gap-2 py-4">*/}
                {/*                    <li>*/}
                {/*                        <CheckIcon className="mr-2 inline-block h-4 w-4" />*/}
                {/*                        Comprehensive campaign reporting*/}
                {/*                    </li>*/}
                {/*                    <li>*/}
                {/*                        <CheckIcon className="mr-2 inline-block h-4 w-4" />*/}
                {/*                        Audience demographics and engagement*/}
                {/*                    </li>*/}
                {/*                    <li>*/}
                {/*                        <CheckIcon className="mr-2 inline-block h-4 w-4" />*/}
                {/*                        ROI and performance tracking*/}
                {/*                    </li>*/}
                {/*                </ul>*/}
                {/*            </div>*/}
                {/*            <img*/}
                {/*                alt="Analytics"*/}
                {/*                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"*/}
                {/*                height="310"*/}
                {/*                src="https://placehold.co/400"*/}
                {/*                width="550"*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}
                {/*<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">*/}
                {/*    <div className=" px-4 md:px-6">*/}
                {/*        <div className="grid items-center justify-center gap-4 text-center">*/}
                {/*            <div className="space-y-3">*/}
                {/*                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">*/}
                {/*                    Trusted by Leading Brands*/}
                {/*                </h2>*/}
                {/*                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">*/}
                {/*                    Our platform has helped some of the world's most recognized brands achieve their influencer marketing*/}
                {/*                    goals.*/}
                {/*                </p>*/}
                {/*            </div>*/}
                {/*            <div className="divide-y rounded-lg border">*/}
                {/*                <div className="grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-5">*/}
                {/*                    <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">*/}
                {/*                        <img*/}
                {/*                            alt="Client Logo"*/}
                {/*                            className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"*/}
                {/*                            height="70"*/}
                {/*                            src="https://placehold.co/400"*/}
                {/*                            width="140"*/}
                {/*                        />*/}
                {/*                    </div>*/}
                {/*                    <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">*/}
                {/*                        <img*/}
                {/*                            alt="Client Logo"*/}
                {/*                            className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"*/}
                {/*                            height="70"*/}
                {/*                            src="https://placehold.co/400"*/}
                {/*                            width="140"*/}
                {/*                        />*/}
                {/*                    </div>*/}
                {/*                    <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">*/}
                {/*                        <img*/}
                {/*                            alt="Client Logo"*/}
                {/*                            className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"*/}
                {/*                            height="70"*/}
                {/*                            src="https://placehold.co/400"*/}
                {/*                            width="140"*/}
                {/*                        />*/}
                {/*                    </div>*/}
                {/*                    <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">*/}
                {/*                        <img*/}
                {/*                            alt="Client Logo"*/}
                {/*                            className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"*/}
                {/*                            height="70"*/}
                {/*                            src="https://placehold.co/400"*/}
                {/*                            width="140"*/}
                {/*                        />*/}
                {/*                    </div>*/}
                {/*                    <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">*/}
                {/*                        <img*/}
                {/*                            alt="Client Logo"*/}
                {/*                            className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"*/}
                {/*                            height="70"*/}
                {/*                            src="https://placehold.co/400"*/}
                {/*                            width="140"*/}
                {/*                        />*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}
                {/*<section className="w-full py-12 md:py-24 lg:py-32 border-t">*/}
                {/*    <div className=" px-4 md:px-6">*/}
                {/*        <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">*/}
                {/*            <div className="space-y-4">*/}
                {/*                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">*/}
                {/*                    Testimonials*/}
                {/*                </div>*/}
                {/*                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">*/}
                {/*                    What Our Clients Say*/}
                {/*                </h2>*/}
                {/*                <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">*/}
                {/*                    “The Influencer Platform has been a game-changer for our brand. The insights and campaign management*/}
                {/*                    tools have helped us achieve incredible results.“*/}
                {/*                </blockquote>*/}
                {/*                <div>*/}
                {/*                    <div className="font-semibold">Sarah Johnson</div>*/}
                {/*                    <div className="text-sm text-gray-500 dark:text-gray-400">Marketing Manager, Acme Co.</div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className="flex flex-col items-start space-y-4">*/}
                {/*                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">*/}
                {/*                    Get Started*/}
                {/*                </div>*/}
                {/*                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">*/}
                {/*                    Ready to take your influencer marketing to the next level? Sign up for a free trial and see the*/}
                {/*                    difference our platform can make.*/}
                {/*                </p>*/}
                {/*                <div className="flex flex-col gap-2 min-[400px]:flex-row">*/}
                {/*                    <Link to={'/'}>*/}
                {/*                        Sign Up*/}
                {/*                    </Link>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}
            </main>
        </div>
    );
}

function CheckIcon(props:any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 6 9 17l-5-5" />
        </svg>
    );
}


function MountainIcon(props:any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    );
}

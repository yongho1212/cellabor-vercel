// @flow
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

type Props = {
    title: string;
    description: string;
    image: string;
};
const LandingItem = (props: Props) => {
    return (
        <>
            <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                <div className="px-4 md:px-6 w-full flex ">
                    <div className="w-full justify-between grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px] w-4/5  ">
                        <div className="flex flex-col justify-center space-y-4 lg:justify-self-start">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                    {props.title}
                                </h1>
                                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                                    {props.description}
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Link to={'/'} style={{ border: '1px solid grey', padding: '0.5rem', borderRadius:'10px' }}>
                                    Get Started
                                </Link>
                                <Link to={'/'} style={{ border: '1px solid grey', padding: '0.5rem', borderRadius:'10px' }}>
                                    Learn More
                                </Link>
                            </div>
                        </div>
                        <img
                            alt="Hero"
                            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last lg:justify-self-end"
                            height="400"
                            src={props.image}
                            width="600"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default LandingItem;

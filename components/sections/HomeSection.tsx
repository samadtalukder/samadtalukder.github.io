'use client';

import {about} from '@/lib/data';
import Image from 'next/image';
import {motion} from 'framer-motion';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAndroid, faAppStoreIos, faFlutter, faGithub, faReact} from '@fortawesome/free-brands-svg-icons';
import {faCube, faLayerGroup} from '@fortawesome/free-solid-svg-icons';
import {Button} from '@/components/ui/button';
import {TypeAnimation} from 'react-type-animation';
import {getSocialIcon} from '@/lib/icons';

const skills = [
    {name: 'Android', icon: faAndroid},
    {name: 'Flutter', icon: faFlutter},
    {name: 'iOS', icon: faAppStoreIos},
    {name: 'React Native', icon: faReact},
    {name: 'KMP', icon: faCube},
    {name: 'Jetpack Compose', icon: faLayerGroup},
    {name: 'Github', icon: faGithub},
];

export default function HomeSection() {
    return (
        <section id="home"
                 className="min-h-screen flex items-center py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div
                    className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center max-w-7xl mx-auto pb-16 sm:pb-20 md:pb-24">
                    {/* Left side - Content */}
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{
                            duration: 1.2,
                            ease: [0.22, 1, 0.36, 1],
                            delay: 0.1
                        }}
                        className="space-y-6 md:space-y-8 lg:space-y-12"
                    >
                        {/* Name and Title */}
                        <div>
                            <motion.h2
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{
                                    duration: 1,
                                    ease: [0.22, 1, 0.36, 1],
                                    delay: 0.3
                                }}
                                className="font-montserrat text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-brand-orange mb-6 md:mb-8 lg:mb-12"
                            >
                                Hello, <span className="text-brand-dark">I&#39;m</span>
                            </motion.h2>
                            <motion.div
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{
                                    duration: 1,
                                    ease: [0.22, 1, 0.36, 1],
                                    delay: 0.5
                                }}
                                className="border-l-4 border-brand-orange pl-4 mb-8 md:mb-10 lg:mb-14"
                            >
                                <h1 className="font-montserrat font-bold text-lg sm:text-xl text-brand-dark mb-2">{about.name}</h1>
                                <div
                                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-orange min-h-10 sm:min-h-12 md:min-h-14 lg:min-h-16 flex items-center">
                                    <TypeAnimation
                                        sequence={[
                                            'ANDROID DEVELOPER',
                                            2000,
                                            'KOTLIN EXPERT',
                                            2000,
                                            'FLUTTER DEVELOPER',
                                            2000,
                                        ]}
                                        speed={30}
                                        wrapper={"h1"}
                                        repeat={Infinity}
                                        cursor={false}

                                    />
                                </div>
                            </motion.div>
                        </div>

                        {/* CTA Buttons with Social Links */}
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{
                                duration: 1,
                                ease: [0.22, 1, 0.36, 1],
                                delay: 0.7
                            }}
                            className="flex flex-wrap items-center gap-3 sm:gap-4"
                        >
                            <Button
                                className="font-montserrat font-semibold bg-brand-orange hover:bg-brand-orange-hover text-white px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base rounded-full"
                                size="lg"
                                asChild
                            >
                                <a href="#contact">
                                    Let&#39;s Talk
                                </a>
                            </Button>

                            {/* Social Links */}
                            {about.social.map((social, index) => {
                                const Icon = getSocialIcon(social.icon);
                                return (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full border-2 border-gray-700 hover:border-brand-orange hover:bg-gray-800 flex items-center justify-center transition-all hover:scale-110 text-gray-400 hover:text-brand-orange"
                                    >
                                        <Icon className="w-4 h-4"/>
                                    </a>
                                );
                            })}
                        </motion.div>


                    </motion.div>

                    {/* Right side - Photo */}
                    <motion.div
                        initial={{opacity: 0, scale: 0.95, y: 30}}
                        animate={{opacity: 1, scale: 1, y: 0}}
                        transition={{
                            duration: 1.2,
                            ease: [0.22, 1, 0.36, 1],
                            delay: 0.3
                        }}
                        className="flex justify-center lg:justify-end relative mt-8 lg:mt-0"
                    >
                        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                            {/* Decorative angle brackets */}
                            <motion.div
                                initial={{opacity: 0, x: -20}}
                                animate={{opacity: 0.4, x: 0}}
                                transition={{
                                    duration: 1,
                                    ease: [0.22, 1, 0.36, 1],
                                    delay: 0.6
                                }}
                                className="absolute -left-8 sm:-left-10 md:-left-12 lg:-left-16 top-1/2 -translate-y-1/2 text-brand-orange text-4xl md:text-5xl lg:text-6xl font-light"
                            >
                                {'{'}
                            </motion.div>
                            <motion.div
                                initial={{opacity: 0, x: 20}}
                                animate={{opacity: 0.4, x: 0}}
                                transition={{
                                    duration: 1,
                                    ease: [0.22, 1, 0.36, 1],
                                    delay: 0.6
                                }}
                                className="absolute -right-8 sm:-right-10 md:-right-12 lg:-right-16 top-1/2 -translate-y-1/2 text-brand-orange text-4xl md:text-5xl lg:text-6xl font-light"
                            >
                                {'}'}
                            </motion.div>
                            {/* Coral background behind */}
                            <div className="absolute inset-0 rounded-lg -z-10 scale-90"></div>
                            {/* Photo with original aspect ratio */}
                            <div className="relative w-full h-full rounded-lg overflow-hidden">
                                <Image
                                    src={`/images/${about.image.replace('img/', '')}`}
                                    alt={about.name}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Skills List - full width background strip at bottom */}
            <motion.div
                initial={{opacity: 0, y: 30}}
                animate={{opacity: 1, y: 0}}
                transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.9
                }}
                className="absolute bottom-0 left-0 right-0 py-6 sm:py-8 md:py-10 lg:py-12 z-20"
                style={{
                    background: 'radial-gradient(ellipse at center, #FAFAFA 100%, #E9E3DE 0%)'
                }}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div
                        className="flex flex-wrap gap-x-6 sm:gap-x-8 md:gap-x-10 lg:gap-x-12 gap-y-6 sm:gap-y-8 justify-center lg:justify-between max-w-7xl mx-auto">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{opacity: 0, y: 10}}
                                animate={{opacity: 1, y: 0}}
                                transition={{
                                    duration: 0.6,
                                    ease: [0.22, 1, 0.36, 1],
                                    delay: 1 + index * 0.08
                                }}
                                className="group flex items-center justify-center cursor-pointer"
                                title={skill.name}
                            >
                                <FontAwesomeIcon
                                    icon={skill.icon}
                                    className="text-[24px] sm:text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-black transition-all duration-300 group-hover:scale-110 group-hover:text-brand-orange"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

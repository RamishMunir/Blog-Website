import * as motion from "motion/react-client";
import {Button } from "@/components/ui/button";

export default function HeroSection(){
    return(
        <section className="flex min-h-[90vh] items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-8xl mx-auto ">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div 
                    initial = {{opacity: 0, y: 20}}
                    animate = {{opacity:1, y:0}}
                    transition = {{duration: 0.5}}
                    className="p-2">
                        <div className="text-4xl sm:text-6xl lg:text-8xl font-sans">
                            Blogs that <span className="font-bold capitalize text-chart-3 italic">spark</span>
                        </div>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Excepturi suscipit dolorum enim dolores nihil perferendis est 
                            perspiciatis odio odit delectus deserunt, tempora nulla nam officiis 
                            error impedit molestias dolore culpa!</p>

                        <Button className="mt-2">
                            Read the Latest
                        </Button>
                    </motion.div>


                    <motion.div 
                    initial = {{opacity: 0, scale:0.8}}
                    animate = {{ opacity: 1, scale: 1}}
                    transition = {{ duration: 0.8, delay: 0.4}}
                    className="hidden lg:block">

                        <div className="relative">
                            <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl absolute lg:right-120">

                            </div>

                            <div className="w-96 h-96 lg:w-130 lg:h-130 bg-gradient-to-tl from-secondary/30 to-primary/30 rounded-2xl transform rotate-6 shadow-2xl">

                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <Card>
          <CardContent className="p-8 space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Currently, I'm a 3rd-year undergraduate student at PJLCE pursuing my Bachelor's in Technology in the field of Artificial Intelligence. I have explored and gained knowledge about programming languages like C and Java, along with Object-Oriented Programming. Apart from this, web development is my main domain of interest, in which I have quite good knowledge compared to other technologies, and I am still learning.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Backend Development</h3>
              <p className="text-muted-foreground">
                Proficient in Java and Python for robust backend systems. I specialize in building RESTful APIs and microservices using Flask and Express.js frameworks. My experience with both SQL (MySQL) and NoSQL (MongoDB) databases enables me to design efficient and scalable data solutions.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Full-Stack Integration</h3>
              <p className="text-muted-foreground">
                With extensive experience in Node.js and Express.js, I excel at creating seamless integrations between frontend and backend systems. I focus on building performant, secure, and maintainable applications that deliver exceptional user experiences.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Development Philosophy</h3>
              <p className="text-muted-foreground">
                I believe in writing clean, maintainable code and following best practices in software development. My approach combines technical excellence with practical problem-solving to deliver solutions that not only work well but are also sustainable in the long term.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
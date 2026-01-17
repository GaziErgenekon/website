import React from 'react';
import { supporters } from '../../constants';

const Supporters = () => {
  return (
    <section className="w-full py-20 bg-background text-foreground">
      <div className="container px-4 mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 sec-title">
            <span className="text-gradient-b from-foreground to-foreground/70">Destekçilerimiz</span>
          </h2>
          <p className="text-foreground/60 text-lg font-light">
            Bize inanan ve yolculuğumuzda yanımızda olan değerli paydaşlarımız.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-12 items-center justify-center">
          {supporters.map((item, index) => (
            <div 
              key={index} 
              className="group col-center justify-center text-center"
            >
              <div className="h-20 w-full flex-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="max-h-full max-w-full object-contain opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
              </div>

              <span className="text-sm font-medium text-foreground/60 group-hover:text-foreground/90 transition-colors">
                {item.name}
              </span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Supporters;
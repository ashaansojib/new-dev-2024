import React from "react";

const AboutMe = () => {
  return (
    <section className="grid grid-cols-3 gap-4 justify-between">
      <div className="col-span-2 my-border p-4">
        <h2 className="text-5xl font-bold">
          Achievements in my professional life.
        </h2>
        <p className="py-4 text-accent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima commodi aut amet impedit neque sapiente optio mollitia autem voluptates, at, nobis fugiat, ipsa non quia eos vel possimus iure totam.</p>
        <p className="pb-6 text-accent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ea laborum, ratione nostrum maxime a totam ullam harum sapiente id adipisci, unde, dignissimos esse maiores reprehenderit non veritatis doloremque. Nulla.</p>

        <button className="my-btn">Contact Me</button>
      </div>
      <div className="my-border p-4">
        <h2 className="text-xl font-semibold">Interface Designer</h2>
        <p className="py-4 text-accent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima commodi aut amet impedit neque sapiente optio mollitia autem voluptates, at, nobis fugiat, ipsa non quia eos vel possimus iure totam.</p>
      </div>
    </section>
  );
};

export default AboutMe;

import React from "react";

const ACM = () => {
  return (
    <div className="mx-5 mt-2">
      <h1 className="box blackOps text-center text-9xl">ACM</h1>
      <h2 className="mb-3 text-xl">Student group</h2>
      <p className="mb-2">
        As of January, I joined the ACM group&apos;s board of directors as the
        head of logistics. Being member of the group I had the opportunity to
        participate in coding and algorithm classes we prepared to promote other
        students to participate in the ICPC.
      </p>
      <p className="mb-2">
        We also organized the ICPC competitions in Tec Campus Querétaro, and I
        was able to participate with my teammates Kamila Martinez and Diego
        Pasaye, and qualified to the nationals in Monterrey.
      </p>
      <p className="mb-10">
        Thanks to the group I started web development and learned many skills
        like the T3 stack which uses Next.js, React, Tailwind, Postgres and
        Prisma. With this stack we developed the main page for the group, and
        the page for a medical organization called Querétaro Si Sonrie which we
        are still working on.
      </p>

      <a
        href="https://acm-web-tecqro.vercel.app"
        className="mb-3 text-xl underline"
      >
        ACM web page
      </a>
      <aside className="no-scrollbar mx-auto my-4 flex w-5/6 snap-x snap-mandatory grid-cols-2 flex-nowrap gap-3 overflow-x-scroll border-red-50 px-28">
        <img
          src="/images/acmWeb/MainPage.png"
          className="h-[40rem] snap-center"
        />
        <img
          src="/images/acmWeb/calendar.png"
          className="h-[40rem] snap-center"
        />
        <img
          src="/images/acmWeb/contributions.png"
          className="h-[40rem] snap-center"
        />
        <img
          src="/images/acmWeb/contact.png"
          className="h-[40rem] snap-center"
        />
      </aside>
      <h2 className="mb-3 text-xl">Querétaro Si Sonrie</h2>

      <aside
        className="no-scrollbar mx-auto my-4 flex w-5/6 snap-x snap-mandatory grid-cols-2 flex-nowrap gap-3 overflow-x-scroll border-red-50 px-28"
        data-carrousel-item="active"
      >
        <img
          src="/images/queretaroSS/MainPage.png"
          className="h-[40rem] snap-center"
          data-carrousel-item
        />
        <img
          src="/images/queretaroSS/servicios.png"
          className="h-[40rem] snap-center"
          data-carrousel-item
        />
        <img
          src="/images/queretaroSS/login.png"
          className="h-[40rem] snap-center"
          data-carrousel-item
        />
        <img
          src="/images/queretaroSS/users.png"
          className="h-[40rem] snap-center"
          data-carrousel-item
        />
      </aside>
    </div>
  );
};

export default ACM;

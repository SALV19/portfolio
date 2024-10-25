import React from "react";

const QSS = () => {
  return (
    <div className="mx-5 mt-2">
      <h1 className="box mb-7 text-center text-9xl">Querétaro si Sonrie</h1>
      <h2 className="mb-3 text-xl">Student group: Solidary project</h2>
      <p className="mb-2">
        Querétaro si Sonrie is an organization that helps kids and people
        without access to a lot of resources or private healthcare for
        maxillofacial surgery or other medical attention.
      </p>
      <p className="mb-2">
        As a member of ACM and a selected group of other members of the group we
        started developing a page for the organization with the purpose or
        bringing greater attention, increase donations, and help them keep track
        of patient-history, as well as create a place to inform people
        interested in helping as volunteers or who might need help.
      </p>
      <p className="mb-10">
        We worked on this project with the T3 stack, using tailwind for styling
        and postgres, prisma and tRPC for server side operations.
      </p>

      <h2 className="mb-3 text-xl">Querétaro Si Sonrie: web page</h2>
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

export default QSS;

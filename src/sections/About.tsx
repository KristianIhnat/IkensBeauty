import React from 'react';

const team = [
  {
    id: '1',
    name: 'Erika',
    role: 'Nechtová dizajnérka, Vizážistka',
    bio: 'Ahojte, volám sa Erika,\nManikúre sa venujem už 10 rokov, je to moja vášeň, ktorá sa postupne stala aj súčasťou môjho života. Salón Ikens beauty je dnes domovom nielen pre krásne nechty, ale aj pre úžasný tím kolegýň, ktoré zdieľajú moju víziu.\nVeríme, že krása je v detailoch, jednoduchosti a v tom, ako sa žena cíti. Našou prioritou je, aby ste od nás odchádzali nielen s dokonalými nechtami, ale aj s pocitom, že ste si dopriali chvíľu pre seba.\nVaša dôvera je pre nás najväčšou motiváciou. Teším sa na každé naše stretnutie – či už u mňa, alebo u dievčat z tímu Ikens Beauty.🤍',
    image: '/images/Erika.jpg',
    objectPosition: 'center 25%' // individuálny posun
  },
  {
    id: '3',
    name: 'Annamária',
    role: 'Nechtová dizajnérka',
    bio: 'Volám sa Annamaria, pochádzam z krásneho Liptovského Mikuláša. 🙂\nNechtovému dizajnu sa venujem už štyri roky – a stále ma to baví viac a viac! Rada skúšam nové štýly, hrám sa s farbami, vzormi či rôznymi technikami, takže každý necht je pre mňa malým umeleckým dielom.💅🏻\nKreativita je pre mňa kľúčom, preto sa u mňa nikdy nebudete nudiť. Moja práca je miestom, kde sa fantázia stáva skutočnosťou. Som veľmi pozitívna a usmiata, takže vám vždy prinesiem dobrú náladu a krásne nechty!💅🏻',
    image: '/images/AnnaMaria.jpg',
    objectPosition: 'center 60%' // individuálny posun
  },
  {
    id: '4',
    name: 'Beata',
    role: 'Nechtová dizajnérka, Vizážistka',
    bio: 'Volám sa Beata, pochádzam z krásneho Liptovského Mikuláša. 🙂\nNechtovému dizajnu sa venujem už štyri roky – a stále ma to baví viac a viac! Rada skúšam nové štýly, hrám sa s farbami, vzormi či rôznymi technikami, takže každý necht je pre mňa malým umeleckým dielom.💅🏻\nKreativita je pre mňa kľúčom, preto sa u mňa nikdy nebudete nudiť. Moja práca je miestom, kde sa fantázia stáva skutočnosťou. Som veľmi pozitívna a usmiata, takže vám vždy prinesiem dobrú náladu a krásne nechty!💅🏻',
    image: '/images/Beata.jpg',
    objectPosition: 'center 40%' // individuálny posun
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Toto sme my</h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Ahojte! Toto sme my, úplne obyčajné ženy, presne ako vy, ktoré milujú krásu a eleganciu.
            Sme tu, aby sme vám s radosťou a v pohodovej atmosfére pomohli vytvoriť nechty, ktoré zvýraznia vašu ženskosť a šarm. Nemusíte sa báť prísť a urobiť si chvíľku len pre seba – my sa o všetko postaráme.🖤
            Tešíme sa na každú z vás!
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Náš tím</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.id}
                className="bg-white/90 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 flex flex-col"
              >
                {/* Obrázok s individuálnym posunom */}
                <div className="w-full overflow-hidden aspect-[3/4] md:aspect-[2/3]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: member.objectPosition }}
                  />
                </div>
                  <div className="p-6 flex flex-col min-h-[420px]">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h4>
                  <p className="text-amber-800 mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 whitespace-pre-line">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    name: 'Manikúra',
    list: [
      { name: 'Klasická manikúra', price: '20 €' },
      { name: 'Japonská manikúra', price: '25 €' },
      { name: 'IBX + Gellak', price: '48 €' },
      { name: 'Gellak', price: '40 €' },
      { name: 'Nové gélové nechty', price: '50-65 €' },
      { name: 'Doplnenie gélových nechtov', price: '45-55 €' },
      { name: 'Dizajn', price: '2-5 €' },
      { name: 'Lakovanie', price: '5 €' },
      { name: 'Odstránenie po inom salóne', price: '3 €' },
    ],
  },
  {
    name: 'Vizáž',
    list: [
      { name: 'Denné líčenie', price: '30 €' },
      { name: 'Večerné líčenie', price: '50 €' },
      { name: 'Svadobné líčenie', price: '60 €' },
      { name: 'Foto líčenie', price: '50 €' },
      { name: 'Spoločenský účes', price: '30-50 €' },
      { name: 'Skúška líčenia/účesu', price: '* €' },
    ],
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Služby</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.name}
             className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:bg-white/95 hover:-translate-y-2"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                {service.name}
              </h3>
              <div className="space-y-4">
                {service.list.map((item) => (
                  <div
                    key={item.name}
                    className="flex justify-between items-center border-b border-gray-200/50 pb-2"
                  >
                    <span className="text-gray-800">{item.name}</span>
                    <span className="text-gray-900 font-semibold">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
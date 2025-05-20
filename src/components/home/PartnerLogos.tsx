
import { 
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";

const partners = [
  {
    id: 1,
    name: 'Acme Corporation',
    logo: 'https://placehold.co/200x80?text=ACME'
  },
  {
    id: 2,
    name: 'TechBuild Inc.',
    logo: 'https://placehold.co/200x80?text=TechBuild'
  },
  {
    id: 3,
    name: 'GreenWorks',
    logo: 'https://placehold.co/200x80?text=GreenWorks'
  },
  {
    id: 4,
    name: 'BuildRight Construction',
    logo: 'https://placehold.co/200x80?text=BuildRight'
  },
  {
    id: 5,
    name: 'EcoRenovate',
    logo: 'https://placehold.co/200x80?text=EcoRenovate'
  },
  {
    id: 6,
    name: 'Urban Designs',
    logo: 'https://placehold.co/200x80?text=UrbanDesigns'
  }
];

const PartnerLogos = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-civitas-dark mb-2">Our Trusted Partners</h3>
          <p className="text-civitas-dark/70">We collaborate with industry leaders to deliver excellence</p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {partners.map((partner) => (
                <CarouselItem key={partner.id} className="basis-full md:basis-1/3 lg:basis-1/6 pl-4">
                  <div className="p-4 flex items-center justify-center h-24">
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="max-h-16 opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;

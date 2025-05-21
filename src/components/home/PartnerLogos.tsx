
import { 
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";

const partners = [
  {
    id: 1,
    name: 'Devtraco Plus',
    logo: 'https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 2,
    name: 'Regimanuel Gray',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 3,
    name: 'GoldKey Properties',
    logo: 'https://images.unsplash.com/photo-1587614313085-5da51cebd8ac?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 4,
    name: 'Lakeside Estate',
    logo: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 5,
    name: 'Trasacco Group',
    logo: 'https://images.unsplash.com/photo-1560179304-c5a71bc094ed?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 6,
    name: 'Manet Properties',
    logo: 'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?auto=format&fit=crop&q=80&w=200'
  }
];

const PartnerLogos = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto">
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
                  <div className="p-4 flex items-center justify-center h-24 bg-white rounded-lg shadow-sm">
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="max-h-16 max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity"
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

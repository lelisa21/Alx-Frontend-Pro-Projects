import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);
  
  if (!property) return <p>Property not found</p>;

  return (
    <div className="container text-black/90 p-2">
      <PropertyDetail property={property} />
      <BookingSection price={property.price}/>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
      <ReviewSection reviews={property.reviews || []}/>
      </div>
    </div>
  );
}

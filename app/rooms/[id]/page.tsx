import { notFound } from "next/navigation";
import PlaceholderScreen from "@/components/ui/PlaceholderScreen";
import { getListing, listings } from "@/lib/data";

export function generateStaticParams() {
  return listings.map((listing) => ({ id: listing.id }));
}

export default async function RoomDetailPage({ params }: PageProps<"/rooms/[id]">) {
  const { id } = await params;
  const listing = getListing(id);

  if (!listing) notFound();

  return (
    <PlaceholderScreen
      title={listing.title}
      description={`${listing.location} · Aquí irán la galería, el anfitrión, las comodidades, el calendario y la barra de reserva.`}
    />
  );
}

import RoomDetailView from "@/components/room/RoomDetailView";
import { listings } from "@/lib/data";

export function generateStaticParams() {
  return listings.map((listing) => ({ id: listing.id }));
}

export default async function RoomDetailPage({
  params,
}: PageProps<"/rooms/[id]">) {
  const { id } = await params;

  // El id viaja al cliente, donde `RoomDetailView` simula la carga.
  // `key` fuerza el remontaje al cambiar de habitación, para que el estado
  // (fechas, huéspedes, carga) arranque limpio en cada ficha.
  return <RoomDetailView key={id} id={id} />;
}

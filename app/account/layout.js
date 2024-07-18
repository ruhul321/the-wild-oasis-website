import SideNavigation from "@/app/_components/SideNavigation";

export const metadata = {
  //title: "The Wild Oasis",
  title: {
    template: "%s | The Wild Oasis",
    default: "The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of Itilian Dolomites, surrounded by beautiful mountains and dark forest. ",
};

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}

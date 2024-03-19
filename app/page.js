import ObjectDetection from "@/components/object-detection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <h1 className="gradient-title font-bold text-3xl md:text-6xl text-center md:px-6 lg:text-8xl tracking-tighter">
        Thief Detection Alarm
      </h1>
      <ObjectDetection />
    </main>
  );
}

import Image from "next/Image";

export default function Home() {
  return (
    <>
      {/*clori per il tests */}

      <p class="text-red-500"> gio</p>
      <p class="text-red-500"> gio </p>
      <p class="text-red-500"> gio </p>

      {/*colori per lo sfondo*/}

      <div class="bg-lime-500">
        <p class="text-white">gio</p>
        <p class="text-white underline decoration-yellow-500 my-7">
          odio i froci
        </p>
      </div>
      {/* bordi e divisori */}

      <div class="bg-lime-500 border-2 border-rose-600">
        <p class="text-white">conosco giorgia</p>
      </div>

      <button class="bg-red-400 p4 rounded-full text-white">
        giorgia frocia
      </button>
    </>
  );
}

interface Props {
  title: string;
}

export default function TodoTitle({ title }: Props) {
  return (
    <div className="flex justify-center items-center mb-4 sm:mb-8">
      <h1
        className="text-xl sm:text-3xl font-extrabold text-transparent bg-clip-text 
        bg-gradient-to-r from-[#8fdccf] to-[#348bb1]
        drop-shadow-[2px_2px_0_rgba(0,0,0,0.4)] sm:drop-shadow-[3px_3px_0_rgba(0,0,0,0.4)] font-sans 
        px-3 sm:px-6 py-2 sm:py-4 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-[#8fdccf] sm:border-2 bg-[#d3ebe291]"
      >
        {title}
      </h1>
    </div>
  );
}

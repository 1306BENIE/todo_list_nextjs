interface Props {
  title: string;
}

export default function TodoTitle({ title }: Props) {
  return (
    <div className="flex justify-center items-center mb-8">
      <h1
        className="text-3xl font-extrabold text-transparent bg-clip-text 
        bg-gradient-to-r from-[#8fdccf] to-[#348bb1]
        drop-shadow-[3px_3px_0_rgba(0,0,0,0.4)] font-sans 
        px-6 py-4 rounded-2xl shadow-xl border-2 border-[#8fdccf] bg-[#d3ebe291]"
      >
        {title}
      </h1>
    </div>
  );
}

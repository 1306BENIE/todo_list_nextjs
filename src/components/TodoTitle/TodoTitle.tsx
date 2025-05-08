interface Props {
  title: string;
}

export default function TodoTitle({ title }: Props) {
  return (
    <h1 className="text-3xl font-bold text-center text-[#e8da7b] mb-6 border-b pb-2">
      {title}
    </h1>
  );
}

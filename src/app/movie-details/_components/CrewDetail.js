export const CrewDetail = (props) => {
  const { name, job } = props;
  return (
    <div className="flex gap-[8px] flex-col">
      <div className="flex gap-[60px]">
        <p className="text-black text-[16px] font-bold w-[64px]">{job}</p>
        <p className="text-black text-[16px] font-[300]">{name}</p>
      </div>
      <div className="border w-[full] h-[1px]"></div>
    </div>
  );
};

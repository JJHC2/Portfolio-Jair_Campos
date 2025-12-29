import React from 'react';

const SkillCard = ({ Icon, name, borderColor,shadowColor }) => {
  return (
    <div className={`
      group flex items-center gap-4 p-4 bg-white rounded-2xl border-3
      ${borderColor} transition-all duration-200 cursor-pointer
      shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] 
      hover:shadow-none hover:translate-x-0.75 hover:translate-y-0.75
    `}>
      
      <div className="flex justify-center items-center w-12">
        <Icon size={35} className={`${shadowColor} transition-transform group-hover:rotate-12`}/>
      </div>

      <span className="text-lg font-semibold text-gray-700">
        {name}
      </span>
    </div>
  );
};

export default SkillCard;
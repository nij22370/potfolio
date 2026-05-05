import React from "react";
import { IconType } from "react-icons/lib";
type Props = {
  role: string;
  Icon: IconType;
  date?: string;
  description?: string;
};

const ResumeCard = ({ role, Icon, date, description }: Props) => {
  return (
    <div className="mb-10">
      <div className="flex items-start space-x-6 bg-white/5 backdrop-blur-sm border border-white/5 hover:border-cyan-500/30 transition-all duration-300 p-6 rounded-2xl group">
        <div className="w-14 h-14 bg-blue-900/30 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors">
          <Icon className="w-8 h-8 text-cyan-400" />
        </div>
        <div className="flex-1">
          {date && (
            <span className="inline-block mb-3 px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 text-xs font-bold tracking-wider uppercase">
              {date}
            </span>
          )}
          <h1 className="text-white text-xl font-bold group-hover:text-cyan-300 transition-colors">
            {role}
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed mt-3">
            {description || "Collaborated on high-impact web applications using modern frontend technologies."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;

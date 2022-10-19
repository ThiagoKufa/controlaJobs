import { useState } from "react";
import { BtnWrap } from "../widgets";
import { GiAlarmClock } from "react-icons/gi";
import { BsPlayCircle, BsPauseCircle } from "react-icons/bs";
import { BiMessageSquareDetail } from "react-icons/bi";

export function TaskCard() {
  const [isplaing, setIsplaing] = useState(true);
  return (
    <div
      className="
        flex
        gap-2 
        w-80 
        h-32 
        rounded-md 
        bg-slate-800 
        text-gray-300
        overflow-hidden
     "
    >
      <header className="flex items-center h-10 w-full gap-2 px-4 bg-slate-900">
        <h2 className="text-xl">Título da tarefa</h2>
        <div className="flex-1" />
        <BtnWrap
          onClick={() => {
            setIsplaing((old) => !old);
          }}
        >
          {isplaing ? (
            <BsPlayCircle size="1.35rem" />
          ) : (
            <BsPauseCircle size="1.35rem" />
          )}
        </BtnWrap>
        <div className="flex">
          <GiAlarmClock size="1.4rem" />
          1:30
        </div>
        <BtnWrap onClick={() => {}}>
          <BiMessageSquareDetail size="1.35rem" />
        </BtnWrap>
      </header>
    </div>
  );
}

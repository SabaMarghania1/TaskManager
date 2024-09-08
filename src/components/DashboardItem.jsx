import React from "react";
import i18n from "../i18n";

import { useTranslation } from "react-i18next";

export default function DashboardItem({ text, quantity }) {
  const { t } = useTranslation();

  return (
    <div className="bg-white p-4 text-[#252931] font-medium mb-10 rounded-lg  pb-11 flex flex-col gap-6 w-full">
      <p className="pb-3 border-solid border-b-[1px]  border-[#E7E8EA] ">
        {t(text)}
      </p>
      <h2 className="text-center text-[28px]">{quantity}</h2>
    </div>
  );
}

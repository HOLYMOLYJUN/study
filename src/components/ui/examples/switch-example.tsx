import { useState } from "react";
import CustomSwitch from "@/components/ui/switch";

export default function SwitchExample() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold dark:text-white">Switch</h2>
      
      <div className="flex items-center gap-4">
        <CustomSwitch
          checked={checked}
          onCheckedChange={setChecked}
          className="w-11 h-6 rounded-full bg-gray-300 data-[state=checked]:bg-blue-500"
          thumbClassName="block w-5 h-5 rounded-full bg-white transition-transform duration-200 translate-x-0.5 data-[state=checked]:translate-x-[22px]"
        />
        <span className="dark:text-white">Switch 상태: {checked ? "ON" : "OFF"}</span>
      </div>

      <div className="flex items-center gap-4">
        <CustomSwitch
          checked={true}
          disabled
          className="w-11 h-6 rounded-full bg-gray-200"
          thumbClassName="block w-5 h-5 rounded-full bg-gray-400 translate-x-0.5"
        />
        <span className="dark:text-white">비활성화된 Switch</span>
      </div>
    </div>
  );
}


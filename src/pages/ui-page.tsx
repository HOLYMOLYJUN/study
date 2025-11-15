import PageProvider from "@/components/provider/page-provider";

import ButtonExample from "@/components/ui/examples/button-example";
import SwitchExample from "@/components/ui/examples/switch-example";
import PopoverExample from "@/components/ui/examples/popover-example";
import DialogExample from "@/components/ui/examples/dialog-example";
import DropdownMenuExample from "@/components/ui/examples/dropdown-menu-example";
import SelectExample from "@/components/ui/examples/select-example";
import ScrollAreaExample from "@/components/ui/examples/scroll-area-example";

export default function UIPage() {
  return (
    <PageProvider>
      <div className="container mx-auto px-0 p-8 space-y-8">
        <h1 className="text-3xl font-bold dark:text-white">UI Components</h1>

        <SwitchExample />
        <PopoverExample />
        <DialogExample />
        <DropdownMenuExample />
        <SelectExample />
        <ScrollAreaExample />
        <ButtonExample />
      </div>
    </PageProvider>
  );
}


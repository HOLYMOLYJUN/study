import PageProvider from "@/components/provider/page-provider";
import SwitchExample from "@/components/ui/examples/switch-example";
import PopoverExample from "@/components/ui/examples/popover-example";
import DialogExample from "@/components/ui/examples/dialog-example";
import DropdownMenuExample from "@/components/ui/examples/dropdown-menu-example";

export default function UIPage() {
  return (
    <PageProvider>
      <div className="p-8 space-y-8">
        <h1 className="text-3xl font-bold dark:text-white">UI Components</h1>

        <SwitchExample />
        <PopoverExample />
        <DialogExample />
        <DropdownMenuExample />
      </div>
    </PageProvider>
  );
}


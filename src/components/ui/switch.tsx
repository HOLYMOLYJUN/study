import * as Switch from "@radix-ui/react-switch";

interface ISwitchProps {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
  thumbClassName?: string;
}

export default function CustomSwitch({
  checked,
  onCheckedChange,
  disabled = false,
  className = "",
  thumbClassName = "",
}: ISwitchProps) {
  return (
    <Switch.Root
      checked={checked}
      onCheckedChange={onCheckedChange}
      disabled={disabled}
      className={className}
    >
      <Switch.Thumb className={thumbClassName} />
    </Switch.Root>
  );
}


import { AlertCircleIcon } from "lucide-react";

interface Props {
  title: string;
  description: string;
}

export const ErrorState = ({ title, description }: Props) => {
  return (
    <div className="py-4 px-8 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-y-6 bg-background rounded-lg p-10 shadow-sm border">
        <AlertCircleIcon className="size-6 text-destructive" />
        <div className="flex flex-col gap-y-2 text-center">
          <h6 className="text-sm font-medium text-foreground">{title}</h6>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
};

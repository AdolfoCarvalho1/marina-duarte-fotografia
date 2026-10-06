export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const buttonBase =
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-card border px-[21px] py-[14px] text-body leading-none transition-colors duration-300";

export const btnSolid = cn(
  buttonBase,
  "border-stage-black bg-stage-black text-paper hover:border-obsidian hover:bg-obsidian"
);

export const btnGhost = cn(
  buttonBase,
  "border-obsidian bg-transparent text-obsidian hover:bg-obsidian/[0.06]"
);

export const btnSolidInverse = cn(
  buttonBase,
  "border-paper bg-paper text-obsidian hover:bg-paper/85"
);

export const btnGhostInverse = cn(
  buttonBase,
  "border-paper bg-transparent text-paper hover:bg-paper/10"
);
